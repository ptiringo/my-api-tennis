import { Player, PlayerId } from "../domain/player/player";
import { getPlayerById } from "../infrastructure/playerDao";

export async function getPlayer(id: PlayerId): Promise<Player | null> {
  return await getPlayerById(id);
}

/**
 * Registers a player.
 *
 * @param id
 * @param firstName
 * @param lastName
 * @param dateOfBirth
 * @returns
 */
export function registerPlayer(
  id: PlayerId,
  firstName: string,
  lastName: string,
  dateOfBirth: Date
): Player {
  const player: Player = {
    id,
    firstName,
    lastName,
    dateOfBirth
  }

  // Save the player to the database.
  // ...

  return player;
}
