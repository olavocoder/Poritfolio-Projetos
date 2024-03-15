import { getPost } from '../../services/wordpress'
import { getGeral } from '../../services/wordpress'
import PostTemplate from '../../templates/Post'
export default function Projetos(data) {
  return <PostTemplate {...data} />
}
export async function getStaticPaths() {
  return { paths: [], fallback: true }
}
export async function getStaticProps({ params }) {
  const header = await getGeral('Blog')
  const post = await getPost(params.slug)
  // const data = categories

  // go to notfound
  // if (data[0] === undefined || !data[0]) {
  //   return {
  //     notFound: true
  //   }
  // }

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
