import React from 'react'
  import { Avatar, Typography } from '@material-ui/core'
  import Skeleton from '@material-ui/lab/Skeleton'
  import { Layout, Col } from 'app/helpers/Layout'
  import { Link } from 'react-router-dom'
  
  const Template = props => {
    const id = props.data && props.data.id
const name = props.data && props.data.name
const description = props.data && props.data.description

    return (
      <Layout container={props.container || { px: 0 }} row={props.row}>
        {id ? (
          <React.Fragment>
            <Col xs="12" mb={1}>
        <Link to={`/projects/${id}`} variant="body1">
          {id || 'No id'}
        </Link>
      </Col>
<Col xs="12">
        <Typography variant="body2">
          {name || 'No name'}
        </Typography>
      </Col>
<Col xs="12">
        <Typography variant="body2">
          {description || 'No description'}
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