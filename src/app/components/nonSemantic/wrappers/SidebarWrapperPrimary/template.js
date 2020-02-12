import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import styles from './styles'

const useStyles = makeStyles(theme => styles)

function Template(props) {
  const classes = useStyles()
  return <Box className={classes.containerWrapper}>{props.children}</Box>
}

export default Template
