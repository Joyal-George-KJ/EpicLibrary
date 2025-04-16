import React from "react";
import { Link } from "react-router-dom";
import { BookOpenCheck, Film, Tv, Search } from "lucide-react";

function Home() {
    return (
        <section className="w-full min-h-[75vh] bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 py-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-800 dark:text-white leading-tight">
                    Welcome to <span className="text-blue-600 dark:text-blue-400">EpicLibrary</span>
                </h1>
                <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                    Track, explore, and enjoy your favorite{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">movies</span>,{" "}
                    <span className="font-semibold text-pink-500 dark:text-pink-400">TV series</span>,{" "}
                    <span className="font-semibold text-green-500 dark:text-green-400">anime</span>,{" "}
                    <span className="font-semibold text-yellow-500 dark:text-yellow-400">manga</span>, and{" "}
                    <span className="font-semibold text-purple-500 dark:text-purple-400">books</span> — all in one epic place!
                </p>

                <div className="laptop:flex mobile:grid justify-center gap-4 mt-6">
                    <Link
                        to="/explore"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
                    >
                        <Search size={20} /> Explore Now
                    </Link>
                    <Link
                        to="/library"
                        className="flex items-center gap-2 bg-white dark:bg-neutral-700 dark:text-white text-blue-600 border border-blue-500 hover:bg-neutral-100 dark:hover:bg-neutral-600 px-6 py-3 rounded-lg shadow transition"
                    >
                        <BookOpenCheck size={20} /> My Library
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;
