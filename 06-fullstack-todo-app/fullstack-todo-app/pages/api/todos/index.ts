// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "../../../types";
import { db } from "../../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo | Todo[]>
) {
  if (req.method === "GET") {
    const todos = await db.todo.findMany();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { content } = req.body;
    const todo = await db.todo.create({
      data: { content, status: "active" },
    });
    res.status(200).json(todo);
  }
}
