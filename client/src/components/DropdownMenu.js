import React, { useState } from "react";

export const DropdownMenu = ({ addPlayer, playerInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = state => {
    setIsVisible(!state);
  };
  return (
    <div className="dropDownMenuContainer">
      <button
        className="fantasyCardButtons"
        onClick={() => handleVisible(isVisible)}
      >
        <i class="fas fa-plus-square"></i>{" "}
      </button>
      {isVisible ? (
        <ul>
          <li
            className="dropDownMenuOption"
            onClick={() => addPlayer(playerInfo, "top")}
          >
            Top
          </li>
          <li
            className="dropDownMenuOption"
            onClick={() => addPlayer(playerInfo, "jg")}
          >
            Jungle
          </li>
          <li
            className="dropDownMenuOption"
            onClick={() => addPlayer(playerInfo, "mid")}
          >
            Mid
          </li>
          <li
            className="dropDownMenuOption"
            onClick={() => addPlayer(playerInfo, "adc")}
          >
            ADC
          </li>
          <li
            className="dropDownMenuOption"
            onClick={() => addPlayer(playerInfo, "sup")}
          >
            Sup
          </li>
        </ul>
      ) : null}
    </div>
  );
};
