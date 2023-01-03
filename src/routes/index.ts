import { Router } from "express";
import { emailRouter } from "./emailRouter";
import { messageRouter } from "./messageRouter";
import { userRouter } from "./userRoute";

export const routes = Router();

routes.use(messageRouter);
routes.use(emailRouter);
routes.use(userRouter);
