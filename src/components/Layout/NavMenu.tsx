import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { useEffect, useState } from 'react'

interface Props {
  navItems: string[]
  isOpen: boolean
}

export default function NavMenu({ navItems, isOpen }: Props) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    console.log('useEffect')
    console.log(isOpen)
    setOpen(isOpen)
  }, [isOpen])

  const closeNavMenu = () => {
    setOpen(false)
  }

  console.log(open)

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <IconButton onClick={closeNavMenu}>
        <ChevronLeftIcon />
      </IconButton>
      <List>
        {navItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
