import React from 'react'
  import { Layout, Row, Col } from 'app/helpers/Layout'
  import { Form, Field } from 'react-final-form'
  import { TextField } from 'final-form-material-ui'
  import { Button } from '@material-ui/core'
  import { useFirestore } from 'react-redux-firebase'
  import { Delete, Check } from '@material-ui/icons'
  
  const Template = props => {
    const formId = 'experienceForm-1582020013781'
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
          role: props.data && props.data.role,
company: props.data && props.data.company,
startDate: props.data && props.data.startDate,
endDate: props.data && props.data.endDate,
skills: props.data && props.data.skills,
description: props.data && props.data.description,

        }}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form id={formId} onSubmit={handleSubmit}>
            <Layout>
              <Col xs="12" mb={2}>
      <Field
        fullWidth
        required
        name="role"
        component={TextField}
        type="text"
        label="Enter role"
      />
    </Col>
<Col xs="12" mb={2}>
      <Field
        fullWidth
        required
        name="company"
        component={TextField}
        type="text"
        label="Enter company"
      />
    </Col>
<Col xs="12" mb={2}>
      <Field
        fullWidth
        required
        name="startDate"
        component={TextField}
        type="text"
        label="Enter startDate"
      />
    </Col>
<Col xs="12" mb={2}>
      <Field
        fullWidth
        required
        name="endDate"
        component={TextField}
        type="text"
        label="Enter endDate"
      />
    </Col>
<Col xs="12" mb={2}>
      <Field
        fullWidth
        required
        name="skills"
        component={TextField}
        type="text"
        label="Enter skills"
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
  