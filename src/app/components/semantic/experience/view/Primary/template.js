import React from 'react'
  import { Avatar, Typography } from '@material-ui/core'
  import Skeleton from '@material-ui/lab/Skeleton'
  import { Layout, Col } from 'app/helpers/Layout'
  import { Link } from 'react-router-dom'
  
  const Template = props => {
    const id = props.data && props.data.id
const role = props.data && props.data.role
const company = props.data && props.data.company
const startDate = props.data && props.data.startDate
const endDate = props.data && props.data.endDate
const skills = props.data && props.data.skills
const description = props.data && props.data.description

    return (
      <Layout container={props.container || { px: 0 }} row={props.row}>
        {id ? (
          <React.Fragment>
            <Col xs="12" mb={1}>
        <Link to={`/experiences/${id}`} variant="body1">
          {id || 'No id'}
        </Link>
      </Col>
<Col xs="12">
        <Typography variant="body2">
          {role || 'No role'}
        </Typography>
      </Col>
<Col xs="12">
        <Typography variant="body2">
          {company || 'No company'}
        </Typography>
      </Col>
<Col xs="12">
        <Typography variant="body2">
          {startDate || 'No startDate'}
        </Typography>
      </Col>
<Col xs="12">
        <Typography variant="body2">
          {endDate || 'No endDate'}
        </Typography>
      </Col>
<Col xs="12">
        <Typography variant="body2">
          {skills || 'No skills'}
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