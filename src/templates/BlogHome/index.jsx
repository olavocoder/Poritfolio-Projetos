import Card from '../../components/Card'
import { Container } from '../../components/Container'
import Slide from '../../components/Slide'
import Base from '../Base'
import * as S from './styles'
export default function BlogHomeTemplate({ header, post }) {
  return (
    <Base data={post} header={header} slideClass={['heroSlide']}>
      <S.Wrapper>
        <Container>
          {post && (
            <Slide dataSlide={post} className="heroSlide" type="banner" />
          )}
          <h2 className="text-center">Publicações recentes</h2>
          {post &&
            post?.map((data, index) => (
              <Card data={data} direction="horizontal" key={index} />
            ))}

          <h2 className="text-center mt-20">Categoria mais acessada</h2>
          <div className="flex justify-between gap-4 mb-14 mt-5">
            {post &&
              post?.map((data, index) => (
                <Card data={data} direction="vertical" key={index} />
              ))}
          </div>

          <h2 className="text-center mt-20">Categoria mais acessada</h2>
          <div className="flex justify-between gap-4 mb-14 mt-5">
            {post &&
              post?.map((data, index) => (
                <Card data={data} direction="vertical" key={index} />
              ))}
          </div>

          <h2 className="text-center  mt-20">Categoria mais acessada</h2>
          <div className="flex justify-between gap-4 mb-20 mt-5">
            {post &&
              post?.map((data, index) => (
                <Card data={data} direction="vertical" key={index} />
              ))}
          </div>
        </Container>
      </S.Wrapper>
    </Base>
  )
}
