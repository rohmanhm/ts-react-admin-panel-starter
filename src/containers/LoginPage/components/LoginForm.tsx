import * as React from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import { inject, observer } from 'mobx-react'
import { Formik } from 'formik'
// Helpers
import { createAttrsErrors, createAttrsSuccess } from '~/helpers/antd'
// Types
import { IRootStore } from '~/stores'
import { TLoginResponse } from '~/actions/auth'

const FormItem = Form.Item

interface IProps extends IRootStore {}

@inject('AuthStore' as keyof IRootStore)
@observer
class LoginForm extends React.Component<IProps> {
  public componentDidMount () {
    this.props.AuthStore.startFetching()
  }

  public render () {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          isLoggedIn: false
        }}
        // tslint:disable jsx-no-lambda
        onSubmit={async (values, { setErrors, setFieldValue }) => {
          try {
            await this.props.AuthStore.login(values.email, values.password)

            setFieldValue('isLoggedIn', true)

            message.success('Sukses masuk ke akun')

            // Wait 1s to redirect to dashboard
            setTimeout(() => {
              window.location.replace('/dashboard')
            }, 1000)
          } catch (err) {
            const errResult = err as TLoginResponse

            setErrors(errResult.message as any)
          }
        }}
        render={({ values, errors, handleChange, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit} className='login-form'>
              <FormItem
                {...createAttrsErrors(errors && errors.email) as any}
                {...createAttrsSuccess(values.isLoggedIn)}
              >
                <Input
                  prefix={
                    <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='Username atau Email'
                  onChange={handleChange}
                  name='email'
                  value={values.email}
                />
              </FormItem>
              <FormItem
                {...createAttrsErrors(errors && errors.password) as any}
                {...createAttrsSuccess(values.isLoggedIn)}
              >
                <Input
                  prefix={
                    <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type='password'
                  placeholder='Password'
                  onChange={handleChange}
                  name='password'
                  value={values.password}
                />
              </FormItem>
              <FormItem>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Masuk
                </Button>
                Atau{' '}
                <a href={`${process.env.REACT_APP_NAME}/register`} target='_blank'>
                  daftar sekarang!
                </a>
              </FormItem>
            </Form>
          )
        }}
      />
    )
    // tslint:enable jsx-no-lambda
  }
}

export default LoginForm
