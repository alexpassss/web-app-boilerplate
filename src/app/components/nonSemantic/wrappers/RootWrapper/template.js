import React from 'react'
import { MainHeader } from '../../../index'

const Template = ({ children }) => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Template
