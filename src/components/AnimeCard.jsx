import React, { useState } from "react";
import { Link } from "react-router-dom";

function AnimeCard({ name, rating, genreList, id, image, fullScreen = false, val }) {   
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
        <div className={`card p-4 bg-white rounded shadow-md relative`}> 
            <Link to={`/animes/${id}`} className={fullScreen ? ' flex gap-4' : ''}>
            {
                !imageLoaded && <div className="w-full h-48 bg-gray-200 animate-pulse" />
            }
                <img
                    src={image}
                    alt="image"
                    onLoad={() => setImageLoaded(true)} // Set imageLoaded to true once image is fully loaded
                    className={fullScreen === true ? 'w-1/6 object-contain' : 'object-contain' + (!imageLoaded ? " hidden" : " block") }
                />
                <div className="flex gap-2 flex-col">
                    <p className="font-medium text-lg ">
                        {!fullScreen ? name : `${name} : ${val.tagline}`}
                    </p>
                    <p className="absolute top-6 left-6 drop-shadow rounded p-1 text-sm font-bold stroke-1 text-yellow-200">{!rating ? "Rating" : rating.toFixed(1)}</p>
                    {
                        genreList && genreList.map((val, ind) => <p key={ind}>{val.name}</p>)
                    }
                    {
                        fullScreen && <p>{val.synopsis}</p>
                    }
                </div>
            </Link>
        </div>
    );
}

export default AnimeCard;
