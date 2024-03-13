import { gql } from '@apollo/client'

export const PostApi = (slug) => gql`
  query Post {
    allPost(where:{slug:{current:{eq: "${slug}"}}}){
    title
    bodyRaw
    mainImage{
      asset{
				url
      }
    }
    slug{
      current
    }
  }
  }
`
