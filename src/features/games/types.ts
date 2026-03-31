export type GameCore = "nes" | "snes" | "gb" | "gba" | "n64";

export interface Game {
    id: string;
    title: string;
    description?: string;
    core: GameCore;
    rom: string;
    cover: string;
}