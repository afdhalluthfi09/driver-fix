var admin = require("firebase-admin");

var serviceAccount = require("./e-laundry-driver-firebase-adminsdk-tu4od-7434d213bb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports = admin;