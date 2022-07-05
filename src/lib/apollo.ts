import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4wqso3d069q01t26c7o5ezu/master',
  cache: new InMemoryCache()

})