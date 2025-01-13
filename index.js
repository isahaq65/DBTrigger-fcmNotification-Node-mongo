const express = require('express')
const User = require('./model/User');
const connectToDB = require('./config/dbConfig');
const dbWatcher = require('./notification/dbWatcher');
require("dotenv").config();
const app = express()
const router = require("express").Router();
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL 


//connect for user api checking
const client=  connectToDB()


//db watcher 
 dbWatcher()

app.use(express.json({ extende: false }));

app.post('/user', async (req, res) => { 
	const body = req.body
	console.log('ff', body)
	await client.db('notification').collection('user').insertOne({
		name:"isahaq"
	})

 })

app.listen(PORT, () => {
	console.log(`Server is running on http://${BASE_URL}:${PORT}`)
})