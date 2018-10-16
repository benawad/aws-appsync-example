import * as React from "react";
interface State {
  name: string;
}
interface Props {
  onSubmit: (formValues: State) => void;
}
export class Form extends React.PureComponent<Props, State> {
  state = {
    name: ""
  };
  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  };
  render() {
    return (
      <form
        onSubmit={async e => {
          e.preventDefault();
          this.props.onSubmit(this.state);
        }}
      >
        <h3>Create Blog</h3>
        <input
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">save</button>
      </form>
    );
  }
}
