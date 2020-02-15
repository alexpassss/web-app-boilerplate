import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const Helper = props => {
  const collection = props.collection

  useFirestoreConnect([{ collection: collection }])

  const list = useSelector(state => {
    return state.firestore.data && state.firestore.data[collection]
  })

  console.log('helper >', list)

  return (
    <React.Fragment>
      {React.cloneElement(props.children, { list })}
    </React.Fragment>
  )
}

export default Helper
