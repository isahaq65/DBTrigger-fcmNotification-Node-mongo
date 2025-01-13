const messaging = require('firebase-admin/messaging')
const connectToDB = require('../config/dbConfig')
const { updateOperation } = require('./pipelines')

const dbWatcher = async () => {
	const client=await connectToDB()
	const database = client.db('notification')
	const collection = database.collection('user')

	//changeStream
	const changeStream = collection.watch()
	changeStream.on('change', (data) => {
		console.log(data)
		 issueNotification(data,token)
	})

	//with pipeline
	// const changeStream = collection.watch(updateOperation)
	// changeStream.on('change', (data) => {
	// 	console.log(data)
	// 	 issueNotification(data )
	// })

	
}

module.exports=dbWatcher