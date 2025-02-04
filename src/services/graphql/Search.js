import { gql } from '@apollo/client'

export const SearchApi = (title) => gql`
  query Post {
    allPost(where: {title:{matches: "${title}"}}){
      title
      slug{
        current
      }
    }
  }
`
