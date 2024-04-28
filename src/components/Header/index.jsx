import React from 'react'
import { useState } from 'react'

import Image from 'next/image'

import { SearchIcon } from '../../assets/icons'
import Button from '../Button'
import * as S from './styles'

const Header = ({ data }) => {
  const [active, setActive] = useState(false)

  return (
    <S.Wrapper>
      <S.ContainerHeader>
        <div className="menu-area">
          <Image src={data?.logo?.asset?.url} width={150} height={50} />
          <div className="menu-list">
            <S.MenuList>
              {data?.Menu &&
                data?.Menu?.map((itemMenu, indexMenu) => (
                  <ul key={indexMenu}>{itemMenu?.title}</ul>
                ))}
            </S.MenuList>
            <Button
              onClick={() => (active ? setActive(false) : setActive(true))}
            >
              <SearchIcon />
            </Button>
          </div>
        </div>
        {active && (
          <div className="search-area">
            <input type="search" />
          </div>
        )}
      </S.ContainerHeader>
    </S.Wrapper>
  )
}

export default Header
