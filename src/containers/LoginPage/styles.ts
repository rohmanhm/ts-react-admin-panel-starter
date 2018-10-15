import styled from 'react-emotion'
import { Title as TitleComponent } from '~/components/Title'

export const Title = styled(TitleComponent)`
  text-align: center;
`

export const LoginWrapper = styled('div')`
  width: 300px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
`
