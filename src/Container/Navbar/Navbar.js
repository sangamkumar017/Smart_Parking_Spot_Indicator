import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ParkingSystem from "../ParkingSystem/ParkingSystem";
import LoginPage from "../../LoginPage";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/loginPage">LoginPage</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;