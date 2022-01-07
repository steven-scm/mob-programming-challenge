const express = require("express");
const router = new express.Router();

const users = [
    {
        name: "Arthur",
        email: "arth@foo.com",
        favoriteLanguage: "javascript"
    },
    {
        name: "Alexandra",
        email: "alex@foo.com",
        favoriteLanguage: "javascript"
    },
    {
        name: "Steven",
        email: "steven@foo.com",
        favoriteLanguage: "javascript"
    },
];

const images = [
    "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
    "/images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
    "/images/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg"
];

router.get('/', (req, res, next) => {
    res.render("../views/home.hbs", { images });
})

router.get('/my-dev-squad', (req, res, next) => {
    res.render("../views/my-dev-squad.hbs",
        { users });
})

router.get('/add-new-ironhacker', (req, res, next) => {
    res.render("../views/add-new-ironhacker.hbs");
})

module.exports = router;