import React from 'react'

import * as S from './styles'

const Loading = ({ absolute, small, isNone }) => {
  return (
    <S.Wrapper
      className={`${
        absolute ? 'no-padd' : ''
      } bg-slate-800 rounded-[30px] opacity-50`}
    >
      {!isNone && <S.Loading className={`${small ? 'small' : ''}`} />}
    </S.Wrapper>
  )
}

export default Loading
