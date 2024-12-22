import React from 'react'
import { useState, useEffect } from 'react'

import Image from 'next/image'

import { SearchIcon } from '../../assets/icons'
import Button from '../Button'
import Search from '../Search'
import * as S from './styles'

const Header = ({ data }) => {
  const [active, setActive] = useState(false)
  const [results, setResults] = useState(null)

  useEffect(() => {
    if (results) {
      const resultsData = JSON.stringify(results)
      window.localStorage.setItem('dataSearch', resultsData)
      window.location.replace('/blog/search')
    }
  }, [results])

  return (
    <S.Wrapper>
      <S.ContainerHeader>
        <div className="menu-area">
          <Image src={data?.logo?.asset?.url} width={150} height={50} />
            <S.MenuList>
              {data?.Menu &&
                data?.Menu?.map((itemMenu, indexMenu) => (
                  <ul key={indexMenu}>{itemMenu?.title}</ul>
                ))}
            </S.MenuList>
            <Button
              onClick={() => {
                active ? setActive(false) : setActive(true)
              }}
            >
              <SearchIcon />
            </Button>
          </div>
        
        {active && (
          <Search className={'rounded-2xl mt-4 px-4'} setResults={setResults} />
        )}
      </S.ContainerHeader>
    </S.Wrapper>
  )
}

export default Header
