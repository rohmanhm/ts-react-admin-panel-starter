import * as React from 'react'
import styled from 'react-emotion'

export const Content = styled('div')`
`

export default (props: React.Props<any>) => (
  <Content className='content'>{props.children}</Content>
)
