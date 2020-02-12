import React from 'react'
import { MainHeader } from '../../../index'

const Template = ({ children }) => {
  return (
    <React.Fragment>
      <MainHeader />
      {children}
    </React.Fragment>
  )
}

export default Template
