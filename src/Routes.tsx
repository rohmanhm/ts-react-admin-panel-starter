import * as React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
// Components
import LoadableEmbedPage from '~/components/LoadableEmbedPage'
import LoadablePage from '~/components/LoadablePage'
// Helpers
import { removeAuthentication } from '~/helpers'

// Pages
const LoginPage = LoadableEmbedPage({
  loader: () => import('~/containers/LoginPage')
})
const DashboardPage = LoadablePage({
  loader: () => import('~/containers/DashboardPage')
})
const UserPage = LoadablePage({
  loader: () => import('~/containers/UserPage')
})

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' exact={true} component={LoginPage} />
      <Route path='/user' component={UserPage} />

      {/* tslint:disable jsx-no-lambda */}
      <Route
        path='/logout'
        exact={true}
        render={() => {
          removeAuthentication()
          return <Redirect to={'/'} />
        }}
      />
      {/* tslint:enable */}
      <Route path='/' component={DashboardPage} />
    </Switch>
  </BrowserRouter>
)
