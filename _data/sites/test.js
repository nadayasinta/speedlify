module.exports = {
	name: "Akunbank", // optional, falls back to object key
	description: "Akunbank",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	skip: false,
	urls: [
		"https://app.akunbank.com/login",
		"https://app.akunbank.com/register",
	]
};