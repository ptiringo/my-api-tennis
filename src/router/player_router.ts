import type { Request, Response } from "express";
import express from "express";

export const playerRouter = express.Router()

playerRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});
