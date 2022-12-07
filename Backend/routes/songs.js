const express = require('express');

const {
  getSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong  
} = require('../controllers/songs');

const router = express.Router();

router
  .route('/')
  .get(getSongs)
  .post(createSong);

router.route('/:id')
  .get(getSong)
  .put(updateSong)
  .delete(deleteSong);

module.exports = router;