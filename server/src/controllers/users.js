const User = require('../models/User');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

/**
 * @desc     Get all users
 * @route    GET /api/v1/users
 * @access   Private/Admin
 */
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * @desc     Get single user
 * @route    GET /api/v1/users/:id
 * @access   Private/Admin
 */
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!"
      })
    }

    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  } 
};

/**
 * @desc     Register user
 * @route    POST /api/v1/users/register
 * @access   Public
 */
const registerUser = async (req, res, next) => {
  const { isValid, errors } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  try {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email taken, use another email!'
      })
    }
    const user = await User.create(req.body);
    return res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
};

/**
 * @desc     Login user
 * @route    POST /api/v1/users/login
 * @access   Public
 */
const loginUser = async (req, res, next) => {
  const { isValid, errors } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const user = await User.findById(req.user._id).select('+password');

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect credentials'
      });
    }

    const samePassword = await user.matchPassword(req.body.password);

    if (!samePassword) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect credentials'
      });
    }

    const token = await user.getSignedJwtToken();

    return res.status(200).json({
      success: true, 
      token
    });

  } catch(error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
};

/**
 * @desc     Delete user
 * @route    DELETE /api/v1/users/:id
 * @access   Private/Admin
 */
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!"
      })
    }

    await user.remove();

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
  registerUser,
  loginUser,
  getUser,
  getUsers,
  deleteUser
}
