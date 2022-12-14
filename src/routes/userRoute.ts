import { Router } from "express";
import { UserController } from "../controllers/userController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/users/create", userController.create);

export { userRouter };
