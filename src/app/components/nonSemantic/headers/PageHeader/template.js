import React, { forwardRef } from 'react'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {
  Box,
  IconButton,
  Typography,
  Divider,
  makeStyles,
  Tooltip
} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import styles from './styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => styles)

// function PageHeader(props) {
const PageHeader = forwardRef((props, ref) => {
  const reactHistory = useHistory()
  const classes = useStyles()
  const back = () => {
    reactHistory.goBack()
  }

  return (
    <Box
      maxHeight={
        props.isHeaderVisible !== undefined
          ? props.isHeaderVisible
            ? '1000px'
            : '0px'
          : '1000px'
      }
      className={classes.animated}>
      <Box
        ref={ref}
        component="header"
        display={
          props.isHeaderVisible !== undefined
            ? props.isHeaderVisible
              ? 'block'
              : 'none'
            : 'block'
        }
        className="container-fluid"
        pt={
          props.paddingTop !== undefined
            ? props.paddingTop
            : styles.defaultPaddingTop
        }
        pb={
          props.paddingBottom !== undefined
            ? props.paddingBottom
            : styles.defaultPaddingBottom
        }
        mb={
          props.marginBottom !== undefined
            ? props.marginBottom
            : styles.defaultMarginBottom
        }
        mt={
          props.marginTop !== undefined
            ? props.marginTop
            : styles.defaultMarginTop
        }
        bgcolor={styles.backgroundColor}
        borderBottom={styles.borderBottom}>
        <Box
          className="row align-items-center"
          mb={
            props.firstLineMarginBottom || styles.rows[0].defaultMarginBottom
          }>
          {props.isBackBtnHidden ? null : (
            <React.Fragment>
              <Box
                className="col-auto"
                display="flex"
                pr={styles.rows[0].cols[0].pr}>
                <Tooltip title="Step backward" placement="bottom">
                  <IconButton onClick={back}>
                    <ArrowBack />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box
                display="flex"
                alignSelf="stretch"
                ml={styles.rows[0].cols[0].Divider.ml}
                mt={styles.rows[0].cols[0].Divider.mt}
                mb={styles.rows[0].cols[0].Divider.mb}>
                <Divider orientation="vertical" />
              </Box>
            </React.Fragment>
          )}
          {props.isTitleHidden & !props.title ? null : (
            <Box className="col-auto" display="flex">
              <Typography
                component="h1"
                variant={styles.rows[0].cols[1].Typography.variant}>
                {props.title}
              </Typography>
            </Box>
          )}
          {props.rightSection ? (
            <Box
              className={
                props.rightSectionWidth ? props.rightSectionWidth : 'col-auto'
              }
              ml="auto"
              display="flex">
              {props.rightSection}
            </Box>
          ) : null}
          {props.isTitleHidden &&
          !props.rightSection &&
          props.firstLineSectionOverrided ? (
            <Box className="col" display="flex">
              {props.firstLineSectionOverrided}
            </Box>
          ) : null}
        </Box>
        {props.secondLineSection ? (
          <Box
            className="row"
            mb={
              props.secondLineMarginBottom || styles.rows[1].defaultMarginBottom
            }>
            <Box className="col-12">{props.secondLineSection}</Box>
          </Box>
        ) : null}
        {props.thirdLineSection ? (
          <Box className="row">
            <Box className="col-12">{props.thirdLineSection}</Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
})
// }

PageHeader.propTypes = {
  isBackBtnHidden: PropTypes.bool,
  isTitleHidden: PropTypes.bool,
  title: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  firstLineMarginBottom: PropTypes.number,
  secondLineMarginBottom: PropTypes.number,
  rightSection: PropTypes.element,
  firstLineSectionOverrided: PropTypes.element,
  secondLineSection: PropTypes.element,
  thirdLineSection: PropTypes.element
}

export default withRouter(PageHeader)
