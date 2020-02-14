import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import axios from "axios";

export const SearchPlayers = ({ setsearchResults }) => {
  const history = useHistory();
  const contextValue = useContext(AppContext);
  const location = useLocation();
=======

export const SearchPlayers = () => {
  const history = useHistory();
  const contextValue = useContext(AppContext);
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e

  const handlePlayerSearch = userInput => {
    contextValue.setSearchString(userInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (!contextValue.searchString) {
        alert("Search is empty!");
<<<<<<< HEAD
      } else if (location.pathname == "/MakeATeam") {
        axios({
          method: "get",
          url: `/api/players/Search?playerName=${contextValue.searchString}`
        }).then(res => setsearchResults(res.data));

        // setsearchResults(fantasyPlayerSearch);
=======
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e
      } else {
        history.push(`/Players/Search?playerName=${contextValue.searchString}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
<<<<<<< HEAD
    <div className="searchContainer">
=======
    <div>
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e
      {contextValue.searchResults.length > 0 ? (
        <div>
          {contextValue.searchResults.map(player => (
            <div>
              <h2>Player Name: {player.name}</h2>
              <img src={player.image_url} />
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}

<<<<<<< HEAD
      <form onSubmit={handleSubmit} className="searchBanner">
=======
      <form onSubmit={handleSubmit}>
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e
        <input
          type="textarea"
          placeholder="Search For A Player..."
          value={contextValue.searchString}
          onChange={e => handlePlayerSearch(e.target.value)}
        />
        <button className="submitSearch" type="submit" value="submit">
          Search
        </button>
      </form>
    </div>
  );
};
