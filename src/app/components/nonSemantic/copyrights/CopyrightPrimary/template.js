import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import PropTypes from 'prop-types'

function Template(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={props.url}>
        {props.name}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

Template.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}

export default Template
