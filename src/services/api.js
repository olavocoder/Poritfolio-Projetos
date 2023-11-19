import { ApolloClient, InMemoryCache } from '@apollo/client'

const wordpressApi = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache()
})

export { wordpressApi }
