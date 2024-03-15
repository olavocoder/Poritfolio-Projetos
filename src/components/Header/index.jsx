import React from 'react'

import Image from 'next/image'

import * as S from './styles'

const Header = ({ data }) => {
  return (
    <S.Wrapper>
      <S.ContainerHeader>
        <Image src={data?.logo?.asset?.url} width={50} height={50} />
        <S.MenuList>
          {data?.Menu &&
            data?.Menu?.map((itemMenu, indexMenu) => (
              <ul key={indexMenu}>{itemMenu?.title}</ul>
            ))}
        </S.MenuList>
      </S.ContainerHeader>
    </S.Wrapper>
  )
}

export default Header
