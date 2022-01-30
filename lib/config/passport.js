const { User } = require("../../models");
const verify = require("../verify");

const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(
	new LocalStrategy(
		{
			usernameField: "uname",
			passwordField: "passwd",
		},
		(uname, passwd, done) => {
			User.findOne({ uname }, (err, user) => {
				// if (verify(user.passwd, passwd)) {
				// 	console.log(user);
				// }
				if (err) return done(err);
				if (!user) return done(null, false);
				return done(null, user);
			});
		}
	)
);

passport.serializeUser((user, done) => {
	console.log(1);
	done(null, user);
	// done(null, { uname: user.uname, id: user._id.toString() });
});

passport.deserializeUser((user, done) => {
	console.log(2);
	done(null, user);
});
