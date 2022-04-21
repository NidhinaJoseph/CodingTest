//Written by Nidhina Joseph 
import React, { Component } from "react";
import { Input, Row, Col, Button } from "reactstrap";
import "../styles/form.css";
export default class RomanToNumeric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      romanNumerals: "",
      numericInteger: "",
    };
  }
  updateState = (e) => {
    this.setState({
      romanNumerals: e.target.value,
    });
  };
// Here we are giving roman numeral as input
// There are fixed values for each numeral and has certain conditions for the addition of numerals
// After looping through the different cases value accumulates to a variable called accumulator.
// State is updated with the accumulated sum variable.
// The state value is bound inside the return.
  romanNumeralsToNum = (num) => {
    const romanHash = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };
      let numeral=num.toUpperCase()
      let accumulator = 0;
      for (let i = 0; i < numeral.length; i++) {
        if (numeral[i] === "I" && numeral[i + 1] === "V") {
          accumulator += 4;
          i++;
        } else if (numeral[i] === "I" && numeral[i + 1] === "X") {
          accumulator += 9;
          i++;
        } else if (numeral[i] === "X" && numeral[i + 1] === "L") {
          accumulator += 40;
          i++;
        } else if (numeral[i] === "X" && numeral[i + 1] === "C") {
          accumulator += 90;
          i++;
        } else if (numeral[i] === "C" && numeral[i + 1] === "D") {
          accumulator += 400;
          i++;
        } else if (numeral[i] === "C" && numeral[i + 1] === "M") {
          accumulator += 900;
          i++;
        } else {
          accumulator += romanHash[numeral[i]];
        }
      }
      this.setState({
        numericInteger: accumulator,
      });
  };
  clearInput = () => {
    this.setState({
      numericInteger: "",
      romanNumerals: "",
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
                  name="romanNumerals"
                  value={this.state.romanNumerals}
                  placeholder="enter the Roman Numerals"
                  onChange={(e) => this.updateState(e)}
                />
                <Button
                  style={{ marginLeft: "6px" }}
                  color="primary"
                  onClick={() =>
                    this.romanNumeralsToNum(this.state.romanNumerals)
                  }
                >
                  Convert Roman Numerals
                </Button>
                {this.state.romanNumerals !== "" && (
                  <Button
                    style={{ marginLeft: "6px" }}
                    color="primary"
                    onClick={() => this.clearInput()}
                  >
                    Reset
                  </Button>
                )}
              </div>
              <h5 style={{ color: "#000" }}> {this.state.numericInteger}</h5>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </>
    );
  }
}
