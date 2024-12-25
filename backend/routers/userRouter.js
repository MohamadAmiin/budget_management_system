const express = require('express');
const { registerUser, loginUser, recoverPassword, resetPassword } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
// router.post('/recover-password', recoverPassword);
// router.post('/reset-password', resetPassword);

module.exports = router;
