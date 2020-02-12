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
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { useFirebase, useFirestore } from 'react-redux-firebase'
import { ADMIN_PANEL_PATH, LOGIN_PATH } from '../../paths'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

function Layout(props) {
  const classes = useStyles()
  const firebase = useFirebase()
  const firestore = useFirestore()
  const [email, setEmail] = React.useState('')
  const [errorMsg, setErrorMsg] = React.useState('')
  const [errorVisibility, setErrorVisibility] = React.useState(false)

  const emailLogin = () => {
    const creds = { email }
    firebase.login(creds).catch(err => {
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
        <Alert onClose={() => setErrorVisibility(false)} severity="error">
          {errorMsg}
        </Alert>
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
                Forgot password?
              </Typography>
              {/* <Box my={4}>
                <GoogleButton
                  onClick={googleLogin}
                  data-test="google-auth-button"
                />
              </Box> */}
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Enter account email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submit}
                  onClick={emailLogin}>
                  Restore password
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      component={RouterLink}
                      to={LOGIN_PATH}
                      variant="body2">
                      {'Go to Sign In page'}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
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
