import typography from '../../root/typography'

export default function lh(size) {
  return typography.lineHeight[size] + typography.lineHeight._dimension
}
