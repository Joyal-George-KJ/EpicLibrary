import React, { useEffect, useState } from "react";
import Image from "../assets/images/anime.jpg";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Anime() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);  // To manage loading state
    const [error, setError] = useState(null);      // To manage errors

    const apiKey = "5c73e52471391dd621f2a42649f53cec";

    // Fetch data
    const fetchData = async () => {
        try {
            setLoading(true);  // Start loading

            const movieUrl = id
                ? `https://api.jikan.moe/v4/anime/${id}`
                : `https://api.jikan.moe/v4/top/anime`;
                
            // Fetch both movie and genre data concurrently
            const movieRes = await fetch(movieUrl).then(res => res.json());

            // Set movie data
            setData(movieRes.data);
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
            <div className="flex items-center p-4 border-b">
                <img src={Image} className="w-1/5 p-2 border shadow" alt="Anime" />
                <div className="pl-4">
                    <span className="text-2xl font-extrabold capitalize text-start text-neutral-600">
                        Anime:
                    </span>
                    <p className="text-xl font-normal capitalize text-start">
                        Animated TV shows and films, primarily from Japan, known for unique art styles and diverse storytelling.
                    </p>
                </div>
            </div>

            {/* Popular Anime */}
            {location.pathname === '/animes' && <p className="pt-4 text-xl font-medium text-center capitalize text-neutral-600">
                Popular Anime
            </p>}

            {/* Card Container */}
            <div className={`card-container py-4 grid  flex-wrap gap-4 justify-center ${!Array.isArray(data) ? 'grid-cols-1' : 'grid-cols-5'}`}>
                {Array.isArray(data) ? (
                    data.map((val) => (
                        <Card
                            val={val}
                            key={val.mal_id}
                            currentRoute={"anime"}
                        />
                    ))
                ) : (
                    <Card
                        val={data}
                        currentRoute={"anime"}
                        fullScreen={true}
                    />
                )}
            </div>
        </div>
    );
}

export default Anime;