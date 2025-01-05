import React from 'react'
import { Button } from '../ui/button'
import * as S from './styles'
import { Card, Text, Image, Box, Heading } from '@chakra-ui/react'

const Sidebar = ({ data, className = 'hidden' }) => {
  return (
    <S.Wrapper className={`${className} lg:block`}>
      <h4 className="h4">Veja Tambem:</h4>
      <div>
        {data?.sidebarCards?.map((item, index) => (
          <Card.Root
            className="card-sidebar mb-4 bg-white text-black border-none"
            key={index}
          >
            <Image
              className="rounded-lg"
              src={item?.mainImage?.asset?.url}
              width={'1/1'}
              height={'150px'}
            />
            <Box px={2} py={2}>
              <Card.Body>
                <Heading className="text-base mb-3" as={'h4'}>
                  {item?.title}
                </Heading>
                <Text>{item?.description}</Text>
              </Card.Body>
              <Card.Footer>
                <Button className={'font-semibold'} href={item?.button}>
                  Acesse Agora
                </Button>
              </Card.Footer>
            </Box>
          </Card.Root>
        ))}
      </div>
    </S.Wrapper>
  )
}

export default Sidebar
