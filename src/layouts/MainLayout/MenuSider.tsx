import * as React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu

export default withRouter(props => {
  const location = props.location

  function redirectTo () {
    props.history.push(this)
  }

  return (
    <Menu
      theme='dark'
      mode='inline'
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={['/dashboard']}
      defaultOpenKeys={['/dashboard', props.match.url]}
    >
      <Menu.Item key='/dashboard'>
        <NavLink to={'/dashboard'}>
          <Icon type='dashboard' />
          <span>Dashboard</span>
        </NavLink>
      </Menu.Item>

      <SubMenu
        key='/user'
        onTitleClick={redirectTo.bind('/user/member')}
        title={
          <React.Fragment>
            <Icon type='user' />
            <span>User</span>
          </React.Fragment>
        }
      >
        <Menu.Item key='/user/member'>
          <NavLink to={'/user/member'}>Member</NavLink>
        </Menu.Item>

        <Menu.Item key='/user/admin'>
          <NavLink to={'/user/admin'}>Admin</NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key='/logout'>
        <NavLink to={'/logout'}>
          <Icon type='logout' />
          <span>Keluar</span>
        </NavLink>
      </Menu.Item>
    </Menu>
  )
})
