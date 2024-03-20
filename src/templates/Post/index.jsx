import YouTube from 'react-youtube'

import Breadcrumb from '../../components/Breadcrumb'
import LayoutContent from '../../components/Layout/LayoutContent'
import Sidebar from '../../components/Sidebar'
import Slide from '../../components/Slide'
import Base from '../Base'
import * as S from './styles'

export default function PostTemplate({ post, header }) {
  return (
    <Base header={header} slideClass={['postSlide']} data={post}>
      <S.Banner shadow={true}>
        <S.ContentBanner>
          <h1>{post?.title}</h1>
        </S.ContentBanner>
      </S.Banner>
      <S.ContainerWrapper>
        <S.ContentArea>
          <div className="content">
            <Breadcrumb title={post?.title} slug={post?.slug?.current} />
            <LayoutContent data={post?.bodyRaw} />
            <h2>Video Informativo</h2>
            {post?.youTube && (
              <YouTube videoId={post?.youTube} className="youtube-wrapper" />
            )}
            <h2>Posts Relacionados</h2>
            {post?.postsRelateds && (
              <Slide dataSlide={post?.postsRelateds} className="postSlide" />
            )}
          </div>
          <Sidebar data={post} />
        </S.ContentArea>
      </S.ContainerWrapper>
    </Base>
  )
}
