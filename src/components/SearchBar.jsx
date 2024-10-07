import React, { useState } from "react";
import SearchButtonImage from "../assets/images/glass.png"

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="flex justify-center">
            <div className="w-full">
                <form
                    className="relative items-center w-full shadow"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert(`?q=${searchQuery}`);
                    }}
                >
                    <input
                        type="text"
                        className="w-full py-2 px-4 rounded-md shadow"
                        placeholder="Search"
                        name="search"
                        id="search"
                    />
                    <button type="submit" className="absolute right-2 top-2">
                        <img src={SearchButtonImage} className="w-6 h-6" alt="" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
