import { gql } from '@apollo/client'

export const ProjetosApi = gql`
  query Projetos {
    allProjetos {
      title
      gitLink
      tecnologias {
        title
        description
      }
      mainImage {
        asset {
          url
        }
      }
      skills {
        icons {
          asset {
            url
            metadata {
              dimensions {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`
