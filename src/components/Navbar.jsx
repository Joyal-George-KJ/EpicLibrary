import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

function Navbar() {
    return (
        <nav className="flex px-8 gap-8 py-4 justify-between h-fit sticky top-0 bg-inherit border-b items-center">
            <div className="flex gap-8">
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
            </div>
            <SearchBar />
        </nav>
    );
}

export default Navbar;
