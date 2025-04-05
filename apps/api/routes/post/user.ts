import type { Request, Response } from "express";
import { createUser } from "@app/api/controllers";

export default (req: Request, res: Response) => createUser(req, res);
