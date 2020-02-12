import React, { forwardRef } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import styles from './styles'

const useStyles = makeStyles(theme => styles)

const Template = forwardRef((props, ref) => {
  const classes = useStyles()

  return (
    <Box ref={ref} className={classes.scrollableWrapper}>
      {props.children}
    </Box>
  )
})

export default Template
