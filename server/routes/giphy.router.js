const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get("/", (req, res) => {

    axios.get(`api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=5&q=cats`)
        .then((response) => {
           console.log("RESPONSE DATA:", response.data);
            // console.log("successfully touched /api/giphy");
            // console.log("SEARCH GIPHY", response.data);
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('/api/giphy/ is broken', error);
            res.sendStatus(500)
        })

})

module.exports = router