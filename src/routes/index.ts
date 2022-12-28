import { Router } from "express";
import { messageRouter } from "./messageRouter";

export const routes = Router();

routes.use(messageRouter);
