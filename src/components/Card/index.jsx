import Image from 'next/image'

import Button from '../Button'
import * as S from './styles'

export default function Card({ data, direction = 'vertical' }) {
  return (
    <S.LayoutWrapper className={direction}>
      {<Image src={data?.mainImage?.asset?.url} width={150} height={75} />}
      <div className="w-9/12">
        <p>{data?.title}</p>
        <Button>Leia mais</Button>
      </div>
    </S.LayoutWrapper>
  )
}
