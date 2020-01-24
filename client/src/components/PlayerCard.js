import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";

export const PlayerCard = ({ playerInfo }) => {
  const history = useHistory();
  const contextValue = useContext(AppContext);
  const topCardInfo = {
    teamLogo: playerInfo.current_team.image_url,
    foreground:
      playerInfo.image_url == " "
        ? "https://cdn.pandascore.co/images/player/image/23438/feeniixz.png"
        : playerInfo.image_url
  };
  const botCardInfo = {
    firstName: playerInfo.first_name,
    IGN: playerInfo.name,
    lastName: playerInfo.last_name,
    teamName: playerInfo.current_team.acronym,
    role: playerInfo.role
  };

  const viewPlayer = async player => {
    try {
      await contextValue.setSelectedPlayer(player);
      history.push(`/Player/${player.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    //   card
    <div className="playerCard">
      {/*
         card top   
         
         PORTRAIT (foreground)
         TEAM LOGO (background)

         */}
      <div className="playerCardTop">
        {/* <h1 className="foreground">test</h1> */}
        <img className="teamLogo" src={topCardInfo.teamLogo} />
        <img className="foreground" src={topCardInfo.foreground} />
      </div>
      {/*
       card bottom

        FIRST IGN LAST
        TEAM | ROLE

       */}
      <div className="playerCardBot">
        <h3>
          {botCardInfo.firstName} "{botCardInfo.IGN}" {botCardInfo.lastName}
        </h3>

        {/* TEAM | ROLE */}
        <p>
          {botCardInfo.role.toUpperCase()} {botCardInfo.teamName}
        </p>
      </div>
      {/* view more */}
      <button
        className="playerCardButton"
        onClick={() => viewPlayer(playerInfo)}
      >
        View More
      </button>
    </div>
  );
};
