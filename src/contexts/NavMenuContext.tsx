import { createContext, ReactNode, useState } from 'react'

interface NavMenuContextData {
  isOpen: boolean
  openNavMenu: () => void
  closeNavMenu: () => void
}

interface Props {
  children: ReactNode
}

export const NavMenuContext = createContext({} as NavMenuContextData)

export const NavMenuProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  const openNavMenu = () => {
    setIsOpen(true)
  }

  const closeNavMenu = () => {
    setIsOpen(false)
  }

  return (
    <NavMenuContext.Provider value={{ isOpen, openNavMenu, closeNavMenu }}>
      {children}
    </NavMenuContext.Provider>
  )
}
