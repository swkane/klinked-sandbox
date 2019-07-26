import React from "react";
import Footer from "./Footer";
import { NavBarContainer } from "./NavBarContainer";
import { BrowserRouter as Router } from "react-router-dom";

export default function BaseLayout(props) {
  return (
    <div>
      <Router>
        <NavBarContainer />
        {props.children}
        <Footer />
      </Router>
    </div>
  );
}
