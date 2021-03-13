const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  geometry: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  price: {
    type: Number,
    required: true
  }, 
  numOfGuests: {
    type: Number,
    required: true
  },
  numOfBeds: {
    type: Number,
    required: true
  },
  numOfBaths: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Listing', ListingSchema);
