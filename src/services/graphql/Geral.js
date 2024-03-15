import { gql } from '@apollo/client'

export const GeralApi = (slug) => gql`
  query Geral {
    allGeral(where: { title: { eq: "${slug}" } }) {
      title
      logo{
        asset{
          url
        }
      }
      Menu{
        title
        categories{
          title
          slug{
            current
          }
        }
      }
    }
  }
`
