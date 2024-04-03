import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createClient } from '@sanity/client'

const wordpressApi = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  }
})

export { wordpressApi }

//Endpoint SanityIO
export const clientSanity = createClient({
  projectId: 'lxpq608x',
  apiVersion: '2023-08-01',
  dataset: 'production',
  token: `${process.env.SANITY_API_KEY_EDITOR}`, // Opcional, necessário se você configurou autenticação
  useCdn: true // Configuração opcional para evitar o uso de cache CDN
})
