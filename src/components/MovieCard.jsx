import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ name, rating, genreList, id, image, fullScreen = false, val }) {    
    return (
        <div className={`card p-4 bg-white rounded shadow-md`}> 
            <Link to={`/movies/${id}`} className={fullScreen ? ' flex gap-4' : ''}>
                <img
                    src={`https://image.tmdb.org/t/p/original/${image}`}
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
                        fullScreen && <p>{val.overview}</p>
                    }
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
