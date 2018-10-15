import * as React from 'react'
import { Skeleton } from 'antd'
// Layouts
import { MainLayout } from '~/layouts/MainLayout'

class LoadingPage extends React.PureComponent {
  public render () {
    return (
      <MainLayout>
        <Skeleton />
      </MainLayout>
    )
  }
}

export default LoadingPage
