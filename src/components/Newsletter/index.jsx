import React from 'react'
import { Flex, Box, Input, Button } from '@chakra-ui/react'
import * as S from './styles'
import { Checkbox } from '../ui/checkbox'

const Newsletter = ({ pag, setPag }) => {
  return (
    <S.Wrapper>
      <div>
        <h2>Receba noticias todos os dias direto no seu email</h2>
        <form>
          <Flex>
            <Input placeholder='Digite seu e-mail'/>
            <Button type='submit'>Quero assinar</Button>
          </Flex>
          <Checkbox>Voce aceita nossos termos e condições</Checkbox>
        </form>
      </div>
    </S.Wrapper>
  )
}

export default Newsletter
