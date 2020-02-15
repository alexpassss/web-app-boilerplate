import { iconSize, colorDark } from '../../../../styles/theme'

const styles = {
  animated: {
    transition: 'max-height 1s'
  },
  defaultPaddingTop: 1.5,
  defaultPaddingBottom: 1.5,
  defaultMarginBottom: 4,
  defaultMarginTop: 4,
  rows: [
    {
      defaultMarginBottom: 0,
      cols: [
        {
          pr: 0,
          Divider: {
            ml: 0.5,
            mt: 1,
            mb: 1
          },
          IconButton: {
            size: iconSize.md,
            color: colorDark.default
          }
        },
        {
          Typography: {
            variant: 'h4'
          }
        }
      ]
    },
    {
      defaultMarginBottom: 0
    }
  ]
}

export default styles
