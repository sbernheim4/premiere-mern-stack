/* Declare all your client side routes here so that if the user refreshes the page, the server will send
 * them the HTML file which will allow the react router to then continue handling the request
 */

const express = require('express');
const router = express.Router();
const path = require('path');

const routes = [
	'/',
	'/subpage'
];

router.get("*", (req, res, next) => {
	if (routes.includes(req.url)) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	} else {
		next();
	}
});

module.exports = router;
