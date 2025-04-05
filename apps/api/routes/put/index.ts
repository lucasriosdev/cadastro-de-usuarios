import { Router } from "express";
import user from "@app/api/routes/put/user";

const route = Router();
route.put("/usuarios/:id", user);

export default route;
