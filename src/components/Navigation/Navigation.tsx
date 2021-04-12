import { Typography } from '@material-ui/core'

import { NavMenuProvider } from '../../contexts/NavMenuContext'
import TopBar from '../Layout/TopBar'
import NavMenu from './NavMenu'
import OpenMenuButton from './OpenMenuButton'

export default function Navigation() {
  return (
    <NavMenuProvider>
      <TopBar>
        <OpenMenuButton />
        <Typography variant="h6" color="inherit">
          AVA-LON
        </Typography>
      </TopBar>
      <NavMenu navItems={['Test']} />
    </NavMenuProvider>
  )
}
