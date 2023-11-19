import { gql } from '@apollo/client'

export const HomeApi = gql`
  query Home {
    allPaginas(where: { title: { eq: "Home" } }) {
      name
      job
      banner {
        asset {
          url
        }
      }
      Social {
        asset {
          url
        }
      }
    }
  }
`
