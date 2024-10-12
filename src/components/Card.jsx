import React, { useState } from "react";
import { Link } from "react-router-dom";
import RatingStarImage from "../assets/images/star.png";
import TitleDescription from "./TItleDescription";

function setValues(value, route, fullDetails) {
    console.log(`${typeof value}: ${route}: ${fullDetails}`);

    if (fullDetails) {
        if (route === "movie") {
            return {
                id: value.id,
                title: `${value.title}: ${value.tagline}`,
                description: value.overview,
                image: `https://image.tmdb.org/t/p/original/${value.poster_path}`,
                genre: value.genres,
                budget: value.budget,
                language: value.original_language,
                status: value.status === "Released" ? "Finished" : "Production",
                release_date: value.release_date,
                homepage: value.homepage,
                restricted: value.adult,
                rating: value.vote_average.toFixed(1),
                duration: `${value.runtime} min`,
                cast: [],
                trailer: value.trailer,
                producers: value.producers,
            };
        } else if (route === "anime") {
            let formatedDate = new Date(value.aired.to);

            return {
                id: value.id,
                title: `${value.title_english}: ${value.title}`,
                description: value.synopsis,
                genre: value.genres,
                budget: null,
                language: "Japanese",
                status: value.airing ? "Ongoing" : "Finished",
                release_date: `${formatedDate.getFullYear()}-${formatedDate.getDate()}-${formatedDate.getMonth()}`,
                homepage: value.url,
                restricted: value.rating,
                rating: value.score,
                duration: value.duration,
                cast: [],
                trailer: value.trailer.url,
                image: value.images.jpg.image_url,
                producers: value.producers,
            };
        } else if (route === "series") {
        } else if (route === "book") {
            return {
                id: value.id,
                title: `${value.volumeInfo.title}: ${value.volumeInfo.subtitle}`,
                description: value.volumeInfo.description,
                genre: value.volumeInfo.categories,
                budget: null,
                language: value.volumeInfo.language,
                status: value.airing ? "Ongoing" : "Finished",
                homepage: value.volumeInfo.buyLink,
                restricted: value.volumeInfo.maturityRating,
                rating: value.volumeInfo.averageRating,
                pageCount: value.volumeInfo.pageCount,
                cast: [],
                image: value.volumeInfo.imageLinks.thumbnail,
                authors: value.volumeInfo.authors,
                publisher: value.volumeInfo.publisher
            };
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
                rating: value.volumeInfo.averageRating
                    ? value.volumeInfo.averageRating
                    : 0,
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
    

    if (fullScreen) {
        return (
            <div
                className={`card p-4 bg-white rounded shadow-md relative flex gap-4 items-start`}
            >
                {!imageLoaded && (
                    <div className="w-full h-48 bg-gray-200 animate-pulse" />
                )}
                <img
                    src={cardData.image}
                    alt="image"
                    onLoad={() => setImageLoaded(true)} // Set imageLoaded to true once image is fully loaded
                    className={
                        "w-1/6 object-contain" +
                        (!imageLoaded ? " hidden" : " block")
                    }
                />
                <div className="flex flex-col gap-2">
                    {
                        Object.keys(cardData).map((value, index) => {
                            return <TitleDescription
                            values={cardData[value]}
                            title={value}
                            key={index}
                        />
                        })
                    }
                </div>
            </div>
        );
    }

    return (
        <div className={`card p-4 bg-white rounded shadow-md relative`}>
            <Link
                to={`/${currentRoute}s/${cardData.id}`}
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
                            : "w-full object-contain" +
                              (!imageLoaded ? " hidden" : " block")
                    }
                />
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-medium ">
                        {!fullScreen ? (
                            cardData.title
                        ) : (
                            <TitleDescription
                                values={`${cardData.title} : ${cardData.tagline}`}
                                title={"Name"}
                            />
                        )}
                    </p>
                    <p className="absolute flex items-center gap-2 p-1 text-sm font-bold text-yellow-400 rounded shadow stroke-1 top-6 left-6 drop-shadow bg-neutral-50 stroke-yellow-300">
                        <img className="w-3 h-3" src={RatingStarImage} alt="" />
                        {cardData.rating.toFixed(1)}
                    </p>
                    <TitleDescription
                        title={"Genre"}
                        values={cardData?.genre}
                    />
                    {fullScreen && (
                        <TitleDescription
                            values={cardData.description}
                            title={"Story"}
                        />
                    )}
                </div>
            </Link>
        </div>
    );
}

export default Card;
