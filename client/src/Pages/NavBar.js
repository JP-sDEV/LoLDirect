<<<<<<< HEAD
import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { AppContext, AppProvider } from "../AppContext";
import { SearchPlayers } from "../components/SearchPlayers";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
export const NavBar = () => {
  const location = useLocation();
=======
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext, AppProvider } from "../AppContext";
import { SearchPlayers } from "../components/SearchPlayers";
export const NavBar = () => {
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e
  return (
    <section className="grid" id="showCase">
      <div id="headerTitle">
        {" "}
        <h3 className="">League of Legends Direct</h3>
      </div>
      <div id="headerImg">
        {" "}
        <img
          id="logo"
          src="https://cdn2.downdetector.com/static/uploads/logo/image1.png"
        />
      </div>
<<<<<<< HEAD
      {location.pathname !== "/MakeATeam" && <span></span> && (
        <Fragment>
          <SearchPlayers />
        </Fragment>
      )}
      {/* <AppContext.Consumer>{context => <SearchPlayers />}</AppContext.Consumer> */}
=======
      <AppContext.Consumer>{context => <SearchPlayers />}</AppContext.Consumer>
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e
      <ul className="navBar">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/MakeATeam">
          Make A Team
        </Link>
        <Link className="navLink" to="/News">
          News
        </Link>
        {/* <Link className="" to="/Contact">
          Contact
        </Link> */}
      </ul>
    </section>
  );
};
