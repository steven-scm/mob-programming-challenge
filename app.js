require("dotenv").config();
require("./config/mongodb.js");

const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
//app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");


// Added require

app.use('/', require("./routes/routesIndex"));
app.use('/api/ironhackers', require("./routes/route.api.js"));

app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`));
