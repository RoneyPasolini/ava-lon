import { IconButton } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import React, { useContext } from 'react'
import { NavMenuContext } from '../../contexts/NavMenuContext'

export default function CloseMenuButton() {
  const { closeNavMenu } = useContext(NavMenuContext)
  return (
    <IconButton onClick={closeNavMenu}>
      <ChevronLeftIcon />
    </IconButton>
  )
}
