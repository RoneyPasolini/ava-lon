import { Box, Container, makeStyles } from '@material-ui/core'
import Navigation from '../Navigation/Navigation'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    width: '100%',
    height: '100%',
    padding: '2rem',
    borderRadius: '10px'
  }
}))

interface Props {
  children: any
}

export default function PageLayout({ children }: Props) {
  const classes = useStyles()

  return (
    <>
      <Navigation />
      <Container component="main" style={{ height: '200vh' }}>
        <Box className={classes.content}>{children}</Box>
      </Container>
    </>
  )
}
