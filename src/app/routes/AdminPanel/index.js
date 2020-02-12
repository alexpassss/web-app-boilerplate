import Layout from './layout'
import { ADMIN_PANEL_PATH as path } from '../paths'
import { withRouter } from 'react-router-dom'

export default {
  path,
  component: withRouter(Layout)
}
