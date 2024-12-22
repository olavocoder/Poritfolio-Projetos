import React from 'react'
import { Button } from '../ui/button'
import * as S from './styles'
import { Card, Text, Image, Box, Heading } from '@chakra-ui/react'

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
      <div>
        {data?.sidebarCards?.map((item, index) => (
          <Card.Root mb={4} key={index}>
            <Image
              src={item?.imageCard?.asset?.url}
              width={'1/1'}
              height={'150px'}
            />
            <Box px={4} py={2}>
              <Card.Body>
                <Heading as={'h4'}>{item?.title}</Heading>
                <Text>{item?.description}</Text>
              </Card.Body>
              <Card.Footer>
                <Button href={item?.button}>Click Me</Button>
              </Card.Footer>
            </Box>
          </Card.Root>
        ))}
      </div>
    </S.Wrapper>
  )
}

export default Sidebar
