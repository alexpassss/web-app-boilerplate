import React from 'react'
import Container from './Container'
import Row from './Row'

const Template = props => {
  return (
    <Container {...props.container}>
      <Row {...props.row}>{props.children}</Row>
    </Container>
  )
}

export default Template
