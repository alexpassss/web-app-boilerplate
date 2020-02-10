import Loadable from 'react-loadable'
import { LoadingSpinner } from '../../components'

export default {
  component: Loadable({
    loader: () => import('./layout'),
    loading: LoadingSpinner
  })
}
