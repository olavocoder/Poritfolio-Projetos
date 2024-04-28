import { clientSanity, wordpressApi } from './api'
import { BlogApi } from './graphql/Blog'
import { GeralApi } from './graphql/Geral'
import { HomeApi } from './graphql/Home'
import { PostApi } from './graphql/Post'
import { ProjetosApi } from './graphql/Projetos'
import { SobreApi } from './graphql/Sobre'
import { tecnologiasApi } from './graphql/Tecnologias'

export async function getHome() {
  try {
    const response = await wordpressApi.query({
      query: HomeApi
    })

    return response.data.allPaginas[0]
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getPost(slug = null, filter = null) {
  try {
    const response = await wordpressApi.query({
      query: PostApi({ slug: slug, filter: filter })
    })
    console.log(response.errors)
    return response.data.allPost
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getGeral(slug) {
  try {
    const response = await wordpressApi.query({
      query: GeralApi(slug)
    })

    return response.data.allGeral[0]
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getBlogPage() {
  try {
    const response = await wordpressApi.query({
      query: BlogApi
    })

    return response.data.allPaginas[0]
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getSobre() {
  try {
    const response = await wordpressApi.query({
      query: SobreApi
    })

    return response.data.allPaginas[0]
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getProjetos() {
  try {
    const response = await wordpressApi.query({
      query: ProjetosApi
    })

    return response.data.allProjetos
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getTecnologias() {
  try {
    const response = await wordpressApi.query({
      query: tecnologiasApi
    })

    return response.data.allTecnologias
  } catch (error) {
    console.error(error)
    return []
  }
}

//codigo para o envio de numero de visualizações da pagina de post
export async function SendViewsPost(post) {
  try {
    const newViewSchema = {
      views: 1
    }
    const response = await clientSanity
      .patch(post['_id'])
      .inc(newViewSchema)
      .commit('', { dryRun: false })
    return response
  } catch (err) {
    console.log(err, 'não conseguiu receber a requisicao')
  }
}
