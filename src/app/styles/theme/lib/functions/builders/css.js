import _ from 'lodash'

export default function css(key, value) {
  return _.kebabCase(key) + ': ' + value + ';'
}
