import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'

import GoogleButton from 'react-google-button'
import { useFirebase, useFirestore } from 'react-redux-firebase'
import { ADMIN_PANEL_PATH, LOGIN_PATH, FORGOT_PASSWORD_PATH } from '../../paths'
import { CopyrightPrimary, AlertPrimary } from '../../../components'
import useStyles from './styles'

function Layout(props) {
  const classes = useStyles()
  const firebase = useFirebase()
  const firestore = useFirestore()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errorMsg, setErrorMsg] = React.useState('')
  const [errorVisibility, setErrorVisibility] = React.useState(false)

  const googleLogin = () => {
    firebase
      .login({ provider: 'google', type: 'popup' })
      .catch(err => console.log(err.message))

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        firestore
          .collection('users')
          .doc(user.uid)
          .set({
            id: user.uid,
            email: user.email || null,
            displayName: user.displayName || null,
            avatarUrl: user.photoURL || null
          })
        props.history.push(ADMIN_PANEL_PATH)
      }
    })
  }

  const emailSignup = () => {
    const creds = { email, password }
    firebase
      .createUser(creds, {
        email: creds.email
      })
      .catch(err => {
        setErrorMsg(err.message)
        setErrorVisibility(true)
      })
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        firestore
          .collection('users')
          .doc(user.uid)
          .set({
            id: user.uid,
            email: user.email || null,
            displayName: user.displayName || null,
            avatarUrl: user.photoURL || null
          })
        props.history.push(ADMIN_PANEL_PATH)
      }
    })
  }

  return (
    <React.Fragment>
      <Snackbar
        open={errorVisibility}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setErrorVisibility(false)}>
        <AlertPrimary
          onClose={() => setErrorVisibility(false)}
          severity="error">
          {errorMsg}
        </AlertPrimary>
      </Snackbar>
      <Box className="container-fluid">
        <Box className={classes.root + ' row'}>
          <Box
            component={Paper}
            className={
              classes.image + ' col-12 col-sm-4 col-md-7 col-lg-8 col-xl-9'
            }
            elevation={6}
            square
          />
          <Box
            component={Paper}
            className="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3"
            elevation={6}
            square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box my={4}>
                <GoogleButton
                  onClick={googleLogin}
                  data-test="google-auth-button"
                />
              </Box>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submit}
                  onClick={emailSignup}>
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      component={RouterLink}
                      to={FORGOT_PASSWORD_PATH}
                      variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      component={RouterLink}
                      to={LOGIN_PATH}
                      variant="body2">
                      {'Already have an account? Sign In'}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <CopyrightPrimary
                    name={'Web app boilerplate'}
                    url={'https://google.com'}
                  />
                </Box>
              </form>
            </div>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Layout
