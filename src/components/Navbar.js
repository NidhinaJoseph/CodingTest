import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavItem } from "reactstrap";


class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" light>
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
                  <NavItem>
                    <NavLink
                      style={{
                        fontSize: "1.5rem",
                        padding: "1rem 1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                      to="/AddDigits"
                    >
                      Add Digits
                    </NavLink>
                    <NavLink
                      style={{
                        fontSize: "1.5rem",
                        padding: "1rem 1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                      to="/Asterisk"
                    >
                      Mask Numbers
                    </NavLink>
                    <NavLink
                      style={{
                        fontSize: "1.5rem",
                        padding: "1rem 1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                      to="/RomanToNumeric"
                    >
                      Roman to Numeric
                    </NavLink>
                  </NavItem>        
                      </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



export default NavBar;
