const express = require('express');
const { requestPasswordReset, resetPassword } = require('../controllers/passwordController');

const router = express.Router();

// Request password reset
router.post('/request-reset', requestPasswordReset);

// Reset password
router.post('/reset', resetPassword);

module.exports = router;
