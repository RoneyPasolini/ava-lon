import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
  Box
} from '@material-ui/core'
import Link from 'next/link'
import SwitchTheme from '../components/Layout/SwitchTheme'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  switchTheme: {
    position: 'absolute',
    top: '0',
    right: '0'
  }
}))

export default function SignIn() {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.switchTheme}>
        <SwitchTheme />
      </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h2">
            AVA-LON
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Link href="/">
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </>
  )
}
