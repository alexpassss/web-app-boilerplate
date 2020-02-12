import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import Switch from '@material-ui/core/Switch'
import { Add } from '@material-ui/icons'
import TextField from '@material-ui/core/TextField'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}))

export default function ClippedDrawer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
          <Row>
            <Col className="mt-2 mb-5">
              <Typography variant="h3">UI styleguide</Typography>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col id="buttons" xs={12} className="mb-3">
              <Typography variant="h5">Buttons</Typography>
            </Col>
            <Col xs={4} className="mb-3">
              <Row className="mb-2">
                <Col>
                  <Button variant="contained" color="primary" size="small">
                    Primary
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="contained" size="small">
                    Default
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="contained" size="small" disabled>
                    Disabled
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={4} className="mb-3">
              <Row className="mb-2">
                <Col>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Add size="20px" color="#fff" />}>
                    Primary
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="contained">Default</Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="contained" disabled>
                    Disabled
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={4} className="mb-3">
              <Row className="mb-2">
                <Col>
                  <Button variant="contained" color="primary" size="large">
                    Primary
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="contained" size="large">
                    Default
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="contained" size="large" disabled>
                    Disabled
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={4} className="mb-3">
              <Row className="mb-2">
                <Col>
                  <Button variant="text" color="primary" size="small">
                    Primary
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="text" size="small">
                    Default
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="text" size="small" disabled>
                    Disabled
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={4} className="mb-3">
              <Row className="mb-2">
                <Col>
                  <Button variant="text" color="primary">
                    Primary
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="text">Default</Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="text" disabled>
                    Disabled
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={4} className="mb-3">
              <Row className="mb-2">
                <Col>
                  <Button variant="text" color="primary" size="large">
                    Primary
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="text" size="large">
                    Default
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button variant="text" size="large" disabled>
                    Disabled
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <ButtonGroup variant="contained" color="primary">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col id="inputs" xs={12} className="mb-3">
              <Typography variant="h5">Inputs</Typography>
            </Col>
            <Col xs={3} className="mb-3">
              <TextField label="Password" />
            </Col>
            <Col xs={3} className="mb-3">
              <TextField label="Password" />
            </Col>
            <Col xs={3} className="mb-3">
              <TextField error label="Password" helperText="Incorrect entry." />
            </Col>
            <Col xs={3} className="mb-3">
              <TextField error label="Password" helperText="Incorrect entry." />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col id="checkboxes" xs={12} className="mb-3">
              <Typography variant="h5">Checkboxes</Typography>
            </Col>
            <Col xs={3} className="mb-3">
              <Checkbox color="primary" checked />
              <Checkbox color="primary" />
            </Col>
            <Col xs={3} className="mb-3">
              <Checkbox color="secondary" checked />
              <Checkbox color="secondary" />
            </Col>
            <Col xs={3} className="mb-3">
              <Checkbox color="default" checked />
              <Checkbox color="default" />
            </Col>
            <Col xs={3} className="mb-3">
              <Checkbox disabled checked />
              <Checkbox disabled />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col id="radios" xs={12} className="mb-3">
              <Typography variant="h5">Radio buttons</Typography>
            </Col>
            <Col xs={3} className="mb-3">
              <Radio color="primary" checked />
              <Radio color="primary" />
            </Col>
            <Col xs={3} className="mb-3">
              <Radio color="secondary" checked />
              <Radio color="secondary" />
            </Col>
            <Col xs={3} className="mb-3">
              <Radio color="default" checked />
              <Radio color="default" />
            </Col>
            <Col xs={3} className="mb-3">
              <Radio disabled checked />
              <Radio disabled />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col id="switchers" xs={12} className="mb-3">
              <Typography variant="h5">Switchers</Typography>
            </Col>
            <Col xs={3} className="mb-3">
              <Switch color="primary" checked />
              <Switch color="primary" />
            </Col>
            <Col xs={3} className="mb-3">
              <Switch color="secondary" checked />
              <Switch color="secondary" />
            </Col>
            <Col xs={3} className="mb-3">
              <Switch color="default" checked />
              <Switch color="default" />
            </Col>
            <Col xs={3} className="mb-3">
              <Switch disabled checked />
              <Switch disabled />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col id="typography" xs={12} className="mb-3">
              <Typography variant="h5">Typography</Typography>
            </Col>
            <Col xs={12} className="mb-3">
              <Typography variant="h1" component="h2" gutterBottom>
                h1. Heading
              </Typography>
              <Typography variant="h2" gutterBottom>
                h2. Heading
              </Typography>
              <Typography variant="h3" gutterBottom>
                h3. Heading
              </Typography>
              <Typography variant="h4" gutterBottom>
                h4. Heading
              </Typography>
              <Typography variant="h5" gutterBottom>
                h5. Heading
              </Typography>
              <Typography variant="h6" gutterBottom>
                h6. Heading
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="button" display="block" gutterBottom>
                button text
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                caption text
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                overline text
              </Typography>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}
