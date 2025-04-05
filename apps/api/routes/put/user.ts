import type { Request, Response } from "express";
import { editUser } from "@app/api/controllers";

export default (req: Request, res: Response) => editUser(req, res);
