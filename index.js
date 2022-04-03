require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const connectDatabase = require('./dbConnect')
const PORT = (process.env.PORT || 3000)
connectDatabase()
app.use(express.urlencoded({
	extended: "false"
}))
app.use(express.json())
app.use('/dishes',require('./Routers/dishRouter'))
app.use('/promotions',require('./Routers/promoRouter'))
app.use('/leader',require('./Routers/leaderRouter'))
app.all('/', (req, res) => {
	res.send('Index Page')
})
mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB')
	app.listen(PORT, () => {
		console.log(`Server running on PORT ${PORT}`)
	})
})