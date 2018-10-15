import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout } from 'antd'
// Components
import LoginForm from './components/LoginForm'
import Content from '~/components/Content'
// Styled
import { LoginWrapper, Title } from './styles'
import { readAuthentication } from 'helpers'

interface IProps extends RouteComponentProps<{}> {}
class LoginPage extends React.Component<IProps> {
  constructor (props: IProps) {
    super(props)
    /**
     * * Prevent user to relogin after Authenticated.
     */
    const isAuthenticated = readAuthentication()
    if (isAuthenticated) {
      this.props.history.replace('/')
    }
  }

  public render () {
    return (
      <Layout>
        <LoginWrapper>
          <Title>
            <h1>Masuk ke Akun</h1>
          </Title>
          <Content>
            <LoginForm />
          </Content>
        </LoginWrapper>
      </Layout>
    )
  }
}

export default withRouter(LoginPage)
