import { Router } from "express";
import protectedMsg from "../../middleware/protectedMsg.js";
import { home } from "./home.controller.js";

const homeRouter = Router();

homeRouter.get("/", protectedMsg, home);

export default homeRouter;
