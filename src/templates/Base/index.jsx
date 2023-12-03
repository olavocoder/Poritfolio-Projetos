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
