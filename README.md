# FCM Notification with MongoDB Change Stream

This project demonstrates how to send Firebase Cloud Messaging (FCM) notifications using a Node.js server. It leverages MongoDB change streams to listen for specific changes in the database and triggers notifications accordingly.

## Features

1. Uses MongoDB Change Streams to detect changes in a specific collection.

2. Sends push notifications via Firebase Cloud Messaging (FCM) when a change occurs.

3. Implements Express.js for the server.

4. decouple execution from main server. 

## Prerequisites

Node.js (v14 or later)

MongoDB (4.0+ with replica set enabled)

Firebase project with FCM enabled

## Installation

Clone the repository:

```sh
git clone https://github.com/yourusername/fcm-mongo-change-stream.git
cd fcm-mongo-change-stream
```

Install dependencies:

```sh
npm install
```

Set up your environment variables in a .env file:

```ini
MONGO_URI=mongodb://localhost:27017/yourdb?replicaSet=rs0
FIREBASE_SERVER_KEY=your_firebase_server_key
```

Enable MongoDB replica set (if not enabled already):

```sh
mongod --replSet rs0 --bind_ip localhost
```

Then, in the MongoDB shell:

```sh
rs.initiate()
```

## Usage

Start the server:

```sh
npm start
```

The server will listen for changes in the database. When a specific change occurs, it triggers an FCM notification.

## Code Structure

server.js - Main entry point to set up the Express server and MongoDB connection.

db.js - Handles MongoDB connection and change stream setup.

fcmService.js - Responsible for sending push notifications.

.env - Stores environment variables.

## Example Notification Trigger

Assuming you are monitoring a notifications collection, insert a document to test:

```sh
mongo
use yourdb
```

```js
db.notifications.insertOne({ message: "New event occurred", userId: "12345" });
```

This should trigger an FCM notification to the intended users.
