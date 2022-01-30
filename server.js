const express = require("express");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const cors = require("cors");

const PORT = process.env.PORT || 8000;
const app = express();

require("./lib/config/mongo")();
require("./lib/config/passport");

const { homeRouter, credentialRouter } = require("./routes");

const sess = {
	secret: "secret",
	cookie: { expires: false },
	resave: false,
	saveUninitialized: true,
	store: MongoStore.create({
		mongoUrl: process.env.MONGODB_URI || "mongodb://localhost:27017/test",
		collection: "sessions",
	}),
};

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.use(credentialRouter);
app.use(homeRouter);

app.listen(PORT, () => {
	console.log(`Express app listen on http://localhost:${PORT}`);
});
