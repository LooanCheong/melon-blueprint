import express from "express";
import { watch } from "../controllers/musicController";

const musicRouter = express.Router();

musicRouter.get("/:id(\\d+)", watch);

export default musicRouter;
