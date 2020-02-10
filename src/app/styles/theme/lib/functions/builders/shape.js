import size from './size'

export default function shape(config, sz) {
  let sizeConfig = config.size[sz]
  return size(sizeConfig)
}
