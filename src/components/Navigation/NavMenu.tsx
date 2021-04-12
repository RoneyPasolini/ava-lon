import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import { NavMenuContext } from '../../contexts/NavMenuContext'
import { useContext } from 'react'
import CloseMenuButton from './CloseMenuButton'

interface Props {
  navItems: string[]
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
