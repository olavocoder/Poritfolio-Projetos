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
          altText
        }
      }
      skills {
        icons {
          asset {
            url
            altText
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
