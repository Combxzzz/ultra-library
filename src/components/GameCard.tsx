import { useRouter } from "next/navigation";
import { Game } from "@/features/games/types";

export function GameCard({ game }: { game: Game }) {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/game/${game.id}`)}
            className="group cursor-pointer w-48 h-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
            <div className="w-full h-48 relative overflow-hidden">
                <img
                    src={game.cover}
                    alt={game.title}
                    className="object-contain w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 h-16 flex items-center justify-center">
                <p className="text-center text-white font-medium text-sm line-clamp-2">
                    {game.title}
                </p>
            </div>
        </div>
    );
}