import { gql } from '@apollo/client'

export const SobreApi = gql`
  query Sobre {
    allPaginas(where: { title: { eq: "Sobre" } }) {
      title
      altText
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
