import * as React from 'react'
import Helmet from 'react-helmet'
import { inject, observer } from 'mobx-react'
// Actions
import * as Actions from './actions'
// Components
import Title from '~/components/Title'
import Content from '~/components/Content'
// Stores
import { IRootStore, TRootStoreKeys } from '~/stores'
// Helpers
import { Debug } from '~/helpers'

interface IProps extends IRootStore {}

const DEBUG = Debug('MemberPage')

@inject('AppStore' as TRootStoreKeys)
@observer
class MemberPage extends React.Component<IProps> {
  constructor (props: IProps) {
    super(props)

    Actions.getMembers()
      .then(result => DEBUG('Success get members', result))
      .catch(err => DEBUG('Error get members', err))
  }

  public render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Kelola Member - {this.props.AppStore.appName}</title>
        </Helmet>
        <Title>
          <h1>Kelola Member</h1>
        </Title>
        <Content>Konten</Content>
      </React.Fragment>
    )
  }
}

export default MemberPage
