// page for individual player

import React, { useContext } from "react";
import { AppContext } from "../AppContext";

export const PlayerInfo = () => {
  const contextValue = useContext(AppContext);
  const {
    selectedPlayer: {
      first_name,
      last_name,
      name,
      image_url,
      birthday,
      nationality,
      role,
      hometown
    }
  } = contextValue;

  const teamInfo = {
    image: contextValue.selectedPlayer.current_team.image_url,
    teamName: contextValue.selectedPlayer.current_team.name,
    acronym: contextValue.selectedPlayer.current_team.acronym
  };
  return (
    <div className="playerInfoPage">
      {/* PROFILE PIC */}
      <div className="desktopPlayerContainer">
        <div className="infoImage">
          <img className="infoTeamImage" src={teamInfo.image} />
          <img className="infoPlayerImage" src={image_url} />
        </div>
        {/* INFO CONTAINER */}
        <div className="infoBox">
          {/* PRIMARY INFO */}
          <div className="infoPrimary">
            <div className="primaryName">
              {" "}
              <h3>{` ${first_name} "${name}" ${last_name}`}</h3>
              <h4>{birthday}</h4>
            </div>

            <div>
              <img
                src={`https://www.countryflags.io/${nationality}/flat/64.png`}
              />
            </div>
          </div>
          {/* SECONDARY INFO */}
          <div className="infoSecondary">
            <ul className="infoList">
              <li>
                Team: {teamInfo.teamName} ({teamInfo.acronym})
              </li>
              <li>Role: {role.toUpperCase()}</li>
              <li>Home Town: {hometown}</li>
            </ul>
          </div>
        </div>
      </div>
      <section>Stats Coming Soon . . .</section>
    </div>
  );
};
