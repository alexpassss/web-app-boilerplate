import React from 'react'
import { PageHeader, UserListPrimary } from '../../../components'
import { Layout, Col } from 'app/helpers/Layout'
import ListLoader from 'app/helpers/ListLoader'

const PageLayout = props => {
  return (
    <React.Fragment>
      <PageHeader title="Users" />
      <Layout container={{ fluid: true }}>
        <Col>
          <ListLoader collection="users">
            <UserListPrimary colxs={12} colmd={4} />
          </ListLoader>
        </Col>
      </Layout>
    </React.Fragment>
  )
}

export default PageLayout
