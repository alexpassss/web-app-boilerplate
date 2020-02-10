import { colorDark, colorWhite } from 'app/styles/theme'

const MuiFormHelperText = {
  root: {
    color: colorDark.lighten1,
    '&$error': {
      color: colorWhite.lighten1
    }
  },
  contained: {
    margin: '8px 12px 0'
  }
}

export default MuiFormHelperText
