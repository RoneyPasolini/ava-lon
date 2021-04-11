import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { NavMenuContext } from '../../contexts/NavMenuContext'
import { useContext } from 'react'

interface Props {
  navItems: string[]
}

export default function NavMenu({ navItems }: Props) {
  const { isOpen, closeNavMenu } = useContext(NavMenuContext)

  return (
    <Drawer variant="persistent" anchor="left" open={isOpen}>
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
