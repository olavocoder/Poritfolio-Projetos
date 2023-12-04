import { gql } from '@apollo/client'

export const HomeApi = gql`
  query Home {
    allPaginas(where: { title: { eq: "Home" } }) {
      name
      job
      altText
      banner {
        asset {
          url
          altText
        }
      }
      Social {
        url
        altText
        icon {
          asset {
            url
            altText
          }
        }
      }
    }
  }
`
