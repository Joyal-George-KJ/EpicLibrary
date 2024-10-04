import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="max-w-screen min-h-screen bg-neutral-300">
            <nav className="flex gap-8 p-4 pr-8 pt-6 justify-center h-fit sticky top-0 bg-inherit border-b">
                <Link className="font-medium text-lg text-neutral-700" to={"/"}>
                    Home
                </Link>
                <Link
                    className="font-medium text-lg text-neutral-700"
                    to={"/animes"}
                >
                    Anime
                </Link>
                <Link
                    className="font-medium text-lg text-neutral-700"
                    to={"/movies"}
                >
                    Movie
                </Link>
                <Link
                    className="font-medium text-lg text-neutral-700"
                    to={"/series"}
                >
                    Series
                </Link>
                <Link
                    className="font-medium text-lg text-neutral-700"
                    to={"/books"}
                >
                    Book
                </Link>
            </nav>
            <div className="px-4 h-4/6 *:text-neutral-800">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Layout;
