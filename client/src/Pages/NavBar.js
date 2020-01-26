import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext, AppProvider } from "../AppContext";
import { SearchPlayers } from "../components/SearchPlayers";
export const NavBar = () => {
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
      <AppContext.Consumer>{context => <SearchPlayers />}</AppContext.Consumer>
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
