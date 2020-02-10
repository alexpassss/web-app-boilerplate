import primary from './colors/primary'
import secondary from './colors/secondary'

const gradients = {
  primary:
    'linear-gradient(60deg, ' +
    primary.default +
    ' 0%, ' +
    secondary.default +
    ' 70%)',
  secondary:
    'linear-gradient(60deg, ' +
    primary.darken1 +
    ' 0%, ' +
    secondary.default +
    ' 100%)'
}

export default gradients
