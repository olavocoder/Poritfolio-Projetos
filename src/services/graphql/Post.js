import { gql } from '@apollo/client'

// Algoritmo de querys para graphQL
function AddQuerys(slug = null, filter = null, cat = null, pag = 0) {
  const isWhere = cat || slug ? true : false
  const titlePost = `slug:{current:{eq: "${slug}"}}`
  const catPost = `category: {slug: {current: { matches : "${cat}"}}}`
  const sortQuery = `sort:${filter}`
  const whereQuery = `where:{${cat ? catPost : titlePost}}`
  if (!isWhere && !filter) return `(limit: 5, offset: ${pag} )`
  if (isWhere && filter)
    return `(${sortQuery}, ${whereQuery}, limit: 5, offset: ${pag})`
  if (filter && !isWhere) return `(${sortQuery}, limit: 5, offset: ${pag})`
  if (isWhere && !filter) return `(${whereQuery}, limit: 5, offset: ${pag})`
}

export const PostApi = ({ slug, filter, cat, pag }) => gql`
  query Post {
    allPost${AddQuerys(slug, filter, cat, pag)}{
      _id
      _type
      title
      bodyRaw
      youTube
      description
      publishedAt
      mainImage{
        asset{
          url
        }
      }
      category {
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
        publishedAt
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
