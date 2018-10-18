import * as React from "react";
import { withAuthenticator } from "aws-amplify-react";

import { Form } from "./Form";
import { createBlog } from "./graphql/mutations";
import { Blogs } from "./Blogs";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CreateBlogMutation, CreateBlogMutationVariables } from "./API";
import { listBlogs } from "./graphql/queries";

class App extends React.Component {
  public render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Mutation<CreateBlogMutation, CreateBlogMutationVariables>
          mutation={gql(createBlog)}
        >
          {mutate => (
            <Form
              onSubmit={async input => {
                const response = await mutate({
                  variables: { input },
                  refetchQueries: [{ query: gql(listBlogs) }]
                });
                console.log(response);
              }}
            />
          )}
        </Mutation>
        <Blogs />
      </div>
    );
  }
}

export default withAuthenticator(App);
