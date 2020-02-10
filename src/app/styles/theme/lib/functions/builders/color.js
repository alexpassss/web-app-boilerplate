import variant from './variant'

export default function color(config, vr) {
  let variantConfig = config.variant[vr]
  return variant(variantConfig)
}
