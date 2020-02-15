import { colorDark } from '../../../../styles/theme'

const styles = {
  scrollableWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflow: 'auto',
    '&::-webkit-scrollbar-track': {
      borderRadius: '2px',
      backgroundColor: colorDark.lighten5
    },
    '&::-webkit-scrollbar': {
      width: '3px',
      backgroundColor: colorDark.lighten5
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '2px',
      backgroundColor: colorDark.lighten2
    }
  }
}

export default styles
