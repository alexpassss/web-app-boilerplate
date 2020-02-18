import AppNavigator from './layout'
import { withRouter } from 'react-router-dom'

export default {
  exact: true,
  path: '/navigator',
  component: withRouter(AppNavigator)
}
