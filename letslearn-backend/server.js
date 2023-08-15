const express = require("express");
const app = express();
const routes = require("./routes/route");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const url2 = "http://localhost:3000";

mongoose
  .connect(
    "mongodb+srv://letslearnteam:Donal%402003@cluster0.tax19wu.mongodb.net/Studentdata?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  });

  

app.use(express.json());
app.use(cors({ credentials: true, origin: url2 }));
app.use(routes);
app.use(cookieParser());
app.listen(5000, () => console.log("Server is running in port 5000"));
