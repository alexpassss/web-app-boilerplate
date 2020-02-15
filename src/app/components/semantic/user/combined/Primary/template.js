import React from 'react'
import { Box, Paper } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { UserViewPrimary, UserEditPrimary } from 'app/components'
import { Layout, Col } from 'app/helpers/Layout'
import { Edit } from '@material-ui/icons'

const Template = props => {
  const [editMode, setEditMode] = React.useState(false)
  return (
    <Box
      py={props.py || 2}
      px={props.px || 0}
      mb={props.mb || 2}
      ml={props.ml || 0}
      mt={props.mt || 0}
      mr={props.mr || 0}
      component={Paper}
      variant={props.outlined && 'outlined'}
      elevation={props.elevation || 1}>
      {editMode ? (
        <UserEditPrimary
          collection="users"
          onSubmit={() => setEditMode(false)}
          onCancel={() => setEditMode(false)}
          data={props.data}
        />
      ) : (
        <React.Fragment>
          <Layout container={{ fluid: true }}>
            <Col>
              <UserViewPrimary
                data={props.data}
                container={{ fluid: true, px: 0, mb: 2 }}
              />
            </Col>
            <Col xs="12" md="auto">
              <IconButton onClick={() => setEditMode(true)} aria-label="delete">
                <Edit />
              </IconButton>
            </Col>
          </Layout>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Template
