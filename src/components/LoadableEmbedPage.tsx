import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Skeleton } from 'antd'

export default function (opts) {
  return Loadable(
    Object.assign(
      {
        loading: props => <Skeleton {...props} />,
        delay: 200,
        timeout: 10000
      },
      opts
    )
  )
}
