import { wordpressApi } from './api'
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

export async function getPost(slug) {
  try {
    const response = await wordpressApi.query({
      query: PostApi(slug)
    })

    return response.data.allPost[0]
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
