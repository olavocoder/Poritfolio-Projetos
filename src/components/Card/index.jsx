import Image from 'next/image'

import Button from '../Button'
import * as S from './styles'

export default function Card({ data }) {
  return (
    <S.LayoutWrapper>
      {<Image src={data?.mainImage?.asset?.url} width={150} height={75} />}
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      <Button>Leia mais</Button>
    </S.LayoutWrapper>
  )
}
