import Base from '../Base'
import * as S from './styles'
import CardWraper from '../../components/Card'
import backImg from '../../assets/backImage.jpg'
import Breadcrumb from '../../components/Breadcrumb'

export default function CategoryTemplate({
  seo,
  header,
  footer,
  post = null,
  postsList
}) {
  return (
    <Base seo={seo} header={header} footer={footer}>
      <div
        className="lg:h-[70vh] flex bg-fixed bg-cover pt-20 rounded-b-[32px]"
        style={{ backgroundImage: `url(${backImg.src})` }}
      >
        <div className="bg-white max-w-[768px] m-auto px-7 py-9 rounded-3xl">
          <h1>{post?.title}</h1>
          <p>{post?.description}</p>
        </div>
      </div>
      <S.Wrapper className="container m-auto">
        <Breadcrumb title={post?.title} slug={post?.slug?.current} />
        <div className="grid lg:grid-cols-3 gap-5">
          {postsList &&
            postsList?.map((data, index) => (
              <CardWraper data={data} direction="vertical" key={index} />
            ))}
        </div>
      </S.Wrapper>
    </Base>
  )
}
