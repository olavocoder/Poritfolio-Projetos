import YouTube from 'react-youtube'

import Breadcrumb from '../../components/Breadcrumb'
import LayoutContent from '../../components/Layout/LayoutContent'
import Slide from '../../components/Slide'
import Base from '../Base'
import * as S from './styles'

export default function PostTemplate({ post, header }) {
  return (
    <Base header={header} slideClass={['postSlide']} data={post}>
      <S.Banner back={post?.mainImage?.asset?.url} shadow={true}>
        <S.ContentBanner>
          <h1>{post?.title}</h1>
        </S.ContentBanner>
      </S.Banner>
      <Breadcrumb title={post?.title} slug={post?.slug?.current} />
      <S.ContainerWrapper>
        {post?.youTube && (
          <YouTube videoId={post?.youTube} className="youtube-wrapper" />
        )}
      </S.ContainerWrapper>
      <LayoutContent data={post?.bodyRaw} />
      <S.ContainerWrapper>
        {post?.postsRelateds && (
          <Slide dataSlide={post?.postsRelateds} className="postSlide" />
        )}
      </S.ContainerWrapper>
    </Base>
  )
}
