const express = require('express')
const router = express.Router()
const Dishes = require('./Schemas/dishes')

const getDish = async (req, res) => {
	const Dish = await Dishes.find({})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(Dish)
}
const getDishById = async (req, res) => {
	const Dish = await Dishes.findById(req.params.promoId)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(Dish)
}
const createDish = async (req, res) => {
	const Dish = await Dishes.create(req.body)
	console.log(Dish)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(Dish)
}
const deleteDish = async (req, res) => {
	const response = await Dishes.deleteMany({})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(response)
}
const updateDishById = async (req, res) => {
	const Dish = await Dishes.findByIdAndUpdate(req.params.promoId, {
		$set: req.body
	}, {
		new: true
	})
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(Dish)
}
const deleteDishById = async (req, res) => {
	const response = Dishes.findByIdAndDelete(req.params.promoId)
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.json(response)
}
router.route('/')
	.get((req, res) => {
		getDish(req, res)
	})
	.post((req, res) => {
		createDish(req, res)
	})
	.put((req, res) => {
		res.status(403).send('PUT operation not allowed')
	})
	.delete((req, res) => {
		deleteDish(req, res)
	})
router.route('/:promoId')
	.get((req, res) => {
		getDishById(req, res)
	})
	.post((req, res) => {
		res.status(403).send('POST operation not allowed')
	})
	.put((req, res) => {
		updateDishById(req, res)
	})
	.delete((req, res) => {
		deleteDishById(req, res)
	})
	.all((req, res) => {
		res.send('Invalid Request')
	})

module.exports = router