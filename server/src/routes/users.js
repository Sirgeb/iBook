const express = require('express');
const router = express.Router();

const { 
  getUser, 
  getUsers, 
  registerUser, 
  deleteUser,
  loginUser,
  socialLogin
} = require('../controllers/users');

const { 
  admin, 
  protect 
} = require('../middlewares/auth')

router.route('/')
  .get(protect, admin, getUsers)

router.route('/:id')
  .get(protect, admin, getUser)
  .delete(protect, admin, deleteUser)

router.route('/login')
  .post(loginUser)

router.route('/social-login')
  .post(socialLogin)

router.route('/register')
  .post(registerUser)

module.exports = router;
