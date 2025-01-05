import { gql } from '@apollo/client'

export const BlogApi = gql`
  query Blog {
    allPaginas(where: { title: { eq: "Blog" } }) {
      title
      name
      description
      banners {
        title
        description
        linkButton
        textButton
        mainImage {
          asset {
            url
          }
        }
      }
      banner {
        asset {
          url
          altText
        }
      }
    }
  }
`
