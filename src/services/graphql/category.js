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

export const CategoryApi = ({ slug, filter }) => gql`
  query Category {
    allCategory${AddQuerys(slug, filter)}{
      _id
      _type
      _updatedAt
      views
      title
      slug{
        current
      }
    }
  }
`
