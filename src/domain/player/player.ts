import { newtype } from "../util"

/**
 * A newtype for player IDs.
 */
export type PlayerId = newtype<'PlayerId', string>

/**
 * Wraps a string in a PlayerId.
 * @param value The value to wrap in a PlayerId.
 * @returns The PlayerId.
 */
export function PlayerId(value: string): PlayerId {
    return value as PlayerId
}

/**
 * A player.
 */
export interface Player {
    id: PlayerId
    firstName: string
    lastName: string
    dateOfBirth: Date
}