import React, { useState } from "react";
import { Link } from "react-router-dom";
import RatingStarImage from "../assets/images/star.png";

function AnimeCard({
    name,
    rating,
    genreList,
    id,
    image,
    fullScreen = false,
    val,
}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    console.log(val);
    

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
                    src={image}
                    alt="image"
                    onLoad={() => setImageLoaded(true)} // Set imageLoaded to true once image is fully loaded
                    className={
                        fullScreen === true
                            ? "w-1/6 object-contain"
                            : "object-contain" +
                              (!imageLoaded ? " hidden" : " block")
                    }
                />
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-medium ">
                        {!fullScreen ? name : `${name} : ${val.tagline}`}
                    </p>
                    <p className="absolute flex items-center gap-2 p-1 text-sm font-bold text-yellow-400 rounded shadow stroke-1 top-6 left-6 drop-shadow bg-neutral-50 stroke-yellow-300">
                        <img className="w-3 h-3" src={RatingStarImage} alt="" />
                        {!rating ? "Rating" : rating.toFixed(1)}
                    </p>
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

export default AnimeCard;
