import React, { useState } from "react";
import { Link } from "react-router-dom";

function BookCard({ name, rating, genreList, id, fullScreen = false, val }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={`card p-4 bg-white rounded shadow-md relative`}>
            <Link
                to={`/animes/${id}`}
                className={fullScreen ? " flex gap-4" : ""}
            >
                {!imageLoaded && (
                    <div className="w-full h-48 bg-gray-200 animate-pulse" />
                )}
                <img
                    src={val.imageLinks?.thumbnail || "default_image_url"} // Fallback to default image
                    alt={name}
                    className={`w-full object-cover ${
                        !imageLoaded ? "hidden" : "block"
                    }`}
                    onLoad={() => setImageLoaded(true)} // Set imageLoaded to true once image is fully loaded
                />
                <div className="flex gap-2 flex-col">
                    <p className="font-medium text-lg ">
                        {!fullScreen ? name : `${name} : ${val.tagline}`}
                    </p>
                    <p className="shadow absolute top-6 left-6 outline outline-neutral-300 rounded p-1 text-sm font-bold stroke-1 text-neutral-300 ">{!rating ? 0 : rating.toFixed(1)}</p>
                    {genreList &&
                        genreList.map((val, ind) => (
                            <p key={ind}>{val.name}</p>
                        ))}
                    {fullScreen && <p>{val.synopsis}</p>}
                </div>
            </Link>
        </div>
    );
}

export default BookCard;
