import { gql } from '@apollo/client'

export const ProjetosApi = gql`
  query Projetos {
    allProjetos {
      title
      tecnologias {
        title
        description
      }
      mainImage {
        asset {
          url
        }
      }
    }
  }
`
