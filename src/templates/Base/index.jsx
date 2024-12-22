import { useEffect, useState } from 'react'

import { NextSeo } from 'next-seo'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Tiny from '../../components/SliderConfig/Tiny'
import { UseSeoTreated } from '../../hooks/useSeoTreated'
import * as S from './styles'

const Base = ({ children, seo, slideClass, header = null, data }) => {
  const [seoTreated, setSeoTreated] = useState([])
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    const tempSeo = UseSeoTreated({ seo })
    setSeoTreated(tempSeo)
    if (window.location.pathname == '/') setIsHome(true)
    if (window.location.pathname == '/blog') setIsHome(true)
  }, [seo])

  return (
    <S.Wrapper>
      {header && <Header data={header} />}
      {!isHome && <div className="header-space"></div>}

      {seoTreated && (
        <NextSeo
          title={process.env.NEXT_PUBLIC_DEFAULT_TITLE}
          description={process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION}
          openGraph={{
            url: 'https://poritfolio-projetos.vercel.app/',
            title: `${process.env.NEXT_PUBLIC_DEFAULT_TITLE}`,
            description: `${process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION}`,
            images: [
              {
                url: 'https://cdn.sanity.io/images/lxpq608x/production/3bd54ec76dd337dd397aee178c746676552d7169-1487x781.webp'
              }
            ],
            siteName: 'SiteName'
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image'
          }}
        />
      )}

      {children}
      {data && (
        <>
          <Tiny listClass={slideClass} />
        </>
      )}
      {header && <Footer footer={header} />}
    </S.Wrapper>
  )
}

export default Base
