import Image from 'next/image'

import { ArrowIconDark } from '../../../assets/icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { size } from '../../../styles/utils/devices'
import * as S from './styles'

export default function LayoutBanner({ background, data, direction }) {
  console.log('data', data?.slug?.current)
  const slideTitle = data?.slug?.current?.replace('-', '_')
  const { width } = useWindowSize()
  return (
    <S.LayoutWrapper back={background}>
      <S.LayoutBanner direction={direction}>
        <div className="layout layout-area">
          <h2>{data?.name}</h2>
          <p>{data?.description}</p>

          <S.ButtonLayout>
            <p>Acesse</p>
            <ArrowIconDark
              width={width < size.laptopM ? 35 : 55}
              color="white"
            />
          </S.ButtonLayout>
        </div>
        <div className={`layout layout-img slideImg${slideTitle}`}>
          {data?.banner && (
            <Image
              src={data?.banner?.asset?.url}
              alt={data?.altText}
              width={470}
              height={590}
            />
          )}
        </div>
      </S.LayoutBanner>
    </S.LayoutWrapper>
  )
}
