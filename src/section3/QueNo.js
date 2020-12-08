import React from "react";

class QueNo extends React.Component {
  render() {
    return (
      <div>
        <div class="questions">
          <div
            onClick={() => {
              this.props.queSelect(0);
            }}
            className="queno"
          >
            1
          </div>
          <div
            onClick={() => {
              this.props.queSelect(1);
            }}
            className="queno"
          >
            2
          </div>
          <div
            onClick={() => {
              this.props.queSelect(2);
            }}
            className="queno"
          >
            3
          </div>
          <div
            onClick={() => {
              this.props.queSelect(3);
            }}
            className="queno"
          >
            4
          </div>
        </div>
      </div>
    );
  }
}

export default QueNo;
