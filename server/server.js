const express = require('express');
const app = express();
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const PORT = process.env.PORT || 5001;


// ! Setup and configure dotenv to read .env files
require('dotenv').config()

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/favorites', favoriteRouter);
app.use('/api/categories', categoryRouter);
let giphyRouter = require("./routes/giphy.router")
app.use('/api/giphy', giphyRouter)

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
