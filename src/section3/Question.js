import React from "react";

class Question extends React.Component {
  state = { selected: "" };

  render() {
    if (this.props.questions == null) {
      return "Loading Questions";
    }

    return (
      <div>
        <div className="que--no"> Question No {this.props.queNo}</div>
        <div className="question--text">{this.props.questions.quesText}</div>
        <div className="que--options">
          <div className="option">
            <div className="option--a">A</div>
            <div
              onClick={() => {
                this.setState({ selected: this.props.questions.option1 });
              }}
              className={`option--description ${
                this.state.selected === this.props.questions.option1
                  ? "selected"
                  : null
              }`}
            >
              {this.props.questions.option1}
            </div>
          </div>
          <div className="option">
            <div className="option--a">B</div>
            <div
              onClick={() => {
                this.setState({ selected: this.props.questions.option2 });
              }}
              className={`option--description ${
                this.state.selected === this.props.questions.option2
                  ? "selected"
                  : null
              }`}
            >
              {this.props.questions.option2}
            </div>
          </div>
          <div className="option">
            <div className="option--a">C</div>
            <div
              onClick={() => {
                this.setState({ selected: this.props.questions.option3 });
              }}
              className={`option--description ${
                this.state.selected === this.props.questions.option3
                  ? "selected"
                  : null
              }`}
            >
              {this.props.questions.option3}
            </div>
          </div>
          <div className="option">
            <div className="option--a">D</div>
            <div
              onClick={() => {
                this.setState({ selected: this.props.questions.option4 });
              }}
              className={`option--description ${
                this.state.selected === this.props.questions.option4
                  ? "selected"
                  : null
              }`}
            >
              {this.props.questions.option4}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
