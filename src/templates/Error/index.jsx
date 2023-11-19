import Base from '../Base'
import * as S from './styles'

export default function ErrorTemplate({ seo, header, footer }) {
  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.Wrapper>404</S.Wrapper>
    </Base>
  )
}
