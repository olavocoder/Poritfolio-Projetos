import { gql } from '@apollo/client'

export const GeralApi = (slug) => gql`
  query Geral {
    allGeral(where: { title: { eq: "${slug}" } }) {
      title
      policyText
      sidebarCards {
        title
        description
        textButton
      	linkButton
      	mainImage{
          asset{
            url
          }
        }
      }
      logoFooter{
        asset{
          url
        }
      }
      SocialFooter{
        url
        icon{
          asset{
            url
          }
        }
      }
      logo{
        asset{
          url
        }
      }
      Menu{
          title
          slug{
            current
          }
      }
    }
  }
`
