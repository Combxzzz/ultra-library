"use client";

import { games } from "@/features/games/data/games";
import { GameCard } from "@/components/GameCard";
import { Navbar } from "@/components/Navbar";

export default function Home() {
    return (
        <div className="bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-800 min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <div className="flex-1 flex flex-col justify-center items-center px-4 py-12">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Ultra Library
                </h1>
                <p className="text-xl md:text-2xl text-zinc-300 text-center mb-12 max-w-2xl">
                    Discover and play classic retro games in your browser
                </p>

                {/* Games Section */}
                <div className="w-full max-w-7xl flex flex-col items-center">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Featured Games</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {games.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}