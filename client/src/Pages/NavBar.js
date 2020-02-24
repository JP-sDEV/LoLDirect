import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { AppContext, AppProvider } from "../AppContext";
import { SearchPlayers } from "../components/SearchPlayers";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
export const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="nav" id="showCase">
      <div id="headerImg">
        {" "}
        <img id="logo" src="./logo.png" />
      </div>
      <div className="navagationContainer">
        {location.pathname !== "/MakeATeam" && <span></span> && (
          <div className="navBarSearchContainer">
            <SearchPlayers />
          </div>
        )}
        <ul className="optionsBar">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/MakeATeam">
            Make A Team
          </Link>
          <Link className="navLink" to="/News">
            News
          </Link>
        </ul>
      </div>
    </nav>
  );
};
