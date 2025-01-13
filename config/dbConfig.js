const { MongoClient } = require('mongodb');
//const mongoose=require("mongoose")

const connectToDB = async() => {
	///by mongoClient
    const client = new MongoClient(process.env.MONGO_SERVER_URL,  { useNewUrlParser: true, useUnifiedTopology: true })
	await client.connect().then(console.log('DB connection successful'))
	return client;
}

module.exports=connectToDB