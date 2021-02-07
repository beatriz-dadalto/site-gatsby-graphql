import React, { useState, useEffect } from "react"

import { Home as HomeIcon } from "@styled-icons/boxicons-regular/Home"
import { SearchAlt2 as SearchIcon } from "@styled-icons/boxicons-regular/SearchAlt2"
import { ArrowUpOutline as ArrowIcon } from "@styled-icons/typicons/ArrowUpOutline"
import { LightBulb as LightIcon } from "@styled-icons/heroicons-outline/LightBulb"
import { Grid as GridIcon } from "@styled-icons/bootstrap/Grid"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para o início">
          <S.MenuBarItem>
            <HomeIcon />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search" title="Pesquisar">
          <S.MenuBarItem>
            <SearchIcon />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <LightIcon />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização">
          <GridIcon />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <ArrowIcon />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
