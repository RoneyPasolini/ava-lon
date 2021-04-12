import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'

import React, { useContext } from 'react'
import { NavMenuContext } from '../../contexts/NavMenuContext'

export default function OpenMenuButton() {
  const { openNavMenu } = useContext(NavMenuContext)
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={openNavMenu}
    >
      <MenuIcon />
    </IconButton>
  )
}
