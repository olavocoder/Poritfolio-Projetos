import Base from '../Base'
import * as S from './styles'

// import dynamic from 'next/dynamic'
// Insert dynamic
// https://nextjs.org/docs/advanced-features/preview-mode
// Insert a preview mode

export default function ArticleTemplate({ seo, header, footer }) {
  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.Wrapper>Postagem</S.Wrapper>
    </Base>
  )
}
