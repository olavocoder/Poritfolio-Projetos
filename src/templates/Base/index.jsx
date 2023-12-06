import { useEffect, useState } from 'react'

import { NextSeo } from 'next-seo'

import Tiny from '../../components/Slider/Tiny'
import { UseSeoTreated } from '../../hooks/useSeoTreated'
import * as S from './styles'

const Base = ({ children, seo, slideClass }) => {
  const [seoTreated, setSeoTreated] = useState([])

  useEffect(() => {
    const tempSeo = UseSeoTreated({ seo })
    setSeoTreated(tempSeo)
  }, [seo])

  return (
    <S.Wrapper>
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
      {slideClass && (
        <>
          <Tiny listClass={slideClass} />
        </>
      )}
    </S.Wrapper>
  )
}

export default Base
