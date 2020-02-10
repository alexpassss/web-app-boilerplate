import AppNavigator from './layout'
import { withRouter } from 'react-router-dom'

export default {
  path: '/navigator',
  component: withRouter(AppNavigator)
}
