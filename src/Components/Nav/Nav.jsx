import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav className="navbar">
      <li>COVID-19</li>
      <li
        style={{
          color: "#d907ff",
          fontWeight: "bolder",
          fontSize: "medium",
        }}
      >
        INDIA
      </li>
    </nav>
  );
}

export default Nav;
