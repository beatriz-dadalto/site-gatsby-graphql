import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import * as S from './styled.js'
import GlobalStyles from '../../styles/global.js'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
