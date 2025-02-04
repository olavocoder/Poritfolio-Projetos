import React from 'react'
import { Button } from '../ui/button'
import { Group } from '@chakra-ui/react'
import * as S from './styles'

const PaginationPosts = ({ pag, setPag, isContinue, totalPosts }) => {
  return (
    <S.Wrapper>
      <Group className="gap-9">
        <Button
          disabled={pag == 0 ? true : false}
          onClick={() => setPag(pag - totalPosts)}
        >
          Pagina anterior
        </Button>
        <Button disabled={isContinue} onClick={() => setPag(pag + totalPosts)}>
          Proxima pagina
        </Button>
      </Group>
    </S.Wrapper>
  )
}

export default PaginationPosts
