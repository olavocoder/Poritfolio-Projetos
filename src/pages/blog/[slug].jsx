import { getPost, getCategories, getGeral } from '../../services/wordpress'
import CategoryTemplate from '../../templates/Category'
import PostTemplate from '../../templates/Post'

export default function Projetos(data) {
  if (data.post) {
    if (data.post['_type'] == 'category') {
      return <CategoryTemplate {...data} />
    } else {
      return <PostTemplate {...data} />
    }
  }

  return <PostTemplate {...data} />
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  // return informations of geral blog
  const header = await getGeral('Blog')

  // return informations of blog posts
  let post = await getPost(params.slug, null)
  let categories = await getCategories(params.slug, null)
  let postsList = []

  if (!post[0]) {
    post = categories
    postsList = await getPost(null, null, params.slug)
  }

  post = post[0]

  // send numbers of views pages
  //const responseSend = post ? await SendViewsPost(post) : null

  const seo = {
    title: 'Home',
    description: 'Página inicial',
    noindex: false
  }

  return {
    revalidate: 60,
    props: {
      seo,
      post,
      postsList,
      header
    }
  }
}
