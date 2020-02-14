import React from "react";
import { PlayerCard } from "../components/PlayerCard";
<<<<<<< HEAD

const samplePlayerInfo = require("../samplePlayers/samplePlayers.json");
=======
const samplePlayerInfo = require("../SampleCard.json");
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e

export const Home = () => {
  const popularTeams = [
    "https://cdn.pandascore.co/images/team/image/1568/funplus-phoenix.png ",
    "https://cdn.pandascore.co/images/team/image/88/g2-esports.png",
    "https://cdn.pandascore.co/images/team/image/390/liquid.png",
    "https://cdn.pandascore.co/images/team/image/126061/t_oscq04.png",
<<<<<<< HEAD
    "https://cdn.pandascore.co/images/team/image/387/team-solomid-bjjwknt9.png"
=======
    "https://cdn.pandascore.co/images/team/image/394/Fnaticlogo-square.png"
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e
  ];
  return (
    <div className="home">
      <div className="homePlayer">
        <h3>Look up League Pros</h3>
<<<<<<< HEAD
        <PlayerCard playerInfo={samplePlayerInfo[2]} />
=======
        <PlayerCard playerInfo={samplePlayerInfo} />
>>>>>>> d1e8c74b99f1dcbb9ce377360c97a63d34983d3e
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
