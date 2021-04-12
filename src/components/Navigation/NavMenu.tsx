import {
  Divider,
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

function CloseMenuButton() {
  const { closeNavMenu } = useContext(NavMenuContext)
  return (
    <IconButton onClick={closeNavMenu}>
      <ChevronLeftIcon />
    </IconButton>
  )
}

export default function NavMenu({ navItems }: Props) {
  const { isOpen } = useContext(NavMenuContext)

  return (
    <Drawer variant="persistent" anchor="left" open={isOpen}>
      <CloseMenuButton />
      <Divider />
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
