const express = require('express');
const router = express.Router();

const { 
  getListing, 
  getListings, 
  createListing, 
  updateListing, 
  deleteListing
} = require('../controllers/listings');

const { 
  admin, 
  protect 
} = require('../middlewares/auth')

router.route('/')
  .get(getListings)
  .post(protect, admin, createListing)

router.route('/:id')
  .get(getListing)
  .put(protect, admin, updateListing)
  .delete(protect, admin, deleteListing)

module.exports = router;
