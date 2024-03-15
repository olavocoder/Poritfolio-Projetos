import { gql } from '@apollo/client'

export const SobreApi = gql`
  query Sobre {
    allPaginas(where: { title: { eq: "Sobre" } }) {
      title
      banner {
        asset {
          url
          altText
        }
      }
      description
    }
  }
`
