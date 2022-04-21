//Written by Nidhina Joseph
import React, { Component } from "react";
import { Input, Row, Col, Button } from "reactstrap";
import "../styles/form.css";
export default class Asterisk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      maskedString: "",
    };
  }
  updateState = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };
  //Here masking last four digits of a string using the Regex with asterisk
  // First converting string to an array using spread operator.
  //Setting a count to 0;
  //Looping the array from the right to left finding the numeric digits using Number()
  // Neglecting NaN case replace the digits with asterisk
  //Count is incrementing until it reaches 0 to 3 and breaks at 4

  maskInputString = (char) => {
    let charArray = [...char];
    let count = 0;
    for (let i = charArray.length; i > 0; i--) {
      if (!isNaN(Number(charArray[i]))) {
        charArray[i] = "*";
        count = count + 1;
      }
      if (count === 4) {
        break;
      }
    }
    this.setState({
      maskedString: charArray,
    });
  };
  clearInput = () => {
    this.setState({
      maskedString: "",
      inputText: "",
    });
  };
  render() {
    return (
      <>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className="asteric-form">
              <div style={{ display: "flex" }}>
                <Input
                  type="text"
                  name="inputText"
                  value={this.state.inputText}
                  placeholder="enter the string"
                  onChange={(e) => this.updateState(e)}
                />
                <Button
                  style={{ marginLeft: "6px" }}
                  color="primary"
                  onClick={() => this.maskInputString(this.state.inputText)}
                >
                  Mask the Numbers
                </Button>
                {this.state.inputText !== "" && (
                  <Button
                    style={{ marginLeft: "6px" }}
                    color="primary"
                    onClick={() => this.clearInput()}
                  >
                    Reset
                  </Button>
                )}
              </div>
              <h5 style={{ color: "#000" }}> {this.state.maskedString}</h5>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </>
    );
  }
}
