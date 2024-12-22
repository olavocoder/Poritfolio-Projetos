import { ArrowIconDark } from '../../assets/icons'
import { useWindowSize } from '../../hooks/useWindowSize'
import { size } from '../../styles/utils/devices'
import Card from '../Card'
import * as S from './styles'
import Image from 'next/image'

export default function Slide({ dataSlide, className, type }) {
  const { width } = useWindowSize()

  // Cria um array bi-dimensional separando os cards para cada wrapper do slide
  function ChangeNumbersCardsContent(arr, lengthArr) {
    let subarrays = []
    for (let i = 0; i < arr.length; i += lengthArr) {
      subarrays.push(arr.slice(i, i + lengthArr))
    }
    return subarrays
  }

  // Gera o array bidimensional para desktop
  const contentDesk = ChangeNumbersCardsContent(dataSlide, 3)

  return (
    <S.LayoutWrapper>
      {contentDesk && (
        <S.SlideTextWrapper>
          {dataSlide && type == 'card' && (
            <LayoutWrapperSlide
              type={'card'}
              content={contentDesk}
              className={className}
            />
          )}
          {dataSlide && type == 'banner' && (
            <LayoutWrapperSlide
              type={'banner'}
              content={dataSlide}
              className={className}
            />
          )}
        </S.SlideTextWrapper>
      )}
    </S.LayoutWrapper>
  )
}

function LayoutWrapperSlide({ type, content, className }) {
  console.log('conteudo', content)
  switch (type) {
    case 'banner':
      return (
        <div className={`slideWrapper ${className} layout-slideText`}>
          {content?.map((contentItem, contentIndex) => (
            <div
              className="slideItem"
              key={contentIndex}
            >
              <div className="slideItem-wrapper">
                <Image
                  src={contentItem?.mainImage?.asset?.url}
                  width="500"
                  height="400"
                />
                <div>
                  <a href={`/${contentItem?.category?.slug?.current}`}>
                    {contentItem?.category?.title}
                  </a>
                  <h2>{contentItem?.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      )

    case 'card':
      return (
        <div className={`slideWrapper ${className} layout-slideText`}>
          {content?.map((contentItem, contentIndex) => (
            <div
              className="slideItem"
              style={{ color: '#000' }}
              key={contentIndex}
            >
              <div className="slide-cardWrapper">
                {contentItem?.map((item, index) => (
                  <Card data={item} key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    default:
      return <>nao atendeu nenhum dos requisitos</>
  }
}
