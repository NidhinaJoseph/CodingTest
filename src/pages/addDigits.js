//Written by Nidhina Joseph 
import React, { Component } from "react";
import { Input, Row, Col, Button } from "reactstrap";
import "../styles/form.css";
export default class AddDigits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: "",
      sortedString: "",
    };
  }
  updateState = (e) => {
    this.setState({
      inputString: e.target.value,
    });
  };

// Here i m giving val as input .
// JSON.Parse method will return a JavaScript array.
// Looping through the array and considering each item i m adding digits using reduce function.
// Pushing each item into a new array called weight giving a new array and after sorting and converting 
// to string we get the required output and using this state is updated with required value and bound inside the return.

  addDigits = (val) => {
    let data = JSON.parse("[" + val + "]");
    let weight = [];
    data.forEach((element) => {
      let sum = element
        .toString()
        .split("")
        .map(Number)
        .reduce(function (a, b) {
          return a + b;
        }, 0);
      weight.push(sum);
    });
    weight = weight.sort().toString();
    this.setState({
      sortedString: weight,
    });
  };
  clearInput = () => {
    this.setState({
      inputString: "",
      sortedString: "",
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
                  name="inputString"
                  value={this.state.inputString}
                  onChange={(e) => this.updateState(e)}
                  placeholder="enter the string"
                />
                {/* Here Ternary operator checks if data is there in the state we can perform the operation else user must type the input */}
                  <Button
                    style={{ marginLeft: "6px" }}
                    color="primary"
                    onClick={() =>  this.state.inputString!==""&& this.addDigits(this.state.inputString)}
                  >
                  {this.state.inputString !== ""?" Add digits":"Please Type Inputs" } 
                  </Button>
                  {this.state.inputString !== "" && (
                  <Button
                    style={{ marginLeft: "6px" }}
                    color="primary"
                    onClick={() => this.clearInput()}
                  >
                    Reset
                  </Button>
                )}
              </div>
              <h5 style={{ color: "#000", marginTop: "10px" }}>
                {" "}
                {this.state.sortedString}
              </h5>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </>
    );
  }
}
