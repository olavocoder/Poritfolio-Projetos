import { getPost, SendViewsPost } from '../../services/wordpress'
import { getGeral } from '../../services/wordpress'
import PostTemplate from '../../templates/Post'

export default function Projetos(data) {
  return <PostTemplate {...data} />
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  // retorna informações de blog Geral
  const header = await getGeral('Blog')

  //retorna informações de posts do blog
  const post = await getPost(params.slug)
  // Envia numero de views da pagina

  const responseSend = await SendViewsPost(post)
  console.log('response', responseSend)
  console.log('post', post['_id'])
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
