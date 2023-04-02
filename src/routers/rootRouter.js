import express from "express";
import { home } from "../controllers/musicController";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
