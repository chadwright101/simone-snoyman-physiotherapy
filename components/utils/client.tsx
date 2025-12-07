import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: "http://wordpress.simonesnoymanphysiotherapy.co.za/graphql",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});

export default client;
