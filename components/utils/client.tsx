import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://simone-snoyman-physiotherapy.local/graphql",
  cache: new InMemoryCache(),
});

export default client;
