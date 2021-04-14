import { Theme } from '@material-ui/core'
import { createContext, ReactNode, useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { themes } from '../themes'

interface ThemeContextData {
  theme: Theme
  changeTheme: () => void
}

interface Props {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(themes.current)

  const changeTheme = () => {
    themes.current =
      themes.current.palette.type === 'dark' ? themes.light : themes.dark
    setTheme(themes.current)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
