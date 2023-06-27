const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://jeelviradiya188:jeelviradiya_mongo@mongo-atlas.r3opsa6.mongodb.net/inotes"
console.log(mongoURI)
// const mongoURI = "mongodb://localhost:27017/inotes"

const connectToMongo = async () => {
	await mongoose.connect(mongoURI)
	console.log(mongoose.connection.readyState)
}
module.exports = connectToMongo