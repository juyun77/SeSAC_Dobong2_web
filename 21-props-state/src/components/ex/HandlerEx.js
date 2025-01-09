import { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    text: "Hello world!",
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <p>{text}</p>
        <button
          onClick={() => {
            this.setState({ text: "Goodbye World!" });
          }}
        >
          글자변경
        </button>
      </div>
    );
  }
}
