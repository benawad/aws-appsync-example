import * as React from "react";
import * as ReactDOM from "react-dom";
import Amplify from "@aws-amplify/core";

import config from "./aws-exports";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
