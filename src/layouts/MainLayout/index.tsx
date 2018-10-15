import * as React from 'react'
import { Layout } from 'antd'
// Hocs
import IsAuthenticated from '~/hocs/IsAuthenticated'
// Components
import MenuSider from './MenuSider'
// Styles
import { LogoWrapper, TriggerIcon } from './styles'

const { Content, Footer, Sider, Header } = Layout

interface IProps {}
export class MainLayout extends React.PureComponent<IProps> {
  public state = {
    collapsed: false
  }

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  public render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          breakpoint='lg'
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <LogoWrapper className='logo'>
            {/* <img
              className='logo-image'
              src={require('~/assets/images/logo.png')}
              alt=''
            /> */}
            {/* <span className='logo-text'>APP</span> */}
          </LogoWrapper>

          <MenuSider />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <TriggerIcon
              className='trigger'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            2018 &copy; {process.env.REACT_APP_NAME}
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default IsAuthenticated(MainLayout, {
  /**
   * * To redirect should defined manually per-page.
   */
  disableRedirect: true,
  /**
   * * Every containers uses this hocs will fetching user data from server.
   */
  fetchUser: true
})
