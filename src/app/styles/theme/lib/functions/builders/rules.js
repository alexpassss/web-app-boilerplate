import css from './css'
import stateRules from './stateRules'

const statesMap = {
  '&:hover': 'hover',
  '&:active': 'active',
  '&:visited': 'visited',
  '&:focus': 'focus'
}

function rules(config) {
  let keys = Object.keys(config)
  let style = ''

  keys.forEach(key => {
    if (!statesMap[key]) {
      let rule = css(key, config[key])
      style += rule
    } else {
      style += stateRules(statesMap[key], config[key])
    }
  })

  return style
}

export default rules
