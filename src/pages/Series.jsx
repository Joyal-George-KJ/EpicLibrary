import React, { useEffect, useState } from "react";
import Image from "../assets/images/series.png";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Series() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    // const [genre, setGenre] = useState(null);
    const [loading, setLoading] = useState(true); // To manage loading state
    const [error, setError] = useState(null); // To manage errors

    const apiKey = "5c73e52471391dd621f2a42649f53cec";

    // Fetch data
    const fetchData = async () => {
        try {
            setLoading(true); // Start loading

            const seriesUrl = id
                ? `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`
                : `https://api.themoviedb.org/3/discover/tv?limit=10&api_key=${apiKey}`;

            // const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

            // Fetch both movie and genre data concurrently
            const seriesRes = await fetch(seriesUrl).then((res) => res.json());

            // Set movie data
            setData(id ? seriesRes : seriesRes.results.slice(0, 10));
        } catch (error) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]); // Fetch data when id changes

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
                        Series
                    </span>
                    <p className="text-start text-xl font-normal capitalize">
                        Episodic TV shows, often spanning multiple seasons,
                        offering longer-form storytelling across genres.
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
                        <Card val={val} key={val.id} currentRoute={"series"} />
                    ))
                ) : (
                    <Card val={data} fullScreen={true} currentRoute={"series"} />
                )}
            </div>
        </div>
    );
}

export default Series;
