import React from 'react'

import Image from 'next/image'

import Button from '../Button'
import * as S from './styles'

const Sidebar = ({ data }) => {
  return (
    <S.Wrapper>
      <h4 className="h4">Categorias</h4>
      <div className="sidebar-categories">
        {data?.categories?.map((item, index) => (
          <Button key={index}>{item?.title}</Button>
        ))}
      </div>
      <h4 className="h4">Veja Tambem</h4>
      <div className="sidebar-cards">
        {data?.sidebarCards?.map((item, index) => (
          <S.CardSidebar key={index}>
            <Image src={item?.imageCard?.asset?.url} width={50} height={50} />
            <h4>{item?.title}</h4>
            <p>{item?.description}</p>
            <Button href={item?.button}>Click Me</Button>
          </S.CardSidebar>
        ))}
      </div>
    </S.Wrapper>
  )
}

export default Sidebar
