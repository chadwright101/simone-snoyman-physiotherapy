import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://wordpress.simonesnoymanphysiotherapy.co.za/graphql",
  cache: new InMemoryCache(),
});

export default client;
