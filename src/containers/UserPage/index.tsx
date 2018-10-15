import * as React from 'react'
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
// Components
import LoadableEmbedPage from '~/components/LoadableEmbedPage'
// Layouts
import MainLayout from '~/layouts/MainLayout'

const MemberPage = LoadableEmbedPage({
  loader: () => import('./pages/MemberPage')
})

interface IProps extends RouteComponentProps {}

class UserPage extends React.PureComponent<IProps> {
  public render () {
    const url = this.props.match.url

    return (
      <MainLayout>
        <Switch>
          <Route path={`${url}/member`} component={MemberPage} />
        </Switch>
      </MainLayout>
    )
  }
}

export default withRouter(UserPage)
