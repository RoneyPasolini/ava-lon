import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import Link from 'next/link'
import { useContext } from 'react'
import { NavMenuContext } from '../../contexts/NavMenuContext'
import CloseMenuButton from './CloseMenuButton'

export interface NavItem {
  text: string
  icon: JSX.Element
  url: string
}

interface Props {
  navItems: NavItem[]
}

export function NavMenu({ navItems }: Props) {
  const { isOpen } = useContext(NavMenuContext)

  return (
    <Drawer variant="persistent" anchor="left" open={isOpen}>
      <CloseMenuButton />
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item.url} key={item.text}>
            <ListItem button>
              {item.icon}
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}
