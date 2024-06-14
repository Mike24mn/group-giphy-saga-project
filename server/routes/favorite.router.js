const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  const gifToAdd = req.body
  console.log(`POST /feedback req.body:`, req.body)
const sqlText = `
INSERT INTO "favorites"
("giphy_id", "title", "url", "category_id")
VALUES
($1, $2, $3, $4);
`
const sqlValues = [req.body.giphy_id, req.body.title, req.body.url, req.body.category_id]

pool.query(sqlText, sqlValues)
.then((dbRes) => {
  res.sendStatus(201);
})
.catch((dbErr) => {
  console.log(`Error adding new gif`, dbErr);
  res.sendStatus(500);
});
})


// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;