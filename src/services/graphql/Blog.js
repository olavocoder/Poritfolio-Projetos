import { gql } from '@apollo/client'

export const BlogApi = gql`
  query Blog {
    allPaginas(where: { title: { eq: "Blog" } }) {
      title
      name
      description
      banner {
        asset {
          url
        }
      }
    }
  }
`
