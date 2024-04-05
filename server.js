const express = require("express");

const mysql = require("mysql2");
const myconn = require("express-myconnection");

const routes = require('./routes')

const app = express();
app.set("port", process.env.PORT || 9000);

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "automatica2905",
  database: "school",
};

//middlewares
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json())
//routes
app.get("/", (req, res) => {
  res.send("Welcome to my app");
});

app.use('/api',routes)

//server
app.listen(app.get("port"), () => {
  console.log("server runnin on port", app.get("port"));
});
