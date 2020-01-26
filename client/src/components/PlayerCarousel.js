import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
export const PlayerCarousel = () => {
  const contextValue = useContext(AppContext);

  const [players, setPlayers] = useState([]);
  const [currentPlayersPage, setCurrentPlayersPage] = useState(1);
  const [playersPerPage, setPlayersPerPage] = useState(6);
  const [playersLoading, setPlayersLoading] = useState(false);
  useEffect(() => {
    const getPlayers = async () => {
      setPlayersLoading(true);
      let requestPlayers = await axios({
        method: "get",
        url: "/api/players/getPlayers"
      });

      setPlayers(requestPlayers.data);
      setPlayersLoading(false);
    };
    getPlayers();
  }, []);
  return (
    <div>
      {playersLoading ? (
        <h1>LOADING PLAYERS</h1>
      ) : (
        <ul>
          {players.map(player => (
            <li>{player.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
