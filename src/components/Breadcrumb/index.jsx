import React from 'react'

import * as S from './styles'

const Breadcrumb = ({ title, slug }) => {
  return (
    <S.Wrapper>
      <a href={`/blog`}> Home</a>
      <span>{'>'}</span>
      <a href={`/blog/${slug}`}> {title}</a>
    </S.Wrapper>
  )
}

export default Breadcrumb
