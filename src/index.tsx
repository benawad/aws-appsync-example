import * as React from "react";
import * as ReactDOM from "react-dom";
import Amplify from "@aws-amplify/core";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import config from "./aws-exports";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

Amplify.configure(config);

const client = new ApolloClient({
  uri: config.aws_appsync_graphqlEndpoint,
  headers: {
    "X-Api-Key": config.aws_appsync_apiKey
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
