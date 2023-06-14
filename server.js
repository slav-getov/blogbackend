const express = require("express");
const pgp = require("pg-promise")();

const app = express();
const PORT = process.env.PORT || 3000;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DBNAME = process.env.DBNAME;
const db = pgp(`postgres://${USERNAME}:${PASSWORD}/${DBNAME}`);
//connection works
function getDbName() {
  return db.$cn;
}
app.get("/", async (req, res) => {
  //this line now works. Ofc we will not return full db info because now a simple curl gets it.
  //res.send(getDbName());
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
