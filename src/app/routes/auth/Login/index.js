import Layout from './layout'
import { LOGIN_PATH as path } from '../../paths'
import { withRouter } from 'react-router-dom'

export default {
  exact: true,
  path,
  component: withRouter(Layout)
}
