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
          title={seoTreated.title || process.env.NEXT_PUBLIC_WORDPRESS_API_URL}
          description={
            seoTreated.description || process.env.NEXT_PUBLIC_WORDPRESS_API_URL
          }
          {...(seoTreated.canonical && { canonical: seoTreated.canonical })}
          {...(seoTreated.noindex && { noindex: seoTreated.noindex })}
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
