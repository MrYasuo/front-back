const mongoose = require("mongoose");

module.exports = mongoose.model(
	"User",
	new mongoose.Schema({
		uname: String,
		passwd: String,
	})
);
