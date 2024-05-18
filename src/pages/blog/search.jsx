import { getGeral, getPost } from '../../services/wordpress'
import SearchTemplate from '../../templates/Search'

export default function BlogSearch(data) {
  return <SearchTemplate {...data} />
}

export async function getStaticProps() {
  const header = await getGeral('Blog')
  // filters attributes views and _updateAt
  const post = await getPost(null, `[{ _updatedAt: ASC }, { views: ASC }]`)

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
      header,
      seo,
      post
    }
  }
}
