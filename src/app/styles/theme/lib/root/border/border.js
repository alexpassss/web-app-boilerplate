import primary from '../theme/colors/primary'
import secondary from '../theme/colors/secondary'
import dark from '../theme/colors/dark'
import white from '../theme/colors/white'

const border = {
  '1px': {
    solid: {
      primary: {
        default: '1px solid ' + primary.default
      },
      dark: {
        lighten1: '1px solid ' + dark.lighten1,
        lighten2: '1px solid ' + dark.lighten2,
        lighten3: '1px solid ' + dark.lighten3,
        lighten4: '1px solid ' + dark.lighten4
      },
      white: {
        lighten3: '1px solid ' + white.lighten3
      }
    },
    dashed: {
      dark: {
        lighten3: '1px dashed ' + dark.lighten3
      }
    }
  },
  '2px': {
    solid: {
      primary: {
        default: '2px solid ' + primary.default
      },
      secondary: {
        default: '2px solid ' + secondary.default
      },
      dark: {
        default: '2px solid ' + dark.default,
        lighten1: '2px solid ' + dark.lighten1
      }
    },
    dashed: {}
  },
  '3px': {
    solid: {},
    dashed: {}
  }
}

export default border
