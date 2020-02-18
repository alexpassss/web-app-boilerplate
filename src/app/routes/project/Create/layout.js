import React from 'react'
  import { ProjectEditPrimary } from 'app/components'
  import ItemLoader from 'app/helpers/ItemLoader'
  import { useParams } from 'react-router-dom'
  import { PageHeader } from 'app/components'
  import { Layout, Col } from 'app/helpers/Layout'
  import { useHistory } from 'react-router-dom'
  
  const PageLayout = () => {
    const { id } = useParams()
    const history = useHistory()
  
    return (
      <Layout>
        <Col>
          <PageHeader title="Create project" />
          <ItemLoader collection="users" id={id}>
            <ProjectEditPrimary
              collection="projects"
              isCreate={true}
              onSubmit={() => history.goBack()}
              onCancel={() => history.goBack()}
              onDelete={() => history.push('/admin-panel/projects')}
            />
          </ItemLoader>
        </Col>
      </Layout>
    )
  }
  
  export default PageLayout