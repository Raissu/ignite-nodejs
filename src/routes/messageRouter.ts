import { response, Router } from "express";

export const messageRouter = Router();

messageRouter.get("/cursos/", (request, response) => {
  return response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3",
    "Curso 4",
    "Curso 5",
    "Curso 10",
  ]);
});

messageRouter.get("/alunos/", (request, response) => {
  const query = request.query;
  console.log(query);
});

messageRouter.post("/alunos/", (request, response) => {
  const body = request.body;
  console.log(body);
});
