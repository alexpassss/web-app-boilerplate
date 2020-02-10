import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const dark = {
  darken1: Color(colors.black)
    .alpha(blending.darken1.forDark)
    .rgb()
    .string(),
  default: Color(colors.black)
    .alpha(blending.default.forDark)
    .rgb()
    .string(),
  lighten1: Color(colors.black)
    .alpha(blending.lighten1.forDark)
    .rgb()
    .string(),
  lighten2: Color(colors.black)
    .alpha(blending.lighten2.forDark)
    .rgb()
    .string(),
  lighten3: Color(colors.black)
    .alpha(blending.lighten3.forDark)
    .rgb()
    .string(),
  lighten4: Color(colors.black)
    .alpha(blending.lighten4.forDark)
    .rgb()
    .string(),
  lighten5: Color(colors.black)
    .alpha(blending.lighten5.forDark)
    .rgb()
    .string(),
  lighten6: Color(colors.black)
    .alpha(blending.lighten6.forDark)
    .rgb()
    .string()
}

export default dark
