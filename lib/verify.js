const argon2 = require("argon2");

module.exports = async (hash, password) => {
	return argon2.verify(hash, password);
};
