import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o7301v0x1201xx9n52dr60/master",
  cache: new InMemoryCache()
})