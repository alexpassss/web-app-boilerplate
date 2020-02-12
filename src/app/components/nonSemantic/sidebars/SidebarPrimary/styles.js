import {
  border,
  colorWhite,
  colorDark,
  iconSize,
  shadows,
  offset,
  lineHeight,
  fontWeight,
  letterSpacing,
  zIndex
} from '../../../../styles/theme'

const styles = {
  width: {
    sm: '240px',
    md: '320px'
  },
  aside: {
    backgroundColor: colorWhite.default,
    position: 'relative',
    borderRight: border['1px'].solid.dark.lighten6,
    boxShadow: shadows.xs,
    transition: 'width 0.3s'
  },
  asideMobile: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: colorWhite.default,
    borderRight: border['1px'].solid.dark.lighten6,
    boxShadow: shadows.md,
    zIndex: zIndex.drawer,
    transition: 'width 0.3s'
  },
  asideMobileRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colorWhite.default,
    borderRight: border['1px'].solid.dark.lighten6,
    boxShadow: shadows.md,
    zIndex: zIndex.drawer,
    transition: 'width 0.3s'
  },
  asideClosed: {
    backgroundColor: colorWhite.default,
    width: '32px',
    position: 'relative',
    borderRight: border['1px'].solid.dark.lighten6,
    boxShadow: shadows.xs,
    transition: 'width 0.3s'
  },
  scrollableWrapper: {
    width: '100%',
    paddingLeft: offset(8),
    paddingRight: offset(8),
    paddingTop: offset(16),
    paddingBottom: offset(16),
    overflow: 'auto',
    position: 'absolute',
    height: '100%',
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
  },
  toggleMenuBtn: {
    position: 'absolute',
    zIndex: 2,
    top: offset(4),
    right: offset(-8),
    backgroundColor: colorWhite.default,
    borderRadius: offset(8),
    boxShadow: shadows.xs,
    padding: offset(2),
    '&:hover': {
      backgroundColor: colorWhite.default,
      boxShadow: shadows.sm
    }
  },
  toggleMenuBtnRight: {
    position: 'absolute',
    zIndex: 2,
    top: offset(4),
    left: offset(-8),
    backgroundColor: colorWhite.default,
    borderRadius: offset(8),
    boxShadow: shadows.xs,
    padding: offset(2),
    '&:hover': {
      backgroundColor: colorWhite.default,
      boxShadow: shadows.sm
    }
  },
  toggleMenuBtnIcon: {
    size: iconSize.md,
    color: colorDark.default
  },
  verticalText: {
    position: 'absolute',
    transform: 'rotate(-90deg)',
    transformOrigin: 'top left',
    top: offset(80),
    width: '128px',
    textAlign: 'center',
    lineHeight: lineHeight.body2,
    textTransform: 'uppercase',
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing['2']
  }
}

export default styles
