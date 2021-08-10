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
import { NavMenuContext } from '../../../contexts/NavMenuContext'
import { SubjectContext } from '../../../contexts/SubjectContext'
import CloseMenuButton from './Buttons/CloseMenuButton'
import SelectSubject from './Buttons/SelectSubject'

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
  subjectName?: string
  subjectId?: string
}

export function NavMenu({ navItems }: Props) {
  const { isOpen } = useContext(NavMenuContext)
  const { currentSubject } = useContext(SubjectContext)

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
      <SelectSubject />
      <List>
        {currentSubject &&
          navItems.map((item) => (
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
