const express = require("express");
const app = express();
const path = require("path");

// const bodyParser = require("body-parser");

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );

app.use("/api/players", require("./routes/api/players"));
app.use("/api/news", require("./routes/api/news"));

app.use(express.static(path.join(__dirname, "client/build")));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`League Fantasy running on port ${PORT}!`));
