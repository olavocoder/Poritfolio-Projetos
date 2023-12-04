import Image from 'next/image'

import backImg from '../../assets/backImage.webp'
import LayoutBanner from '../../components/Layout/LayoutBanner'
import LayoutSlide from '../../components/Layout/LayoutSlide'
import Base from '../Base'
import * as S from './styles'

export default function HomeTemplate({
  home,
  sobre,
  projetos,
  tecnologias,
  blog
}) {
  const projetosPorTecnologia = []
  console.log('blog', home)
  const titleSlides = tecnologias?.map((item) => {
    const slideReplace = item?.slug?.current?.replace('-', '_')
    return `slide${slideReplace}`
  })

  const titleSlidesImgs = tecnologias?.map((item) => {
    const slideReplace = item?.slug?.current?.replace('-', '_')
    return `slideImg${slideReplace}`
  })

  const titleSlidesSkills = tecnologias?.map((item) => {
    const slideReplace = item?.slug?.current?.replace('-', '_')
    return `slideSkills${slideReplace}`
  })

  console.log('projetos', projetos)
  // Itera sobre cada tecnologia
  tecnologias.forEach((tecnologia) => {
    tecnologia = tecnologia?.title
    projetosPorTecnologia[tecnologia] = []

    // Itera sobre cada projeto
    projetos.forEach((projeto) => {
      const tecproject = projeto?.tecnologias?.map((item) => item?.title)
      if (tecproject?.includes(tecnologia)) {
        projetosPorTecnologia[tecnologia].push(projeto)
      }
    })
  })

  return (
    <Base
      slideClass={[...titleSlides, ...titleSlidesImgs, ...titleSlidesSkills]}
    >
      <S.Modal>
        <div>
          <ul>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Blog</li>
          </ul>
        </div>
      </S.Modal>
      <S.Banner back={home?.banner?.asset?.url}>
        <S.ContentBanner>
          <div className="bannerItems">
            <p>{home?.job}</p>
            <h1>{home?.name}</h1>
            <div className="bannerItems-social">
              {home?.Social?.map((img, index) => (
                <a
                  aria-hidden="false"
                  className={img?.url}
                  href={img?.url}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt={img?.altText}
                    src={img?.icon?.asset?.url}
                    width={37}
                    height={37}
                  />
                </a>
              ))}
            </div>
          </div>
        </S.ContentBanner>
      </S.Banner>
      <LayoutSlide
        color="white"
        data={sobre}
        isSlide={false}
        direction="left"
      />
      {tecnologias.map((tecno, index) => (
        <LayoutSlide
          key={index}
          direction={index % 2 == 0 ? 'left' : 'right'}
          color={index % 2 == 0 ? 'black' : 'white'}
          data={tecno}
          dataSlide={projetosPorTecnologia[tecno?.title]}
        />
      ))}
      <LayoutBanner background={backImg.src} data={blog} direction="left" />
    </Base>
  )
}
