import React from "react";
import { DropdownMenu } from "./DropdownMenu";
export const FantasyCard = ({
  playerInfo,
  selected,
  id,
  removePlayer,
  addPlayer
}) => {
  const replaceImg =
    playerInfo.image_url == " "
      ? "https://cdn.pandascore.co/images/player/image/1134/wewillfailer-hnmreanu.png"
      : playerInfo.image_url;

  return (
    <div className="fantasyCard" value={playerInfo}>
      {/* player image */}
      <div className="fantasyCardImageContainer">
        <img src={replaceImg} />
      </div>
      {/* player info */}
      <div className="fanstasyCardContentContainer">
        <h4>
          {playerInfo.name}, <span>{playerInfo.current_team.acronym}</span>
        </h4>
      </div>

      {selected ? (
        <button className="fantasyCardButtons" onClick={() => removePlayer(id)}>
          <i class="fas fa-minus-square"></i>{" "}
        </button>
      ) : (
        <DropdownMenu addPlayer={addPlayer} playerInfo={playerInfo} />
      )}
    </div>
  );
};
