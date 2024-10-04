import React, { useState } from "react";
import { Link } from "react-router-dom";

function AnimeCard({ name, rating, genreList, id, image, fullScreen = false, val }) {    
    return (
        <div className={`card p-4 bg-white rounded shadow-md`}> 
            <Link to={`/animes/${id}`} className={fullScreen ? ' flex gap-4' : ''}>
                <img
                    src={image}
                    alt="image"
                    className={fullScreen === true ? 'w-1/6 object-contain' : 'object-contain'}
                />
                <div className="flex gap-2 flex-col">
                    <p className="font-medium text-lg ">
                        {!fullScreen ? name : `${name} : ${val.tagline}`}
                    </p>
                    <p>{!rating ? "Rating" : rating.toFixed(1)}</p>
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
