import { gql } from '@apollo/client'

export const SearchApi = (title) => gql`
  query Post {
    allPost(where: {title:{matches: "${title}"}}){
      _id
      _type
      views
      title
      bodyRaw
      youTube
      mainImage{
        asset{
          url
        }
      }
      categories {
        title
        slug {
          current
        }
      }
      mainImage {
        asset {
          url
        }
      }
      slug {
        current
      }
      sidebarCards {
        title
        description
        button
        imageCard {
          asset {
            url
          }
        }
      }
      postsRelateds {
        title
        description
        slug {
          current
        }
        mainImage {
          asset {
            url
          }
        }
      }
    }
  }
`
