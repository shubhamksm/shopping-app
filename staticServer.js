const express = require("express");
const app = express();
const port = 4000;

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
