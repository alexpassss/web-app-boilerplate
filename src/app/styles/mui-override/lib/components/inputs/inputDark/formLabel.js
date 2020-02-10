import { colorWhite, colorSecondary } from 'app/styles/theme'

const MuiFormLabel = {
  root: {
    color: colorWhite.lighten2,
    '&$focused': {
      color: colorSecondary.default
    }
  }
}

export default MuiFormLabel
