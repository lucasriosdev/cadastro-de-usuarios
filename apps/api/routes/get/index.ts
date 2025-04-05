import { Router } from "express";
import users from "@app/api/routes/get/users";

const route = Router();
route.get("/usuarios", users);

export default route;
