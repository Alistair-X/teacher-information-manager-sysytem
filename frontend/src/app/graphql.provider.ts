import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { inject } from '@angular/core';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core';
// @ts-ignore
import extractFiles from 'extract-files/extractFiles.mjs';
// @ts-ignore
import isExtractableFile from 'extract-files/isExtractableFile.mjs';
import { SetContextLink } from '@apollo/client/link/context';

// const uri = 'http://127.0.0.1:8080/graphql'; // <-- add the URL of the GraphQL server here
const uri = 'http://api.teacher.cn/graphql';
export function apolloOptionsFactory(): ApolloClient.Options {
  const httpLink = inject(HttpLink);
  return {
    link: ApolloLink.from([
      new SetContextLink((prevContext, operation) => {
        return {
        }
      }),
      httpLink.create({
        uri,
        extractFiles: (body) => extractFiles(body, isExtractableFile) as any,
      })
    ]),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider = provideApollo(apolloOptionsFactory);
