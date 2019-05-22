import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.all("/", (req: Request, _res: Response, next: NextFunction) => {
	console.log(`${req.method} for ${req.url}`);
	next();
});

router.get("*", function (_req: Request, res: Response) {
	res.json({
		"Name": "Samuel"
	});
});

export default router;
