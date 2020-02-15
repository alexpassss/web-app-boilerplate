import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { Layout, Col } from 'app/helpers/Layout'
import { Link } from 'react-router-dom'

const Template = props => {
  const id = props.data && props.data.id
  const name = props.data && props.data.displayName
  const email = props.data && props.data.email
  const avatarUrl = props.data && props.data.avatarUrl
  return (
    <Layout container={props.container || { px: 0 }} row={props.row}>
      {id ? (
        <React.Fragment>
          <Col xs="12" mb={2}>
            <Typography variant="caption" color="textSecondary">
              ID: {id}
            </Typography>
          </Col>
          <Col xs="12" mb={1}>
            <Avatar alt={name || email} src={avatarUrl} />
          </Col>
          <Col xs="12">
            <Link to={`/users/${id}`} variant="body1">
              {name || 'No name'}
            </Link>
          </Col>
          <Col xs="12">
            <Typography variant="caption" color="textSecondary">
              {email || 'No email'}
            </Typography>
          </Col>
        </React.Fragment>
      ) : (
        <Skeleton animation="wave" />
      )}
    </Layout>
  )
}

export default Template
