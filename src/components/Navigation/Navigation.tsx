import { Button, Typography } from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt'

import Link from 'next/link'

import { NavMenuProvider } from '../../contexts/NavMenuContext'
import TopBar from '../Layout/TopBar'
import OpenMenuButton from './NavMenu/Buttons/OpenMenuButton'
import { NavMenu, NavItem } from './NavMenu/NavMenu'

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
        <Link href="/">
          <Button variant="contained" color="primary" disableElevation>
            <Typography component="a" variant="h6">
              AVA-LON
            </Typography>
          </Button>
        </Link>
      </TopBar>
      <NavMenu navItems={navItems} />
    </NavMenuProvider>
  )
}
