import rules from './rules'

export default function stateRules(state, config) {
  let stateStyle = rules(config)
  return '&:' + state + '{' + stateStyle + '}'
}
