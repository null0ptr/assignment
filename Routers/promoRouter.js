const express = require('express')
const router = express.Router()
const Promotions = require('./Schemas/promotions')

const getPromotion = async (req,res) => {
	const promotion = await Promotions.find({})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(promotion)
}
const getPromotionById = async (req,res) => {
	const promotion = await Promotions.findById(req.params.promoId)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(promotion)
}
const createPromotion = async (req,res) => {
	const promotion = await Promotions.create(req.body)
	console.log(promotion)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(promotion)
}
const deletePromotion = async (req,res) => {
	const response = await Promotions.deleteMany({})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(response)
}
const updatePromotionById = async (req, res) => {
	const promotion = await Promotions.findByIdAndUpdate(req.params.promoId, {
		$set : req.body
	}, {
		new : true
	})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(promotion)
}
const deletePromotionById = async (req, res) => {
	const response = Promotions.findByIdAndDelete(req.params.promoId)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(response)
}
router.route('/')
	.get((req, res) => {
		getPromotion(req,res)
	})
	.post((req,res) => {
		createPromotion(req,res)
	})
	.put((req,res) => {
		res.status(403).send('PUT operation not allowed')
	})
	.delete((req,res) => {
		deletePromotion(req,res)
	})
router.route('/:promoId')
	.get((req, res) => {
		getPromotionById(req,res)
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