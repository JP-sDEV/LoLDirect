const express = require("express");
const router = express.Router();

// Parse Reddit RSS feed
const Parser = require("rss-parser");
const parser = new Parser();

const baseURL =
  "https://old.reddit.com/r/esports/search.rss?q=league+of+legends&sort=relevance&restrict_sr=on";

router.get("/", async (req, res) => {
  const page = req.query.page;
  const lastPostID = req.query.lpID;
  try {
    if (page === undefined) {
      const feed = await parser.parseURL(baseURL);

      res.json(feed.items);
    } else if (page !== undefined) {
      const feed = await parser.parseURL(
        baseURL + `&count=${page * 25}&after=${lastPostID}`
      );
      res.json(feed.items);
    }
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
