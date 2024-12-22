import React from 'react'
import { Button } from '../ui/button'
import { Group } from '@chakra-ui/react'
import * as S from './styles'

const FilterPosts = ({ categories, setCat }) => {
  function ActiveBtn(e, value){
    const btnList = document.querySelectorAll('.filter-btn')
    btnList.forEach(item => item.classList.remove('active'))
    e.target.classList.add('active')
    setCat(value)
  }

  return (
    <S.Wrapper>
      <Group>
        <Button className='filter-btn active' onClick={(e) => ActiveBtn(e, null)}> All</Button>
        {categories?.map((item, key) => (
          <Button
            className='filter-btn'
            onClick={(e) => ActiveBtn(e, item?.slug?.current)}
          >
            {item?.title}
          </Button>
        ))}
      </Group>
    </S.Wrapper>
  )
}

export default FilterPosts
