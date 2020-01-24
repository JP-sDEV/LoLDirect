import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";

export const SearchPlayers = () => {
  const history = useHistory();
  const contextValue = useContext(AppContext);

  const handlePlayerSearch = userInput => {
    contextValue.setSearchString(userInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (!contextValue.searchString) {
        alert("Search is empty!");
      } else {
        history.push(`/Players/Search?playerName=${contextValue.searchString}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
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

      <form onSubmit={handleSubmit}>
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
