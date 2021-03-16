const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCreateListingInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.image = !isEmpty(data.image) ? data.image : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.lat = !isEmpty(data.lat) ? data.lat : '';
  data.lng = !isEmpty(data.lng) ? data.lng : '';
  data.price = !isEmpty(data.price) ? data.price : '';
  data.numOfGuests = !isEmpty(data.numOfGuests) ? data.numOfGuests : '';
  data.numOfBeds = !isEmpty(data.numOfBeds) ? data.numOfBeds : '';
  data.numOfBaths = !isEmpty(data.numOfBaths) ? data.numOfBaths : '';
  data.rating = !isEmpty(data.rating) ? data.rating : '';

  if (!Validator.isLength(data.title, { min: 3, max: 30 })) {
    errors.title = 'Title must be between 3 and 30 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = 'Image field is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  }
  
  if (Validator.isEmpty(data.lat)) {
    errors.lat = 'Lat field is required';
  }

  if (Validator.isEmpty(data.lng)) {
    errors.lng = 'Lng field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  if (Validator.isEmpty(data.numOfGuests)) {
    errors.numOfGuests = 'Number of guests field is required';
  }

  if (Validator.isEmpty(data.numOfBeds)) {
    errors.numOfBeds = 'Number of Beds field is required';
  }

  if (Validator.isEmpty(data.numOfBaths)) {
    errors.numOfBaths = 'Number of Baths field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
