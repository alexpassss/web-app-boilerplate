import React from 'react'
  import { ProjectCombinedPrimary } from 'app/components'
  import { Layout, Col } from 'app/helpers/Layout'
  
  const Template = props => {
    const list = props.list
    return (
      <Layout container={{ fluid: true }}>
        {list &&
          Object.values(list).map(listItem => (
            <Col
              key={listItem.id}
              xs={props.colxs}
              sm={props.colsm}
              md={props.colmd}
              lg={props.collg}
              xl={props.colxl}>
              <ProjectCombinedPrimary data={listItem} key={listItem.id} />
            </Col>
          ))}
      </Layout>
    )
  }
  
  export default Template