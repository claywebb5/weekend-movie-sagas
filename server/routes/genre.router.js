const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('req.params is:', req.params.id);
  const id = req.params.id;
  
  const query = `select genres.name
  from movies
  join movies_genres
  on movies.id = movies_genres.movie_id
  join genres
  on genres.id = movies_genres.genre_id
  where movies.id = ${id}
  group by movies.title, genres.name;`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

});

module.exports = router;