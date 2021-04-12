import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core'
import { ReactNode } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '1rem'
    },
    menuButton: {
      marginRight: theme.spacing(2)
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
        <Toolbar variant="dense">{children}</Toolbar>
      </AppBar>
    </div>
  )
}
