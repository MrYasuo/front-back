const passport = require("passport");

module.exports = {
	getHome: (req, res) => {
		res.send("Hi");
	},
	postLogin: (req, res, next) => {
		passport.authenticate("local", (err, user) => {
			if (err) return next(err);
			req.logIn(user, () => {
				console.log("Hi");
			});
		})(req, res, next);
	},
};
