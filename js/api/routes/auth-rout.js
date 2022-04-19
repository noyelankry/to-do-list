const express = require('express')
const router = express.Router()

const AuthController = require('../user-log/auth-controller')

router.post('/register', AuthController.register)

module.exports = router