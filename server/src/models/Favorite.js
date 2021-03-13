const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  listing: {
    type: mongoose.Schema.ObjectId,
    ref: 'Listing',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
