import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import axios from "axios";

export const SearchPlayers = ({ setsearchResults }) => {
  const history = useHistory();
  const contextValue = useContext(AppContext);
  const location = useLocation();

  const handlePlayerSearch = userInput => {
    contextValue.setSearchString(userInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (!contextValue.searchString) {
        alert("Search is empty!");
      } else if (location.pathname == "/MakeATeam") {
        axios({
          method: "get",
          url: `/api/players/Search?playerName=${contextValue.searchString}`
        }).then(res => setsearchResults(res.data));

        // setsearchResults(fantasyPlayerSearch);
      } else {
        history.push(`/Players/Search?playerName=${contextValue.searchString}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="searchContainer">
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

      <form onSubmit={handleSubmit} className="searchBanner">
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
