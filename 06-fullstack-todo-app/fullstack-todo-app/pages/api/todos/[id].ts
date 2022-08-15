// @ts-nocheck
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "../../../types";
import { db } from "../../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo | Todo[]>
) {
  const { id } = req.query;
  if (req.method === "GET") {
    const todo = await db.todo.findFirst({ where: { id } });
    res.status(200).json(todo);
  } else if (req.method === "PUT") {
    const { content, status } = req.body;
    const todo = await db.todo.update({
      where: { id },
      data: {
        content,
        status,
      },
    });
    res.status(200).json(todo);
  } else if (req.method === "DELETE") {
    const todo = await db.todo.delete({ where: { id } });
    res.status(200).json(todo);
  }
}
