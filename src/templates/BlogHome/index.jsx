import CardWrapper from '../../components/Card'
import { Container } from '../../components/Container'
import Slide from '../../components/Slide'
import Base from '../Base'
import * as S from './styles'
import FilterPosts from '../../components/FilterPosts'
import { useState, useEffect } from 'react'
import { getPost } from '../../services/wordpress'
import PaginationPosts from '../../components/PaginationPosts'
import Newsletter from '../../components/Newsletter'
import backImg from '../../assets/backImage.jpg'
import Loading from '../../components/Loading'

export default function BlogHomeTemplate({ header, post, categories }) {
  const totalPosts = 5
  const [ cat, setCat ] = useState(null)
  const [ postsApi, setPostsApi ] = useState(null)
  const [ pag, setPag ] = useState(0)
  const [ isContinue, setIsContinue ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false) 


  function ConditionPagination(nextPostProp) {
    nextPostProp.length == 0 ? setIsContinue(true) : setIsContinue(false)
  }

  useEffect(() => {
    async function GetPostsFilter() {
      setPostsApi(null)
      setIsLoading(true)
      const postsList = await getPost(null, null, cat, pag)
      const nextPost = await getPost(null, null, cat, pag + totalPosts)
      ConditionPagination(nextPost)
      setPostsApi(postsList)
      setIsLoading(false)
    }

    GetPostsFilter()
  }, [ cat, pag ])

  useEffect(() => {
    async function InitValidationPag() {
      const nextPost = await getPost(null, null, cat, totalPosts)
      ConditionPagination(nextPost)
    }

    InitValidationPag()
  }, [ post ])

  return (
    <Base data={post} header={header} slideClass={['heroSlide']}>
      <S.Wrapper>
        <div className='lg:h-[90vh] flex items-center bg-fixed bg-cover pt-20 rounded-b-[32px]' style={{ backgroundImage: `url(${backImg.src})` }}>
          <Container>
            {post && (
              <Slide dataSlide={post} className="heroSlide" type="banner" />
            )}
          </Container>
        </div>
        <Container className='my-9'>

          {categories && (
            <FilterPosts categories={categories} setCat={setCat}></FilterPosts>
          )}

          <div className="grid lg:grid-cols-3 gap-5">
            {post && !cat && pag == 0
              ? post?.map((data, index) => (
                  <CardWrapper data={data} direction="vertical" key={index} />
                ))
              : postsApi?.map((data, index) => (<>
                  <CardWrapper data={data} direction="vertical" key={index} /></>
                ))}
          </div>
          {isLoading && (<Loading />)}
          <PaginationPosts
            pag={pag}
            setPag={setPag}
            isContinue={isContinue}
            totalPosts={totalPosts}
          />

        </Container>
        <div className='bg-black'>
          <div className='h-10 rounded-b-3xl bg-white'></div>
        </div>
      </S.Wrapper>
    </Base>
  )
}
