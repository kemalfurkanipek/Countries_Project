import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql', // Apollo Server'ın URL'si
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    
  </ApolloProvider>,
  document.getElementById('root')
);