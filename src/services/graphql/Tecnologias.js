import { gql } from '@apollo/client'

export const tecnologiasApi = gql`
  query Tecnologias {
    allTecnologias {
      title
      description
      slug {
        current
      }
    }
  }
`
