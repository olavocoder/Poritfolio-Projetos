import { gql } from '@apollo/client'

// Algoritmo de querys para graphQL
function AddQuerys(slug = null, filter = null) {
  console.log('slug do site', slug)
  const sortQuery = `sort:${filter}`
  const whereQuery = `where:{slug:{current:{eq: "${slug}"}}}`
  if (!slug && !filter) return ''
  if (slug && filter) return `(${sortQuery}, ${whereQuery})`
  if (filter && !slug) return `(${sortQuery})`
  if (slug && !filter) return `(${whereQuery})`
}

export const PostApi = ({ slug, filter }) => gql`
  query Post {
    allPost${AddQuerys(slug, filter)}{
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
