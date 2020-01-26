import React from "react";
import { PlayerCard } from "../components/PlayerCard";
const samplePlayerInfo = require("../SampleCard.json");

export const Home = () => {
  const popularTeams = [
    "https://cdn.pandascore.co/images/team/image/1568/funplus-phoenix.png ",
    "https://cdn.pandascore.co/images/team/image/88/g2-esports.png",
    "https://cdn.pandascore.co/images/team/image/390/liquid.png",
    "https://cdn.pandascore.co/images/team/image/126061/t_oscq04.png",
    "https://cdn.pandascore.co/images/team/image/394/Fnaticlogo-square.png"
  ];
  return (
    <div className="home">
      <div className="homePlayer">
        <h3>Look up League Pros</h3>
        <PlayerCard playerInfo={samplePlayerInfo} />
      </div>
      <div className="homeTeams">
        {/* Put list of pro teams */}
        <h3>Find Players from the Top Teams</h3>
        <ul>
          {popularTeams.map(team => {
            return (
              <div className="logoContainer" key={team}>
                <img className="teamLogos" src={team} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
