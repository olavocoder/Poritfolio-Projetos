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
  // retorna informações de blog Geral
  const header = await getGeral('Blog')

  //retorna informações de posts do blog
  let post = await getPost(params.slug, null)
  let categories = await getCategories(params.slug, null)
  post = post[0] ? post : categories
  // Envia numero de views da pagina
  post = post[0]
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
      header
    }
  }
}
