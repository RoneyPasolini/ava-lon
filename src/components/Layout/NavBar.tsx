import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import NavMenu from './NavMenu'

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

export default function NavBar() {
  const classes = useStyles()

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  const openNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen)
  }

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
      <NavMenu navItems={['Test']} isOpen={isNavMenuOpen} />
    </div>
  )
}
