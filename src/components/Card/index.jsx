import { Card, Text, Image, Box } from '@chakra-ui/react'
import { Button } from '../ui/button'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { HiArrowSmRight } from 'react-icons/hi'

export default function CardWraper({
  data,
  direction = 'vertical',
  className = ''
}) {
  const isDirection = direction !== 'vertical'
  const [day, setDay] = useState(null)
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)
  const MonthAbr = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ]

  useEffect(() => {
    const date = new Date(data?.publishedAt)
    setDay(date.getDate())
    setMonth(MonthAbr[date.getMonth()])
    setYear(date.getFullYear())
  }, [data])

  return (
    <S.LayoutWrapper className={className}>
      <Card.Root
        className="bg-white text-black border-none relative"
        my={isDirection ? 8 : 0}
        width="w-full"
        flexDirection={isDirection ? 'row' : 'column'}
      >
        {
          <Image
            className="transition-all"
            width={isDirection ? '1/3' : '1/1'}
            rounded="md"
            src={data?.mainImage?.asset?.url}
          />
        }
        <div className="date transition-all bg-slate-800 text-white inline-block w-fit px-4 py-2 absolute rounded-md">
          <Text className="date-month text-slate-400">{month}</Text>
          <Text className="date-day font-bold">{day}</Text>
          <Text className="date-year text-slate-400">{year}</Text>
        </div>
        <Box padding={'4'} className="card-body">
          <Card.Body gap="2">
            <Text className="font-bold">{data?.title}</Text>
            <Text>{data?.description}</Text>
          </Card.Body>
          <Card.Footer>
            <Button className="font-semibold">
              {' '}
              <a href={`/blog/${data?.slug?.current}`}>Leia mais</a>{' '}
            </Button>
            <HiArrowSmRight />
          </Card.Footer>
        </Box>
      </Card.Root>
    </S.LayoutWrapper>
  )
}
