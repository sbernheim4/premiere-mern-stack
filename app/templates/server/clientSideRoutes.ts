/* Declare all your client side routes here so that if the user refreshes the page, the server will send
 * them the HTML file which will allow the react router to then continue handling the request
 */

import { Router } from 'express';
import { join } from 'path';
const router = Router();

const routes = [
	'/',
	'/subpage'
];

router.get("*", (req, res, next) => {
	if (routes.includes(req.url)) {
		res.sendFile(join(__dirname, '../public/index.html'));
	} else {
		next();
	}
});

export default router;

