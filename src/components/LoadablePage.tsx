import * as React from 'react'
import * as Loadable from 'react-loadable'
// Components
import LoadingPage from './LoadingPage'

export default function (opts) {
  return Loadable(
    Object.assign(
      {
        loading: props => <LoadingPage {...props} />,
        delay: 200,
        timeout: 10000
      },
      opts
    )
  )
}
