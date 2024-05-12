import { ArrowIconDark } from '../../assets/icons'
import { useWindowSize } from '../../hooks/useWindowSize'
import { size } from '../../styles/utils/devices'
import Card from '../Card'
import * as S from './styles'

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
    <S.LayoutWrapper back={'#fff'}>
      {contentDesk && (
        <S.SlideTextWrapper>
          <div className={`${className}_left slideArrow`}>
            <ArrowIconDark
              width={width < size.laptopM ? 35 : 55}
              color={'#000'}
            />
          </div>
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
          <div className={`${className}_right slideArrow`}>
            <ArrowIconDark
              width={width < size.laptopM ? 35 : 55}
              color={'#000'}
            />
          </div>
        </S.SlideTextWrapper>
      )}
    </S.LayoutWrapper>
  )
}

function LayoutWrapperSlide({ type, content, className }) {
  switch (type) {
    case 'banner':
      return (
        <div className={`slideWrapper ${className} layout-slideText`}>
          {content?.map((contentItem, contentIndex) => (
            <div
              className="slideItem"
              style={{
                height: 'inherit',
                color: '#000',
                backgroundImage: `url(${contentItem?.mainImage?.asset?.url})`
              }}
              key={contentIndex}
            />
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
