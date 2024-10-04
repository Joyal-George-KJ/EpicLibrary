import React, { useEffect, useState } from "react";
import Image from "../assets/images/movie.jpg";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";

function Movie() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [genre, setGenre] = useState(null);
    const [loading, setLoading] = useState(true);  // To manage loading state
    const [error, setError] = useState(null);      // To manage errors

    const apiKey = "5c73e52471391dd621f2a42649f53cec";

    console.log(id);
    
    // Fetch data
    const fetchData = async () => {
        try {
            setLoading(true);  // Start loading

            const movieUrl = id
                ? `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
                : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
                
            const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

            // Fetch both movie and genre data concurrently
            const [movieRes, genreRes] = await Promise.all([
                fetch(movieUrl).then((res) => res.json()),
                fetch(genreUrl).then((res) => res.json()),
            ]);

            console.log(movieRes)
            // Set movie data
            setData(id ? movieRes : movieRes.results);
            setGenre(genreRes.genres);
        } catch (error) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);  // End loading
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);  // Fetch data when id changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col p-4">
            {/* Anime Information */}
            <div className="flex border-b py-4 items-center">
                <img
                    src={Image}
                    className="w-1/5 shadow p-2 border"
                    alt="Anime"
                />
                <div className="pl-4">
                    <span className="text-start font-extrabold text-2xl text-neutral-600 capitalize">
                        Movies
                    </span>
                    <p className="text-start text-xl font-normal capitalize">
                        Feature-length films that tell stories through motion
                        pictures, spanning various genres and styles.
                    </p>
                </div>
            </div>

            {/* Popular Anime */}
            <p className="text-center font-medium text-xl text-neutral-600 capitalize pt-4">
                Popular Anime
            </p>

            {/* Card Container */}
            <div
                className={`card-container py-4 grid  flex-wrap gap-4 justify-center ${
                    !Array.isArray(data) ? "grid-cols-1" : "grid-cols-5"
                }`}
            >
                {Array.isArray(data) ? (
                    data.map((val) => (
                        <MovieCard
                            name={val.title}
                            rating={val.vote_average}
                            image={val.poster_path}
                            id={val.id}
                            val={val}
                            key={val.id}
                        />
                    ))
                ) : (
                    <MovieCard
                        name={data.title}
                        rating={data.vote_average}
                        image={data.poster_path}
                        id={id}
                        val={data}
                        fullScreen={true}
                    />
                )}
            </div>
        </div>
    );
}

export default Movie;
