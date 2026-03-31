"use client";

import { useEffect } from "react";
import { Game } from "@/features/games/types";

type Props = {
    game: Game;
};

export function GamePlayer({ game }: Props) {
    useEffect(() => {
        const container = document.getElementById("game");

        if (container) {
            container.innerHTML = "";
        }

        // reset global (IMPORTANTE)
        delete window.EJS_player;
        delete window.EJS_core;
        delete window.EJS_gameUrl;

        window.EJS_player = "#game";
        window.EJS_core = game.core;
        window.EJS_gameUrl = game.rom;
        window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
        window.EJS_startOnLoaded = true;

        const script = document.createElement("script");
        script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
        script.async = true;

        document.body.appendChild(script);
    }, [game]);

    return (
        <div className="mt-6 w-full flex justify-center">
            <div
                id="game"
                className="w-full max-w-6xl aspect-video bg-black"
            />
        </div>
    );
}