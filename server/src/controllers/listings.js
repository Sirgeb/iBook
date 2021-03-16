const Listing = require('../models/Listing');
const validateCreateListingInput = require('../validation/create-listing');

/**
 * @desc     Get all listing
 * @route    GET /api/v1/listings
 * @access   Public
 */
const getListings = async (req, res, next) => {
  try {
    const listings = await Listing.find({});
    return res.status(200).json({
      success: true,
      data: listings
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * @desc     Get single listing
 * @route    GET /api/v1/listings/:id
 * @access   Public
 */
const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found!"
      })
    }

    return res.status(200).json({
      success: true,
      data: listing
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  } 
};

/**
 * @desc     Create listing
 * @route    POST /api/v1/listings
 * @access   Private/Admin
 */
const createListing = async (req, res, next) => {
  const { isValid, errors } = validateCreateListingInput(req.body);
  if (!isValid) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  try {
    req.body.host = req.user._id;
    const listing = await Listing.create(req.body);
    return res.status(201).json({
      success: true,
      data: listing
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
};

/**
 * @desc     Update listing
 * @route    UPDATE /api/v1/listings/:id
 * @access   Private/Admin
 */
const updateListing = async (req, res, next) => {
  const updates = Object.keys(req.body);

  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found!"
      })
    }

    updates.forEach(update => listing[update] = req.body[update]);
    await listing.save();

    return res.status(200).json({
      success: true,
      data: listing
    });
  } catch(error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * @desc     Delete listing
 * @route    DELETE /api/v1/listings/:id
 * @access   Private/Admin
 */
const deleteListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found!"
      })
    }

    await listing.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch(error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  createListing,
  getListing,
  getListings,
  updateListing,
  deleteListing
}
