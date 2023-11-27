import { useEffect, useState } from 'react'

import Image from 'next/image'

import { ArrowIconDark } from '../../../assets/icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { size } from '../../../styles/utils/devices'
import * as S from './styles'

export default function LayoutSlide({ color, data, direction, dataSlide }) {
  const slideTitle = data?.slug?.current?.replace('-', '_')
  const { width } = useWindowSize()
  const [url, setUrl] = useState()
  useEffect(() => {
    if (data?.title == 'Sobre') {
      setUrl('/curriculo.pdf')
    } else {
      setUrl('/')
    }
  }, [])
  return (
    <S.LayoutWrapper back={color}>
      <S.LayoutBanner direction={direction}>
        <div className="layout layout-area">
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
          {data?.title == 'Sobre' ? (
            <S.ButtonLayout href={url}>Ver mais</S.ButtonLayout>
          ) : (
            <S.ButtonLayout href={'https://github.com/olavocoder'}>
              Acessar repositório
            </S.ButtonLayout>
          )}
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
                    <a href={item?.gitLink} target="__blank">
                      {item?.title}
                    </a>
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
          {dataSlide && (
            <S.SkillsWrapper>
              <div className={`slideSkills${slideTitle}`}>
                {dataSlide?.map((projeto, i) => (
                  <div key={i} className="layout-skills">
                    {projeto?.skills?.map((item, index) => (
                      <Image
                        key={index}
                        src={item.icons?.asset?.url}
                        width={100}
                        height={42}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </S.SkillsWrapper>
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
              <S.SlideImg
                key={index}
                className={`slideImg slideImg${slideTitle}`}
                back={item?.mainImage?.asset?.url}
                width={`${width < size.tablet ? 180 : 580}px`}
                height={`${width < size.tablet ? 180 : 580}px`}
              />
            ))}
        </div>
      </S.LayoutBanner>
    </S.LayoutWrapper>
  )
}
