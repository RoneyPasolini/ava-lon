import { Switch } from '@material-ui/core'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function SwitchTheme() {
  const { theme, changeTheme } = useContext(ThemeContext)
  return (
    <Switch
      checked={theme.palette.type === 'light'}
      onChange={changeTheme}
      name="switchTheme"
      color="default"
    />
  )
}
