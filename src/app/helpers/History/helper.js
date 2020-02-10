import React from 'react'
import history from '../../utils/history'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class History extends React.Component {
  componentDidUpdate() {
    this.onRouteChanged()
  }
  onRouteChanged() {
    history.push(this.props.location.pathname)
    this.props.onLocationChange(this.props.location)
  }
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onLocationChange: location => {
      dispatch({
        type: 'LOCATION_CHANGE',
        payload: location
      })
    }
  })
)(withRouter(History))
