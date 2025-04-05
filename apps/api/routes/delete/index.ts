import { Router } from "express";
import user from "@app/api/routes/delete/user"

const route = Router();
route.delete("/usuarios/:id", user);

export default route;