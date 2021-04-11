import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import NavMenu from './NavMenu'
import { NavMenuContext, NavMenuProvider } from '../../contexts/NavMenuContext'

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

function TopBar() {
  const { openNavMenu } = useContext(NavMenuContext)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            AVA-LON
          </Typography>
        </Toolbar>
      </AppBar>
      <NavMenu navItems={['Test']} />
    </div>
  )
}

export default function NavBar() {
  return (
    <NavMenuProvider>
      <TopBar />
    </NavMenuProvider>
  )
}
