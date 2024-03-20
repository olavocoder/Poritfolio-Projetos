import { gql } from '@apollo/client'

export const PostApi = (slug) => gql`
  query Post {
    allPost(where:{slug:{current:{eq: "${slug}"}}}){
      title
      bodyRaw
      youTube
      categories{
        title
        slug{
          current
        }
      }
      mainImage{
        asset{
          url
        }
      }
      slug{
        current
      }
      sidebarCards{
      title
      description
      button
      imageCard{
        asset{
          url
        }
      }
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
