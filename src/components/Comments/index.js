import React from "react"
import ReactDisqusComments from "react-disqus-comments"
// import { Disqus } from 'gatsby-plugin-disqus';
import PropTypes from 'prop-types'

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://abiacoelho.com${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Deixe seu comentário</S.CommentsTitle>
      <ReactDisqusComments
        shortname="biacoelho"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />

    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
