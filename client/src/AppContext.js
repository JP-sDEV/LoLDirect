import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = props => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const valueObj = {
    loading: loading,
    setLoading: setLoading,
    searchString: searchString,
    setSearchString: setSearchString,
    searchResults: searchResults,
    setSearchResults: setSearchResults,
    selectedPlayer: selectedPlayer,
    setSelectedPlayer: setSelectedPlayer
  };

  return (
    <AppContext.Provider value={valueObj}>{props.children}</AppContext.Provider>
  );
};
