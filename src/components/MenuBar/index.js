import React from 'react'

import { Home as HomeIcon} from "@styled-icons/boxicons-regular/Home"
import { SearchAlt2 as SearchIcon } from "@styled-icons/boxicons-regular/SearchAlt2"
import { ArrowUpOutline as ArrowIcon } from "@styled-icons/typicons/ArrowUpOutline"
import { LightBulb as LightIcon} from "@styled-icons/heroicons-outline/LightBulb"
import { Grid as GridIcon } from "@styled-icons/bootstrap/Grid"

import * as S from './styled'

const MenuBar = () => (
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
      <S.MenuBarItem title="Mudar o tema">
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

export default MenuBar