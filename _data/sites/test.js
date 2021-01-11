module.exports = {
	name: "Akunbank", // optional, falls back to object key
	description: "Akunbank",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://app.akunbank.com/login",
		"https://app.akunbank.com/register",
		"https://app.akunbank.com/inputEmail",
		"https://app.akunbank.com/otp",
		"https://app.akunbank.com/registerPIN",
		"https://app.akunbank.com/resetPassword",
		"https://app.akunbank.com/bantuan",
		"https://app.akunbank.com/syaratKetentuan",
		"https://app.akunbank.com/kebijakanPrivasi",
	]
};