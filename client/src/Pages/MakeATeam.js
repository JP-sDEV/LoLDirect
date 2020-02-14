<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { SearchPlayers } from "../components/SearchPlayers";
import { FantasyCard } from "../components/FantasyCard";
import { SelectedPlayerCard } from "../components/SelectedPlayerCard";
const samplePlayerInfo = require("../samplePlayers/samplePlayers.json");

export const MakeATeam = () => {
  const [fantasyTeam, setfantasyTeam] = useState({
    top: {
      image: "https://ultimate-bravery.net/images/roles/Top_icon.png",
      info: samplePlayerInfo[0]
    },
    jg: {
      image: "https://ultimate-bravery.net/images/roles/jungle_icon.png",
      info: samplePlayerInfo[1]
    },
    mid: {
      image: "https://ultimate-bravery.net/images/roles/mid_icon.png",
      info: samplePlayerInfo[2]
    },
    adc: {
      image: "https://ultimate-bravery.net/images/roles/bot_icon.png",
      info: samplePlayerInfo[3]
    },
    sup: {
      image: "https://ultimate-bravery.net/images/roles/support_icon.png",
      info: samplePlayerInfo[4]
    }
  });

  // PAGINATION STATES
  const [pageNumber, setPageNumber] = useState(1);
  const [searchResults, setsearchResults] = useState([]);
  const [pageContents, setPageContents] = useState([]);
  // TO BE CONTINUED
  useEffect(() => {
    const initLoad = async () => {
      let contents = searchResults.slice(0, 15);
      await setPageContents(contents);
    };
    initLoad();
  }, [searchResults]);

  const handlePageChange = async (currentPage, pageDirection) => {
    if (pageDirection == "next") {
      let sliceStart = currentPage * 15 + 1;
      let sliceEnd = sliceStart + 15;
      let content = searchResults.slice(sliceStart, sliceEnd);
      await setPageContents(content);
      setPageNumber(pageNumber + 1);
    } else if (pageDirection == "prev") {
      let sliceStart = (currentPage - 2) * 15;
      let sliceEnd = sliceStart + 15;
      let content = searchResults.slice(sliceStart, sliceEnd);
      await setPageContents(content);
      setPageNumber(pageNumber - 1);
    }
  };

  // UPDATED
  const removePlayer = playerID => {
    Object.keys(fantasyTeam)
      .filter(r => fantasyTeam[r].info !== null)
      .map(role => {
        if (
          fantasyTeam[role].info.id == playerID &&
          fantasyTeam[role].info.id !== null
        ) {
          setfantasyTeam({
            ...fantasyTeam,
            [role]: { image: fantasyTeam[role].image, info: null }
          });
        }
      });
  };

  const addPlayer = (player, selectedRole) => {
    if (fantasyTeam[selectedRole].info) {
      alert("There is already a player in that position");
    } else {
      console.log("addPlayer reached");
      setfantasyTeam({
        ...fantasyTeam,
        [selectedRole]: { image: fantasyTeam[selectedRole].image, info: player }
      });
    }
  };

  return (
    <div className="makeATeamContainer">
      <div>
        <SearchPlayers setsearchResults={setsearchResults} />
      </div>
      {/* sample team */}
      <div className="sampleTeamSection">
        {Object.values(fantasyTeam).map(player => {
          if (player.info) {
            return (
              <div className="fantasyCardContainer">
                {" "}
                <SelectedPlayerCard
                  playerInfo={player.info}
                  selected={true}
                  id={player.info.id}
                  removePlayer={removePlayer}
                  roleImg={player.image}
                />{" "}
              </div>
            );
          } else if (!player.info) {
            return (
              <div className="fantasyCardContainer">
                {" "}
                <SelectedPlayerCard
                  roleImg={player.image}
                  selected={true}
                  playerInfo={null}
                />{" "}
              </div>
            );
          }
        })}
      </div>
      <h3>Available Players</h3>
      <div className="sampleTeamSection">
        {pageContents.length > 0
          ? pageContents.map(player => (
              <div className="fantasyCardContainer">
                <FantasyCard
                  playerInfo={player}
                  selected={false}
                  id={player.id}
                  addPlayer={addPlayer}
                />
              </div>
            ))
          : null}
      </div>
      {searchResults.length > 0 ? (
        <div className="newsButtons">
          {" "}
          {pageNumber > 1 ? (
            <button
              type="button"
              onClick={e => handlePageChange(pageNumber, e.target.value)}
              value="prev"
            >
              Back
              {/* <i className="fas fa-arrow-left"></i> */}
            </button>
          ) : null}
          <span className="newsPage">{pageNumber}</span>
          {pageContents.length >= 15 ? (
            <button
              type="button"
              onClick={e => handlePageChange(pageNumber, e.target.value)}
              value="next"
            >
              Next
              {/* <i className="fas fa-arrow-right"></i> */}
            </button>
          ) : null}
        </div>
      ) : null}
=======
import React from "react";

export const MakeATeam = () => {
  return (
    <div>
      <h1>Coming Soon . . .</h1>
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e
    </div>
  );
};
