import React from 'react'
  import { PageHeader, ExperienceListPrimary } from 'app/components'
  import { Layout, Col } from 'app/helpers/Layout'
  import ListLoader from 'app/helpers/ListLoader'
  import { Button } from '@material-ui/core'
  import { Add } from '@material-ui/icons'
  import { Link } from 'react-router-dom'
  
  const PageLayout = props => {
    return (
      <React.Fragment>
        <PageHeader
          title="Experiences"
          rightSection={
            <Button
              startIcon={<Add />}
              className="align-self-end"
              component={Link}
              variant="contained"
              color="primary"
              to={`/experience/create`}>
              Create
            </Button>
          }
        />
        <Layout container={{ fluid: true }}>
          <Col>
            <ListLoader collection="experiences">
              <ExperienceListPrimary colxs={12} colmd={4} />
            </ListLoader>
          </Col>
        </Layout>
      </React.Fragment>
    )
  }
  
  export default PageLayout