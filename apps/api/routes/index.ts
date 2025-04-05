import { Router, type Request, type Response } from "express";

import Delete from "@app/api/routes/delete";
import Get from "@app/api/routes/get";
import Post from "@app/api/routes/post";
import Put from "@app/api/routes/put";

const router = Router();

router.all("/", (req: Request, res: Response) => {
  res.status(404).json({
    code: 404,
    message: "This is the main route; if you want to make a request or modification, you must call the route correctly.",
  });
});

export default router;
export { Delete, Get, Post, Put };