import { GraphQLClient } from "graphql-request";

const endpoint = process.env.WORDPRESS_ENDPOINT as string;

if (!endpoint) {
  throw new Error('Missing WORDPRESS_ENDPOINT');
}

export const wordpress = new GraphQLClient(endpoint, { errorPolicy: 'all',
      headers: {
    'Content-Type': 'application/json',
  },
 })
