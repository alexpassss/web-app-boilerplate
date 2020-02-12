import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'

function Template(props) {
  return (
    <MuiAlert
      elevation={props.elevation || 6}
      variant={props.variant || 'filled'}
      {...props}
    />
  )
}

Template.propTypes = {
  elevation: PropTypes.number,
  variant: PropTypes.string
}

export default Template
