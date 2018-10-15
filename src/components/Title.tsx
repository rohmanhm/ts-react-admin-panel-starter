import * as React from 'react'
import styled from 'react-emotion'

export const Title = styled('div')``

export default (props: React.Props<any>) => (
  <Title className='title'>{props.children}</Title>
)
