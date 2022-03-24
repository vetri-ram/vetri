const router = require('express').Router()
const {userControllers} = require('../Controllers/userController');
const auth = require("../Middleware/auth")

router.post('/signup', userControllers.register)

router.post('/signin', auth, userControllers.signin)

module.exports = router