import type { Request, Response } from "express";
import { getUsers } from "@app/api/controllers";

export default (req: Request, res: Response) => getUsers(req, res);
