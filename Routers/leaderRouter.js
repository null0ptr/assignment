const express = require('express')
const router = express.Router()
const Leaders = require('./Schemas/leaders')


const getLeader = async (req, res) => {
	const leader = await Leaders.find({})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(leader)
}
const getPromotionById = async (req, res) => {
	const leader = await Leaders.findById(req.params.promoId)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(leader)
}
const createPromotion = async (req, res) => {
	const leader = await Leaders.create(req.body)
	console.log(leader)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(leader)
}
const deletePromotion = async (req, res) => {
	const response = await Leaders.deleteMany({})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(response)
}
const updatePromotionById = async (req, res) => {
	const leader = await Leaders.findByIdAndUpdate(req.params.promoId, {
		$set: req.body
	}, {
		new: true
	})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(leader)
}
const deletePromotionById = async (req, res) => {
	const response = Leaders.findByIdAndDelete(req.params.promoId)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(response)
}
router.route('/')
	.get((req, res) => {
		getLeader(req, res)
	})
	.post((req, res) => {
		createPromotion(req, res)
	})
	.put((req, res) => {
		res.status(403).send('PUT operation not allowed')
	})
	.delete((req, res) => {
		deletePromotion(req, res)
	})
router.route('/:promoId')
	.get((req, res) => {
		getPromotionById(req, res)
	})
	.post((req, res) => {
		res.status(403).send('POST operation not allowed')
	})
	.put((req, res) => {
		updatePromotionById(req, res)
	})
	.delete((req, res) => {
		deletePromotionById(req, res)
	})
	.all((req, res) => {
		res.send('Invalid Request')
	})

module.exports = router