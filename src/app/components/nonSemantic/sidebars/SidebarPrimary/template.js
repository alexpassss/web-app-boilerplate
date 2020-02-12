import React, { useRef, useEffect } from 'react'
import {
  Box,
  makeStyles,
  IconButton,
  Typography,
  useMediaQuery,
  Tooltip
} from '@material-ui/core'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import PropTypes from 'prop-types'

import styles from './styles'

const useStyles = makeStyles(theme => styles)

function SidebarPrimary(props) {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:960px)')
  const wrapperRef = useRef(null)
  const [open, setOpen] = React.useState(
    matches ? !matches : props.isSidebarOpened
  )

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      if (matches) {
        setOpen(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <React.Fragment>
      {/* Preventing content jumping on mobile */}
      {open ? (
        matches ? (
          props.positionRight ? (
            <Box pl={4}></Box>
          ) : (
            <Box pr={4}></Box>
          )
        ) : null
      ) : null}
      <Box
        ref={wrapperRef}
        style={props.style}
        component="aside"
        width={props.width === 'sm' ? styles.width.sm : styles.width.md}
        className={
          open
            ? matches
              ? props.positionRight
                ? classes.asideMobileRight
                : classes.asideMobile
              : classes.aside
            : classes.asideClosed
        }>
        {open ? null : (
          <Typography
            uppercase="true"
            variant="caption"
            color="textSecondary"
            className={classes.verticalText}>
            {props.captionText}
          </Typography>
        )}
        <Tooltip
          title={
            props.tooltipText ? props.tooltipText : open ? 'Close' : 'Open'
          }
          placement={props.positionRight ? 'left' : 'right'}>
          <IconButton
            onClick={toggleMenu}
            size="small"
            className={
              props.positionRight
                ? classes.toggleMenuBtnRight
                : classes.toggleMenuBtn
            }>
            {open ? (
              <React.Fragment>
                {props.positionRight ? (
                  <ArrowRight fontSize="small" />
                ) : (
                  <ArrowLeft fontSize="small" />
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {props.collapseIcon ? (
                  <React.Fragment>{props.collapseIcon}</React.Fragment>
                ) : (
                  <React.Fragment>
                    {props.positionRight ? (
                      <ArrowLeft fontSize="small" />
                    ) : (
                      <ArrowRight fontSize="small" />
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </IconButton>
        </Tooltip>
        {open ? (
          <Box className={classes.scrollableWrapper}>{props.children}</Box>
        ) : null}
      </Box>
    </React.Fragment>
  )
}

SidebarPrimary.propTypes = {
  positionRight: PropTypes.bool,
  isSidebarOpened: PropTypes.bool,
  collapseIcon: PropTypes.element,
  captionText: PropTypes.string,
  width: PropTypes.string // sm
}

export default SidebarPrimary
