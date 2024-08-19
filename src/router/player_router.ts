import type { Request, Response } from "express";
import express from "express";
import { PlayerId } from "../domain/player/player";
import { getPlayer } from "../usecase/player_usecase";

export const playerRouter = express.Router()

playerRouter.get("/:playerId", async (req: Request, res: Response) => {
    const player = await getPlayer(req.params.playerId as PlayerId)
    if (player) {
        res.send(player)
    } else {
        res.status(404).send("Player not found")
    }
});
