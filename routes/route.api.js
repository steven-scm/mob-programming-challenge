const express = require("express");
const router = new express.Router();

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

router.get('/', (req, res) => {

    res.json(users)
})

module.exports = router;