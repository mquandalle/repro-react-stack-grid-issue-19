import React, { Component } from "react";
import ReactDOM from 'react-dom';
import StackGrid from "react-stack-grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLarge: true };
  }

  toogleLargeMode() {
    this.setState({ isLarge: !this.state.isLarge });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.toogleLargeMode()}>Rotate phone</button>

        <StackGrid columnWidth={this.state.isLarge ? "33.33%" : "50%"}>
          {new Array(10).fill(0).map((_, index) =>
            <div
              key={index}
              style={{
                // This is the critical part:
                // -------------------------
                // Basically because the item width changes, the item height also
                // changes (in this case it's artificial but in real-world scenarios
                // it's becauses paragraphs take more vertical space if they have
                // less horizontal space).
                //
                // The problem is the doLayout function of `StackGrid` calculates
                // the item height before it changes.
                height: this.state.isLarge ? 100 : 130,
                background: "#eee",
                border: "1px solid #333"
              }}
            />
          )}
        </StackGrid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
