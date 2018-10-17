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
  uri:
    "https://lpttylfopzdczo5gi7fcwoqs2m.appsync-api.us-east-1.amazonaws.com/graphql",
  headers: {
    "X-Api-Key": "da2-rvyi25lb4natdhd2igwdvtalee"
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
