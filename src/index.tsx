import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import MobXDevTools from 'mobx-react-devtools'
import 'normalize.css/normalize.css'

import Routes from './Routes'
import stores from './stores'

import { IS_DEV } from './helpers'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

export const App = () => (
  <Provider {...stores}>
    <React.Fragment>
      <Routes />
      { IS_DEV && <MobXDevTools /> }
    </React.Fragment>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
