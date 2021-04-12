import { Typography } from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt'

import { NavMenuProvider } from '../../contexts/NavMenuContext'
import TopBar from '../Layout/TopBar'
import OpenMenuButton from './OpenMenuButton'

import { NavMenu, NavItem } from './NavMenu'

const navItems = [
  {
    text: 'Grades',
    url: '/grades',
    icon: <ListAltIcon />
  }
] as NavItem[]

export default function Navigation() {
  return (
    <NavMenuProvider>
      <TopBar>
        <OpenMenuButton />
        <Typography variant="h6" color="inherit">
          AVA-LON
        </Typography>
      </TopBar>
      <NavMenu navItems={navItems} />
    </NavMenuProvider>
  )
}
