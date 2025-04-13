import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import Image from "../assets/images/movie.jpg";
import { Helmet } from "react-helmet-async";

function Movie() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = "5c73e52471391dd621f2a42649f53cec";

    const fetchData = async () => {
        try {
            setLoading(true);
            const url = id
                ? `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
                : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
            const res = await fetch(url);
            const json = await res.json();
            setData(id ? json : json.results.slice(0, 10));
        } catch (err) {
            setError("Failed to load movies");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div className="flex flex-col p-4">
            <Helmet>
                <title>Top Movies | EpicLibrary</title>
                <meta name="description" content="Explore trending movies and blockbusters. Ratings, reviews, and more on EpicLibrary." />
            </Helmet>

            <div className="grid laptop:grid-cols-2 mobile:grid-cols-1 items-center p-4">
                <img src={Image} className="w-full max-w-xs border shadow" alt="Movies" />
                <div className="pl-4">
                    <h2 className="text-2xl font-bold text-neutral-800">Movies</h2>
                    <p className="text-neutral-600">Blockbusters, indie films, and everything in between. Discover what’s hot in cinema.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-center pt-6">Popular Movies</h3>
            <div className={`grid gap-4 py-6 ${!Array.isArray(data) ? "grid-cols-1" : "laptop:grid-cols-5 mobile:grid-cols-1"}`}>
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && !error && Array.isArray(data) ? (
                    data.map(val => (
                        <Card key={val.id} val={val} currentRoute="movie" />
                    ))
                ) : (
                    data && <Card val={data} fullScreen={true} currentRoute="movie" />
                )}
            </div>
        </div>
    );
}

export default Movie;
