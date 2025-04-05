import { Router } from "express";
import user from "@app/api/routes/post/user";

const route = Router();
route.post("/usuarios", user);

export default route;