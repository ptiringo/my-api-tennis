import type { Request, Response } from "express";
import express from "express";

export const helloRouter = express.Router()

helloRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});
