import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Box, Toolbar } from '@material-ui/core'
import { ReactNode } from 'react'
import SwitchTheme from './SwitchTheme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '1rem'
    },
    toolbar: {
      justifyContent: 'space-between'
    }
  })
)

interface Props {
  children: ReactNode
}

export default function TopBar({ children }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbar}>
          <Box>{children}</Box>
          <SwitchTheme />
        </Toolbar>
      </AppBar>
    </div>
  )
}
