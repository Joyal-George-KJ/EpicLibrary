import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import Card from "../components/Card";
import Image from "../assets/images/anime.jpg";
import { Helmet } from "react-helmet-async";

function Anime() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const url = id
                ? `https://api.jikan.moe/v4/anime/${id}`
                : `https://api.jikan.moe/v4/top/anime`;
            const res = await fetch(url);
            const json = await res.json();
            setData(id ? json.data : json.data);
        } catch (err) {
            setError("Failed to load anime");
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
                <title>Explore Anime | EpicLibrary</title>
                <meta name="description" content="Discover the top-rated anime with EpicLibrary. Find reviews, ratings, and more." />
            </Helmet>

            <div className="grid laptop:grid-cols-2 mobile:grid-cols-1 items-center p-4">
                <img src={Image} className="w-full max-w-xs border shadow" alt="Anime" />
                <div className="pl-4">
                    <h2 className="text-2xl font-bold text-neutral-800">Anime</h2>
                    <p className="text-neutral-600">Discover animated TV shows and films with unique art styles and amazing stories.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-center pt-6">Popular Anime</h3>
            <div className={`grid gap-4 py-6 ${!Array.isArray(data) ? "grid-cols-1" : "laptop:grid-cols-5 mobile:grid-cols-1"}`}>
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && !error && Array.isArray(data) ? (
                    data.map(val => (
                        <Card key={val.mal_id} val={val} currentRoute="anime" />
                    ))
                ) : (
                    data && <Card val={data} fullScreen={true} currentRoute="anime" />
                )}
            </div>
        </div>
    );
}

export default Anime;
