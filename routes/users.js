const express = require('express')
const router = express.Router()

router.post('/register', (req,res,next) => {
	res.send('Register')
})

router.post('/authentication', (req,res,next) => {
	res.send('authentication')
})

router.get('/profile', (req,res,next) => {
	res.send('profile')
})

module.exports = router