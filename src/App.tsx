import * as React from "react";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";

import { Form } from "./Form";
import { createBlog } from "./graphql/mutations";
import { Blogs } from "./Blogs";

class App extends React.Component {
  public render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Connect mutation={graphqlOperation(createBlog)}>
          {({ mutation }: any) => (
            <Form
              onSubmit={async input => {
                const response = await mutation({ input });
                console.log(response);
              }}
            />
          )}
        </Connect>
        <Blogs />
      </div>
    );
  }
}

export default App;
