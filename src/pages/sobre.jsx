import {
  getHome,
  getSobre,
  getProjetos,
  getTecnologias,
  getBlogPage
} from '../services/wordpress'
import AboutTemplate from '../templates/About'

export default function About(data) {
  return <AboutTemplate {...data} />
}

export async function getStaticProps() {
  const home = await getHome()
  const sobre = await getSobre()
  const projetos = await getProjetos()
  const tecnologias = await getTecnologias()
  const blog = await getBlogPage()

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
      home,
      sobre,
      projetos,
      tecnologias,
      blog
    }
  }
}
