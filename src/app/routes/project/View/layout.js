import React from 'react'
import { useParams } from 'react-router-dom'
import { PageHeader, ProjectViewPrimary } from 'app/components'
import ItemLoader from 'app/helpers/ItemLoader'
import { Layout, Col } from 'app/helpers/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Edit } from '@material-ui/icons'

const PageLayout = () => {
  let { id } = useParams()
  return (
    <Layout>
      <Col>
        <PageHeader
          title="Project"
          rightSection={
            <Button
              startIcon={<Edit />}
              className="align-self-end"
              component={Link}
              to={'/projects/' + id + '/edit'}>
              Edit
            </Button>
          }
        />
        <ItemLoader collection="projects" id={id}>
          <ProjectViewPrimary />
        </ItemLoader>
      </Col>
    </Layout>
  )
}

export default PageLayout
