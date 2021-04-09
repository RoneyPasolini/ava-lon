import { Box, Container, makeStyles } from '@material-ui/core'
import NavBar from './NavBar'

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
      <NavBar />
      <Container>
        <Box className={classes.content}>{children}</Box>
      </Container>
    </>
  )
}
