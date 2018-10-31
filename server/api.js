const express = require('express');
const router = express.Router();

router.all("/", (req, res, next) => {
	console.log(`${req.method} for ${req.url}`);
	next();
});

router.get("*", function (req, res) {
	res.json({
		"Name": "Samuel"
	});
});

module.exports = router;
