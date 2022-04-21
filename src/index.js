import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import NavBar from "./components/Navbar";
import PageRoutes from "./PageRoutes";
import "./styles/form.css";
import history from "./utils/history";

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
        <NavBar />
        <PageRoutes />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
