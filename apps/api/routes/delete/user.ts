import type { Request, Response } from "express";
import { deleteUser } from "@app/api/controllers";

export default (req: Request, res: Response) => deleteUser(req, res);
