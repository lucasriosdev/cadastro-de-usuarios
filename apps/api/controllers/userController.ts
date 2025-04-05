import type { Request, Response } from "express";

import { prisma } from "@app/api/database";

const getUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();

	const parsed = users.map(({ id, email, age, name }) => ({
		id,
		email,
		age: Number(age),
		name,
	}));

	res.status(200).json(parsed);
};

const createUser = async (req: Request, res: Response) => {
	const user = await prisma.user.create({
		data: {
			email: req.body.email,
			age: req.body.age,
			name: req.body.name,
		},
	});

	res.status(200).json(user);
};

const editUser = async (req: Request, res: Response) => {
	const user = await prisma.user.update({
		where: {
			id: req.params.id,
		},
		data: {
			email: req.body.email,
			age: req.body.age,
			name: req.body.name,
		},
	});

	res.status(201).json(user);
};

const deleteUser = async (req: Request, res: Response) => {
	await prisma.user.delete({
		where: {
			id: req.params.id,
		},
	});

	res.status(200).json({ message: "Usuario deletado com exito" });
};

export { getUsers, createUser, editUser, deleteUser };
