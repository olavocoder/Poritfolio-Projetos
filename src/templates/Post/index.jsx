import YouTube from 'react-youtube'
import { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import LayoutContent from '../../components/Layout/LayoutContent'
import Sidebar from '../../components/Sidebar'
import Slide from '../../components/Slide'
import Base from '../Base'
import * as S from './styles'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Button } from '@chakra-ui/react'
import { IoIosClose } from 'react-icons/io'

export default function PostTemplate({ post, header }) {
  const { width } = useWindowSize()
  const [active, setActive] = useState(false)

  return (
    <Base header={header} slideClass={['postSlide']} data={post}>
      {post?.youTube && (
        <YouTube videoId={post?.youTube} className="youtube-wrapper" />
      )}
      <Button
        onClick={() => (!active ? setActive(true) : setActive(false))}
        className="bg-black text-white [writing-mode:vertical-lr] h-fit scale-[-1] py-2 fixed top-0 bottom-0 m-auto right-0 z-10 gap-0 lg:hidden"
      >
        {!active ? (
          'Ver Tambem'
        ) : (
          <>
            Fechar
            <IoIosClose />
          </>
        )}
      </Button>
      <S.ContainerWrapper>
        <S.ContentArea>
          <div className={`w-full ${post?.sidebarCards && 'lg:w-[800px]'}`}>
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
          {post?.sidebarCards && (
            <Sidebar data={post} className={!active ? 'hidden' : 'block'} />
          )}
        </S.ContentArea>
      </S.ContainerWrapper>
    </Base>
  )
}
