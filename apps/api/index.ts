import "dotenv/config";

import express, {
	type Request,
	type Response,
	type NextFunction,
} from "express";
import { address } from "ip";
import { env } from "process";

import All, { Delete, Get, Post, Put } from "@app/api/routes";

const app = express();

const port = Number(env.SERVER_PORT) || 3000;
const message = `http://localhost:${port} or http://${address()}:${port}`;

app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"OPTIONS, HEAD, DELETE, GET, PATCH, POST, PUT"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(All);
app.use(Delete);
app.use(Get);
app.use(Post);
app.use(Put);

// eslint-disable-next-line no-console
app.listen(port, () => console.info("Server is running on", message));
