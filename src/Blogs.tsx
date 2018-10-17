import * as React from "react";
import { listBlogs } from "./graphql/queries";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ListBlogsQuery } from "./API";

export class Blogs extends React.PureComponent {
  render() {
    return (
      <Query<ListBlogsQuery> query={gql(listBlogs)}>
        {({ data, loading }) => {
          if (loading || !data || !data.listBlogs || !data.listBlogs.items) {
            return null;
          }

          return data.listBlogs.items.map((b: any) => (
            <div key={b.name}>{b.name}</div>
          ));
        }}
      </Query>
    );
  }
}
