const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiCreds = process.env.API_CREDS;

const baseURL = "https://api.pandascore.co";
const config = {
  Authorization: `Bearer ${apiCreds}`
};
const handleNulls = require("../../services/handleNulls");

// test route
router.get("/", async (req, res) => {
  res.json("players api route");
});

// get players
router.get("/getPlayers", async (req, res) => {
  try {
    const getPlayers = await axios({
      method: "get",
      url: `${baseURL}/lol/players`,
      headers: config
    });
    res.json(getPlayers.data);
  } catch (err) {
    console.error(err);
  }
});

// search for a player
router.get("/search", async (req, res) => {
  const player = req.query.playerName;
  try {
    const searchPlayers = await axios({
      method: "get",
      url: `${baseURL}/lol/players?search[name]=${player}`,
      headers: config
    });
    var playersData = handleNulls(searchPlayers.data);
    res.json(playersData);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
