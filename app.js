const express = require("express");

const app = express();
const router = require("./router");

// Accept data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);

app.listen(3000, function () {
  console.log("Listening on 3000");
});
