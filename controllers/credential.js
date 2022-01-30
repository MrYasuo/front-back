module.exports = {
	postCredential: (req, res) => {
		console.log(req.headers.cookie);
		res.send({ message: "Hello" });
	},
};
