export function Navbar() {
    return (
        <nav className="w-full bg-black/20 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between shadow-lg border-b border-white/10">
            <div className="flex items-center">
                <img
                    src="/icon.png"
                    alt="Ultra Library Icon"
                    className="w-8 h-8 mr-2"
                />
                <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Ultra Library
                </h1>
            </div>

            <div className="text-sm text-zinc-300">
                Retro Games Collection
            </div>
        </nav>
    );
}