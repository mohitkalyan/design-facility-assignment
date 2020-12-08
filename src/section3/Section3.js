import React from "react";
import axios from "axios";
import "../style.css";
import Question from "./Question";
import QueNo from "./QueNo";

class Section3 extends React.Component {
  state = { section: [], queSelect: 0 };

  componentDidMount() {
    this.onPageLoad();
    console.log(this.state.section);
  }

  onPageLoad = async () => {
    const response = await axios.get(
      "http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/mohit"
    );
    this.setState({ section: response.data.exam.sections[2].Section3 });
    console.log(this.state.section);
  };

  queSelect = (no) => {
    console.log(no);
    this.setState({ queSelect: no });
    return no;
  };

  render() {
    return (
      <div>
        <Question
          queNo={this.state.queSelect + 1}
          questions={this.state.section[this.state.queSelect]}
        />
        <QueNo queSelect={this.queSelect} />
      </div>
    );
  }
}

export default Section3;
