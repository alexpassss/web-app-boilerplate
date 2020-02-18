import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const Helper = props => {
  const collection = props.collection

  useFirestoreConnect([{ collection: collection }])

  const list = useSelector(state => {
    return state.firestore.ordered && state.firestore.ordered[collection]
  })

  return (
    <React.Fragment>
      {React.cloneElement(props.children, { list })}
    </React.Fragment>
  )
}

export default Helper
