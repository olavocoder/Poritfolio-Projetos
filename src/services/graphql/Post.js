import { gql } from '@apollo/client'

export const PostApi = (slug) => gql`
  query Post {
    allPost(where:{slug:{current:{eq: "${slug}"}}}){
      title
      bodyRaw
      youTube
      mainImage{
        asset{
          url
        }
      }
      slug{
        current
      }
      postsRelateds{
      title
      description
      slug{
        current
      }
        mainImage{
          asset{
            url
          }
        }
      }
    }
  }
`
