import React, { useState } from "react";
import { Link } from "react-router-dom";
import RatingStarImage from "../assets/images/star.png";

function getImageLink(imageURL, route) {
    if (route === "movie") {
        return `https://image.tmdb.org/t/p/original/${image}`;
    } else {
        return !imageURL
            ? "https://t4.ftcdn.net/jpg/07/95/29/45/360_F_795294547_gaBzWLhkAYBSz1ZUIZssHhvzGzstNmHK.jpg"
            : imageURL;
    }
}

function setValues(value, route) {
    if (route === "movie") {
        return {
            title: value.title,
            image: `https://image.tmdb.org/t/p/original/${value.image}`,
            description: value.overview,
            genre: value.genres,
            status: value.status === "Released" ? "Finished" : "Production",
            release_date: value.release_date,
            homepage: value.homepage,
            budget: value.budget,
            language: value.original_language,
            restricted: value.adult,
            tagline: value.tagline,
            rating: value.vote_average,
            duration: value.runtime
        }
    }
    else if (route === "anime") {
        return {
            title: value.title_english,
            image: value.images.jpg.image_url,
            description: value.synopsis,
            genre: value.genres,
            status: value.airing ? "Ongoing" : "Finished",
            release_date: value.aired.to,
            homepage: value.url,
            budget: '???',
            language: ["Japanese"],
            restricted: value.rating,
            tagline: value.title,
            rating: value.score,
            duration: value.duration
        }
    }
    else if (route === "series") {
        
    }
    else if (route === "book") {
    
    } else {

    }
}

function Card({
    name,
    rating,
    genreList,
    id,
    image,
    fullScreen = false,
    val,
    currentRoute,
}) {
    const [imageLoaded, setImageLoaded] = useState(false); // Image Loader state
    image = getImageLink(image, currentRoute); // sorting image url

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

export default Card;
