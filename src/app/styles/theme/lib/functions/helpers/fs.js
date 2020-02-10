import typography from '../../root/typography'

export default function fs(size) {
  return typography.fontSize[size] + typography.fontSize._dimension
}
