import LayoutContent from '../../components/Layout/LayoutContent'
import Base from '../Base'
import * as S from './styles'
export default function PostTemplate({ post }) {
  console.log(post)
  return (
    <Base>
      <S.Banner back={post?.mainImage?.asset?.url} shadow={true}>
        <S.ContentBanner>
          <h1>{post?.title}</h1>
        </S.ContentBanner>
      </S.Banner>
      <LayoutContent data={post?.bodyRaw} />
    </Base>
  )
}
