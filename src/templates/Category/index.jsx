import Base from '../Base'
import * as S from './styles'

export default function CategoryTemplate({ seo, header, footer, category }) {
  console.log(category)

  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.Wrapper className="container m-auto">Categoria</S.Wrapper>
    </Base>
  )
}
