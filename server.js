const express = require("express");
const pgp = require("pg-promise");

const app = express();
const PORT = process.env.PORT || 3000;
const USERNAME = process.env.USERNAME;
console.log(USERNAME);
// const PASSWORD =
// const DBNAME =
// const db = pgp('postgres://john:pass123@localhost:5432/products');

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
