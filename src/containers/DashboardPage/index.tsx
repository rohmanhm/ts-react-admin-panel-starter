import * as React from 'react'
import { inject, observer } from 'mobx-react'
// Layouts
import MainLayout from '~/layouts/MainLayout'
// Components
import Title from '~/components/Title'
import Content from '~/components/Content'
// Stores
import { IRootStore, TRootStoreKeys } from '~/stores'

interface IProps extends IRootStore {}

@inject('AppStore' as TRootStoreKeys, 'AuthStore' as TRootStoreKeys)
@observer
class DashboardPage extends React.Component<IProps> {
  public render () {
    return (
      <MainLayout>
        <Title>
          <h1>
            Dashboard
          </h1>
        </Title>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit consequuntur illum commodi labore incidunt eveniet quae nemo dignissimos necessitatibus ex cum aliquam deleniti veniam, est blanditiis velit voluptas molestiae.
        </Content>
      </MainLayout>
    )
  }
}

export default DashboardPage
