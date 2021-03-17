const express = require('express');
const router = express.Router();

const { 
  addFavorite,
  removeFavorite,
  getMyFavorites
} = require('../controllers/favorites');

const {  
  protect 
} = require('../middlewares/auth')

router.route('/')
  .post(protect, addFavorite)

router.route('/myfavorites')
  .get(protect, getMyFavorites)

router.route('/:id')
  .delete(protect, removeFavorite)

module.exports = router;
