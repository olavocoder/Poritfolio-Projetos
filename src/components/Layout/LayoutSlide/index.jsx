import Image from 'next/image'

import { ArrowIconDark } from '../../../assets/icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { size } from '../../../styles/utils/devices'
import * as S from './styles'

export default function LayoutSlide({ color, data, direction, dataSlide }) {
  console.log('data', data?.slug?.current)
  const slideTitle = data?.slug?.current?.replace('-', '_')
  const { width } = useWindowSize()
  return (
    <S.LayoutWrapper back={color}>
      <S.LayoutBanner direction={direction}>
        <div className="layout layout-area">
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
          <S.ButtonLayout>Saiba Mais</S.ButtonLayout>
          {dataSlide && (
            <S.SlideTextWrapper>
              <div className={`slide${slideTitle}_left slideArrow`}>
                <ArrowIconDark
                  width={width < size.laptopM ? 35 : 55}
                  color={color == 'black' ? '#fff' : '#000'}
                />
              </div>
              <div
                className={`slideWrapper slide${slideTitle} layout-slideText`}
              >
                {dataSlide?.map((item, index) => (
                  <div
                    className="slideItem"
                    style={{ color: color == 'black' ? '#fff' : '#000' }}
                    key={index}
                  >
                    {item?.title}
                  </div>
                ))}
              </div>
              <div className={`slide${slideTitle}_right slideArrow`}>
                <ArrowIconDark
                  width={width < size.laptopM ? 35 : 55}
                  color={color == 'black' ? '#fff' : '#000'}
                />
              </div>
            </S.SlideTextWrapper>
          )}
        </div>
        <div className={`layout layout-img slideImg${slideTitle}`}>
          {data?.banner && width > size.tablet && (
            <Image
              className="slideImg"
              src={data?.banner?.asset?.url}
              width={width < size.laptopM ? 480 : 580}
              height={width < size.laptopM ? 480 : 580}
            />
          )}
          {dataSlide &&
            dataSlide?.map((item, index) => (
              <Image
                className={`slideImg${slideTitle}`}
                key={index}
                src={item?.mainImage?.asset?.url}
                width={width < size.tablet ? 180 : 580}
                height={width < size.tablet ? 180 : 580}
              />
            ))}
        </div>
      </S.LayoutBanner>
    </S.LayoutWrapper>
  )
}
