const express = require("express");
const pgp = require("pg-promise")();

const app = express();
const PORT = process.env.PORT || 3000;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DBNAME = process.env.DBNAME;
const db = pgp(`postgres://${USERNAME}:${PASSWORD}@localhost:5432/${DBNAME}`);

app.get("/", async (req, res) => {
  res.send("Hello World!");
  db.one("SELECT $1 AS value", 123)
    .then((data) => {
      console.log("DATA:", data.value);
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
