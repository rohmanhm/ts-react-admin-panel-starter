import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import * as Lodash from 'lodash'
// Actions
// Helpers
import { readAuthentication, removeAuthentication } from '../helpers/auth'
// Stores
import { IRootStore } from '~/stores'
// Types

export interface IsAuthenticatedOptions {
  redirectTo?: string
  disableRedirect?: boolean
  fetchUser?: boolean
}

export default function IsAuthenticated<P, S, R> (
  Comp: React.ComponentType<any>,
  option?: IsAuthenticatedOptions
) {
  interface IOwnProps {}
  type TProps = P & IOwnProps & IRootStore & RouteComponentProps<R>

  const defaultOptions = {
    redirectTo: '/login',
    fetchUser: true,
    disableRedirect: false
  } as IsAuthenticatedOptions

  const options = {
    ...defaultOptions,
    ...option
  }

  @inject('AuthStore' as keyof IRootStore)
  @observer
  class IsAuthenticatedHOC extends React.Component<TProps, S> {
    public token: string

    constructor (props: TProps) {
      super(props)

      this.checkAuthorization()
    }

    public checkAuthorization = () => {
      const { AuthStore } = this.props

      this.token = readAuthentication()
      this.ifNullRedirect(this.token)

      if (this.token && Lodash.isEmpty(AuthStore.user) && options.fetchUser) {
        this.getProfile()
      }
    }

    public getProfile = () => {
      const { AuthStore } = this.props

      AuthStore.profile
        .then((res: any) => this.ifNullRedirect(res))
        .catch((_: any) => this.ifNullRedirect(false))
    }

    /**
     * * Logic to redirect the user from response.
     * @param data Response from server after Authenticated.
     */
    public ifNullRedirect (data: any) {
      // First condition, If token is null then redirect
      // Second condition, If disable redirect is false then redirect
      if (!data && !options.disableRedirect) {
        const redirectPage = options.redirectTo

        removeAuthentication()
        this.props.history.replace(redirectPage)
      }
    }

    public render () {
      return <Comp {...this.props} />
    }
  }

  return withRouter(IsAuthenticatedHOC)
}
