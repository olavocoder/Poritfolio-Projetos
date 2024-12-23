import YouTube from 'react-youtube'

import Breadcrumb from '../../components/Breadcrumb'
import LayoutContent from '../../components/Layout/LayoutContent'
import Sidebar from '../../components/Sidebar'
import Slide from '../../components/Slide'
import Base from '../Base'
import * as S from './styles'
import { useWindowSize } from '../../hooks/useWindowSize'

export default function PostTemplate({ post, header }) {
  const { width } = useWindowSize()
  return (
    <Base header={header} slideClass={['postSlide']} data={post}>
      {post?.youTube && (
        <YouTube videoId={post?.youTube} className="youtube-wrapper" />
      )}
      <S.ContainerWrapper>
        <S.ContentArea>
          <div className="content">
            {post?.mainImage?.asset?.url && (
              <img
                className="post-image rounded-[20px]"
                src={post.mainImage.asset.url}
              />
            )}
            <Breadcrumb title={post?.title} slug={post?.slug?.current} />
            <h1>{post?.title}</h1>

            <LayoutContent data={post?.bodyRaw} />
            <h2>Posts Relacionados</h2>
            {width > 1200 && post?.postsRelateds && (
              <Slide
                dataSlide={post?.postsRelateds}
                className="postSlide"
                type={'card'}
              />
            )}

            {width < 1200 && post?.postsRelateds && (
              <Slide
                dataSlide={post?.postsRelateds}
                className="postSlide"
                type={'card'}
                nItems={1}
              />
            )}
          </div>
          <Sidebar data={post} />
        </S.ContentArea>
      </S.ContainerWrapper>
    </Base>
  )
}
