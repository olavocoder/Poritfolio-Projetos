import BlockContent from '@sanity/block-content-to-react'

import * as S from './styles'

export default function LayoutContent({ data }) {
  return (
    <S.LayoutWrapper>
      {data && (
        <BlockContent blocks={data} projectId="lxpq608x" dataset="production" />
      )}
    </S.LayoutWrapper>
  )
}
