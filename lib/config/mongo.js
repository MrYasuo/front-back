const mongoose = require("mongoose");

module.exports = async () => {
	await mongoose
		.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err));
};
