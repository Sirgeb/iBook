const Favorite = require('../models/Favorite');
const Listing = require('../models/Listing');

// const limit = 10
//   const page = Number(req.query.pageNumber) || 1

//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: 'i',
//         },
//       }
//     : {}

//   const count = await Product.countDocuments({ ...keyword })
//   const products = await Product.find({ ...keyword })
//     .limit(pageSize)
//     .skip(pageSize * (page - 1))

//   res.json({ products, page, pages: Math.ceil(count / pageSize) })

/**
 * @desc     Get logged in user favorites
 * @route    GET /api/v1/favorites/myfavorites
 * @access   Private
 */
 const getMyFavorites = async (req, res, next) => {
  const limit = 10
  const page = Number(req.query.page) || 1;

  try {
    const count = await Favorite.countDocuments();
    const favorites = await Favorite.find({ 
      user: req.user._id 
    }).populate('listing').limit(limit).skip(limit * (page - 1))

    return res.status(200).json({
      success: true,
      data: favorites,
      page, 
      pages: Math.ceil(count / limit)
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * @desc     Add User favorite
 * @route    POST /api/v1/favorites
 * @access   Private
 */
 const addFavorite = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.body.listingId);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found!"
      })
    }

    const isFavorite = await Favorite.findOne({ 
      user: req.user._id, 
      listing: req.body.listingId 
    });

    if (isFavorite) {
      return res.status(401).json({
        success: false,
        message: "Is already a favorite"
      }) 
    }

    const favorite = await Favorite.create({
      listing: req.body.listingId,
      user: req.user._id
    });

    return res.status(200).json({
      success: true,
      data: favorite
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  } 
};

/**
 * @desc     Remove User favorite
 * @route    DELETE /api/v1/favorites/:id
 * @access   Private
 */
 const removeFavorite = async (req, res, next) => {
  try {
    const favorite = await Favorite.findById(req.params.id);

    if (!favorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite not found!"
      })
    }

    await favorite.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  } 
};

module.exports = {
  getMyFavorites,
  addFavorite,
  removeFavorite
}
