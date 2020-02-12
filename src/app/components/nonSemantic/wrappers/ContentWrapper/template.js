import React from 'react'
import { Box } from '@material-ui/core'

function Template(props) {
  return (
    <Box flexGrow={1} position="relative">
      {props.children}
    </Box>
  )
}

export default Template
