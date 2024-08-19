import { Player as PlayerEntity } from "@prisma/client";
import { Player, PlayerId } from "../domain/player/player";

import prisma from './client';

const toDomainModel = (player: PlayerEntity | null): Player | null => {
  return player ? { ...player, id: player.id as PlayerId } : null;
}

export async function getPlayerById(id: string): Promise<Player | null> {
  return await prisma.player.findUnique({
    where: { id },
  }).then(toDomainModel);
}
