import React from 'react'
import { UserEditPrimary } from 'app/components'
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
        <PageHeader title="Edit profile" />
        <ItemLoader collection="users" id={id}>
          <UserEditPrimary
            collection="users"
            onSubmit={() => history.goBack()}
            onCancel={() => history.goBack()}
            onDelete={() => history.push('/admin-panel/users')}
          />
        </ItemLoader>
      </Col>
    </Layout>
  )
}

export default PageLayout
