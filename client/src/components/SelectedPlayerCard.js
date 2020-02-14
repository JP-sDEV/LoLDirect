import React, { useEffect, Fragment } from "react";

export const SelectedPlayerCard = ({
  playerInfo,
  roleImg,
  selected,
  id,
  removePlayer
}) => {
  const replaceImg = () => {
    if (playerInfo.image_url == " " || playerInfo == null) {
      return "https://cdn.pandascore.co/images/player/image/1134/wewillfailer-hnmreanu.png";
    } else {
      return playerInfo.image_url;
    }
  };

  return (
    <Fragment>
      {playerInfo !== null ? (
        <div className="fantasyCard">
          {/* player image */}
          <div className="fantasyCardImageContainer">
            <img src={roleImg} />
          </div>
          <div className="fantasyCardImageContainer">
            <img src={replaceImg()} />
          </div>
          {/* player info */}
          <div className="fanstasyCardContentContainer">
            <h4>
              {playerInfo.name}, <span>{playerInfo.current_team.acronym}</span>
            </h4>
          </div>
          {selected ? (
            <button
              className="fantasyCardButtons"
              onClick={() => removePlayer(id)}
            >
              <i class="fas fa-minus-square"></i>{" "}
            </button>
          ) : null}{" "}
        </div>
      ) : (
        <div className="fantasyCard">
          {/* player image */}
          <div className="fantasyCardImageContainer">
            <img src={roleImg} />
          </div>
          <div className="fantasyCardImageContainer">
            <img />
          </div>
          {/* player info */}
          <div className="fanstasyCardContentContainer"></div>
          {/* {selected ? <button>remove</button> : <button>add</button>}{" "} */}
        </div>
      )}
    </Fragment>
  );
};
