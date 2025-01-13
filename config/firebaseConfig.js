const admin = require("firebase-admin");

const serviceAccount = require("./../ulala-4c2ac-firebase-adminsdk-qlxbc-c6f0459129.json");

module.exports = () => {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount)
	  });
}
