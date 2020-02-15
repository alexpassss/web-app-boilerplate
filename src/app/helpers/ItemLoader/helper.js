import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const Helper = props => {
  const id = props.id
  const collection = props.collection

  useFirestoreConnect([{ collection: collection, doc: id }])

  const data = useSelector(state => {
    return (
      state.firestore.data[collection] && state.firestore.data[collection][id]
    )
  })

  return (
    <React.Fragment>
      {React.cloneElement(props.children, { data })}
    </React.Fragment>
  )
}

export default Helper
