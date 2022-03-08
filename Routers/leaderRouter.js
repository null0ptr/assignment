const express = require('express')
const router = express.Router()

router.route('/')
	.all((req, res) => {
		res.send(`${req.method} request on Leader router`)
	})
router.route('/:leaderId')
	.get((req, res) => {
		res.send(`GET request on Leader Id = ${req.params.leaderId}`)
	})
	.post((req, res) => {
		res.send(`POST request on Leader Id = ${req.params.leaderId}`)
	})
	.put((req, res) => {
		res.send(`PUT request on Leader Id = ${req.params.leaderId}`)
	})
	.delete((req, res) => {
		res.send(`DELETE request on Leader Id = ${req.params.leaderId}`)
	})
	.all((req, res) => {
		res.send('Invalid Request')
	})

module.exports = router