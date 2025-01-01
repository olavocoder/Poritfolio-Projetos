import React from 'react'
import { useState } from 'react'

import Image from 'next/image'

import { SearchIcon } from '../../assets/icons'
import Button from '../Button'
import Search from '../Search'
import * as S from './styles'
import { CiMenuFries } from 'react-icons/ci'

const Header = ({ data }) => {
  const [active, setActive] = useState(false)

  const MenuList = ({ className }) => (
    <S.MenuList className={className}>
      {data?.Menu &&
        data?.Menu?.map((itemMenu, indexMenu) => (
          <a href={`/blog/${itemMenu?.slug?.current}`} key={indexMenu}>
            {itemMenu?.title}
          </a>
        ))}
    </S.MenuList>
  )

  return (
    <S.Wrapper>
      <S.ContainerHeader>
        <div className="menu-area">
          <a href="/blog">
            <Image src={data?.logo?.asset?.url} width={150} height={50} />
          </a>
          <MenuList className="hidden lg:flex items-center" />
          <Button
            className="header-btn"
            onClick={() => {
              active ? setActive(false) : setActive(true)
            }}
          >
            <SearchIcon />
          </Button>
          <CiMenuFries
            onClick={() => {
              active ? setActive(false) : setActive(true)
            }}
            color="#fff"
            className="scale-150 my-auto cursor-pointer lg:hidden"
          />
        </div>
        <div>
          {active && <Search className={'rounded-2xl my-5 px-4 py-2'} />}
          <MenuList
            className={`${
              active ? 'block' : 'hidden'
            } lg:hidden text-center my-4`}
          />
        </div>
      </S.ContainerHeader>
    </S.Wrapper>
  )
}

export default Header
