import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlayerCard } from "../components/PlayerCard";
/* Description: page where user gets redirected after searching for a player from the home page */

export const PlayersSearch = ({ location }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPlayerSearch = async () => {
      setLoading(true);
      let requestSearchPlayers = await axios({
        method: "get",
        url: `/api/players/search${location.search}`
      });

      setPlayers(requestSearchPlayers.data);
      setLoading(false);
      console.log("making call from player search");
      console.log(players);
    };
    getPlayerSearch();
  }, [location]);

  return (
    <div>
      {loading ? (
        <h1>Loading . . .</h1>
      ) : (
        <div className="playerSearchSection">
          {players.map(player => (
            // Map to a player card
            <div className="playerCardItem">
              <PlayerCard playerInfo={player} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
