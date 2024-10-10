import React, { useState } from "react";
import { Link } from "react-router-dom";
import RatingStarImage from "../assets/images/star.png";

function setValues(value, route, fullDetails) {
    console.log(`${typeof value}: ${route}: ${fullDetails}`);
    
    if (fullDetails) {
        if (route === "movie") {
            return {
                id: value.id,
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
                duration: value.runtime,
                cast: [],
                trailer: value.trailer,
                producers: value.producers,
            };
        } else if (route === "anime") {
            return {
                id: value.id,
                title: value.title_english,
                image: value.images.jpg.image_url,
                description: value.synopsis,
                genre: value.genres,
                status: value.airing ? "Ongoing" : "Finished",
                release_date: value.aired.to,
                homepage: value.url,
                budget: "???",
                language: ["Japanese"],
                restricted: value.rating,
                tagline: value.title,
                rating: value.score,
                duration: value.duration,
                cast: [],
                trailer: value.trailer.url,
                producers: value.producers,
            };
        } else if (route === "series") {
        } else if (route === "book") {
        } else {
        }
    } else {
        if (route === "movie") {
            return {
                id: value.id,
                title: value.title,
                image: `https://image.tmdb.org/t/p/original/${value.poster_path}`,
                rating: value.vote_average,
            };
        } else if (route === "anime") {
            return {
                id: value.mal_id,
                title: value.title_english,
                image: value.images.jpg.image_url,
                rating: value.score,
            };
        } else if (route === "series") {
            return {};
        } else if (route === "book") {
            return {
                id: value.id,
                title: value.volumeInfo.title,
                image: value.volumeInfo.imageLinks.smallThumbnail,
                rating: value.volumeInfo.averageRating,
            };
        } else {
            return {};
        }
    }
}

function Card({ fullScreen = false, val, currentRoute }) {
    const [imageLoaded, setImageLoaded] = useState(false); // Image Loader state
    let cardData = setValues(val, currentRoute, fullScreen); // sorting incomming data
    console.log(cardData);
    

    return (
        <div className={`card p-4 bg-white rounded shadow-md relative`}>
            <Link
                to={`/animes/${cardData.id}`}
                className={fullScreen ? " flex gap-4" : ""}
            >
                {!imageLoaded && (
                    <div className="w-full h-48 bg-gray-200 animate-pulse" />
                )}
                <img
                    src={cardData.image}
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
                        {!fullScreen
                            ? cardData.title
                            : `${cardData.title} : ${cardData.tagline}`}
                    </p>
                    <p className="absolute flex items-center gap-2 p-1 text-sm font-bold text-yellow-400 rounded shadow stroke-1 top-6 left-6 drop-shadow bg-neutral-50 stroke-yellow-300">
                        <img className="w-3 h-3" src={RatingStarImage} alt="" />
                        {cardData.rating.toFixed(1)}
                    </p>
                    {fullScreen && cardData?.genre.map((val, ind) => (
                        <p key={ind}>{val.name}</p>
                    ))}

                    {fullScreen && <p>{cardData.description}</p>}
                </div>
            </Link>
        </div>
    );
}

export default Card;
