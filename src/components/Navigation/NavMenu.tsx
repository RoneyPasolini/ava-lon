import {
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme
} from '@material-ui/core'

import Link from 'next/link'
import { useContext } from 'react'
import { NavMenuContext } from '../../contexts/NavMenuContext'
import CloseMenuButton from './CloseMenuButton'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth,
      textAlign: 'center'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1)
    }
  })
)

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
  const classes = useStyles()

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <CloseMenuButton />
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item.url} key={item.text}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}
