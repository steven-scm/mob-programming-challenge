require("dotenv").config();
require("./config/mongodb.js");

const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
//app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

const users = [
    {
        name: "Arthur",
        email:"arth@foo.com",
        favoriteLanguage: "javascript"
    },
    {
        name: "Alexandra",
        email:"alex@foo.com",
        favoriteLanguage: "javascript"
    },
    {
        name: "Steven",
        email:"steven@foo.com",
        favoriteLanguage: "javascript"
    },
];

const images = [
    "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
    "/images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
    "/images/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg"    
];

app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`));