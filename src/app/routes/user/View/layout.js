import React from 'react'
import { useParams } from 'react-router-dom'
import { PageHeader, UserViewPrimary } from 'app/components'
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
          title="Profile"
          rightSection={
            <Button
              startIcon={<Edit />}
              className="align-self-end"
              component={Link}
              to={`/users/${id}/edit`}>
              Edit
            </Button>
          }
        />
        <ItemLoader collection="users" id={id}>
          <UserViewPrimary />
        </ItemLoader>
      </Col>
    </Layout>
  )
}

export default PageLayout
