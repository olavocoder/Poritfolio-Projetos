import { gql } from '@apollo/client'
function AddSlug(slug) {
  return slug ? `(where:{slug:{current:{eq: "${slug}"}}})` : ''
}

function AddSort(sort) {
  return sort ? `(sort:[{views: "${sort}"}])` : ''
}
export const PostApi = (slug, sort) => gql`
  query Post {
    allPost${AddSlug(slug)}{
      _id
      views
      title
      bodyRaw
      youTube
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
