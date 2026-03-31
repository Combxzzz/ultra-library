"use client";

import { useParams, useRouter } from "next/navigation";
import { games } from "@/features/games/data/games";
import { GamePlayer } from "@/features/emulator/GamePlayer";
import { Navbar } from "@/components/Navbar";

export default function GamePage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const game = games.find((g) => g.id === id);

    if (!game) {
        return (
            <div className="bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-800 min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Game Not Found</h1>
                        <p className="text-zinc-300">The requested game could not be found.</p>
                        <button
                            onClick={() => router.push('/')}
                            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                        >
                            Back to Catalog
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-800 min-h-screen flex flex-col relative">
            <Navbar />

            <button
                onClick={() => router.push('/')}
                className="absolute top-20 left-4 z-10 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg transition-all"
            >
                Back to Catalog
            </button>

            <div className="flex-1 flex flex-col justify-center items-center px-4 py-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {game.title}
                </h1>

                <div className="w-full max-w-7xl">
                    <GamePlayer game={game} />
                </div>
            </div>
        </div>
    );
}