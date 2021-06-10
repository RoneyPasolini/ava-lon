import { Button, Typography } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import BarChartIcon from '@material-ui/icons/BarChart'
import HomeIcon from '@material-ui/icons/Home'
import MenuBookIcon from '@material-ui/icons/MenuBook'

import Link from 'next/link'

import { NavMenuProvider } from '../../contexts/NavMenuContext'
import TopBar from '../Layout/TopBar'
import OpenMenuButton from './NavMenu/Buttons/OpenMenuButton'
import { NavMenu, NavItem } from './NavMenu/NavMenu'

const navItems = [
  {
    text: 'Início',
    url: '/',
    icon: <HomeIcon />
  },
  {
    text: 'Conteúdo',
    url: '/content',
    icon: <MenuBookIcon />
  },
  {
    text: 'Notas',
    url: '/grades',
    icon: <BarChartIcon />
  },
  {
    text: 'Atividades',
    url: '/quiz', // Temporary
    icon: <AssignmentIcon />
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
