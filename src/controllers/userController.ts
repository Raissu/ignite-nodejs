import { Request, Response } from "express";
import { CreateUserService } from "../services/users/createUserService";

const createUserService = new CreateUserService();

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const user = await createUserService.execute({
        name,
        email,
        password,
      });

      return res.json(user);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }
}

export { UserController };
