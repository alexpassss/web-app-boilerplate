import React from 'react'
  import { Layout, Row, Col } from 'app/helpers/Layout'
  import { Form, Field } from 'react-final-form'
  import { TextField } from 'final-form-material-ui'
  import { Button } from '@material-ui/core'
  import { useFirestore } from 'react-redux-firebase'
  import { Delete, Check } from '@material-ui/icons'
  
  const Template = props => {
    const formId = 'projectForm-1582019385024'
    const firestore = useFirestore()
    const triggerSubmitForm = () => {
      document
        .getElementById(formId)
        .dispatchEvent(new Event('submit', { cancelable: true }))
    }
    const onSubmit = data => {
      const isCreate = props.isCreate
      if (isCreate) {
        const newId = firestore.collection(props.collection).doc().id
        firestore
          .collection(props.collection)
          .doc(newId)
          .set({
            id: newId,
            ...data
          })
      } else {
        firestore
          .collection(props.collection)
          .doc(props.data.id || props.id)
          .update({
            ...data
          })
      }
  
      props.onSubmit && props.onSubmit()
    }
    const onCancel = () => {
      props.onCancel && props.onCancel()
    }
    const onDelete = () => {
      firestore
        .collection(props.collection)
        .doc(props.data.id || props.id)
        .delete()
  
      props.onDelete && props.onDelete()
    }
    return (
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: props.data && props.data.name,
description: props.data && props.data.description,

        }}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form id={formId} onSubmit={handleSubmit}>
            <Layout>
              <Col xs="12" mb={2}>
      <Field
        fullWidth
        required
        name="name"
        component={TextField}
        type="text"
        label="Enter name"
      />
    </Col>
<Col xs="12" mb={2}>
      <Field
        fullWidth
        required
        name="description"
        component={TextField}
        type="text"
        label="Enter description"
      />
    </Col>

              <Col>
                <Row justifyContent="space-between">
                  <Col xs="12" md="auto">
                    <Button
                      startIcon={<Delete />}
                      variant="contained"
                      onClick={onDelete}>
                      Delete
                    </Button>
                  </Col>
                  <Col xs="12" md="auto">
                    <Row>
                      <Col xs="12" md="auto" alignSelf="flex-end">
                        <Button variant="contained" onClick={onCancel}>
                          Cancel
                        </Button>
                      </Col>
                      <Col pl={0} xs="12" md="auto" alignSelf="flex-end">
                        <Button
                          startIcon={<Check />}
                          color="primary"
                          variant="contained"
                          disabled={submitting || pristine}
                          onClick={triggerSubmitForm}>
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Layout>
          </form>
        )}
      />
    )
  }
  
  export default Template
  