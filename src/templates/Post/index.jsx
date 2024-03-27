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
      {post?.youTube && (
        <YouTube videoId={post?.youTube} className="youtube-wrapper" />
      )}
      <S.ContainerWrapper>
        <S.ContentArea>
          <div className="content">
            <Breadcrumb title={post?.title} slug={post?.slug?.current} />
            <h1>{post?.title}</h1>

            <LayoutContent data={post?.bodyRaw} />
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
