const express = require("express");
const app = express();
const path = require("path");

app.use("/api/players", require("./routes/api/players"));
app.use("/api/news", require("./routes/api/news"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // sett static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(express.static(path.join(__dirname, "client/build")));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`League Fantasy running on port ${PORT}!`));
