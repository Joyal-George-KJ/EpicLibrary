import React, { useEffect, useState } from "react";
import Image from "../assets/images/anime.jpg";
import AnimeCard from "../components/AnimeCard";
import { useParams } from "react-router-dom";

function Anime() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [genre, setGenre] = useState(null);
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
                
            const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

            // Fetch both movie and genre data concurrently
            const [movieRes, genreRes] = await Promise.all([
                fetch(movieUrl).then((res) => res.json()),
                fetch(genreUrl).then((res) => res.json()),
            ]);

            
            console.log(movieRes);

            // Set movie data
            setData(movieRes.data);
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
            <div className="flex border-b p-4 items-center">
                <img src={Image} className="w-1/5 shadow p-2 border" alt="Anime" />
                <div className="pl-4">
                    <span className="text-start font-extrabold text-2xl text-neutral-600 capitalize">
                        Anime:
                    </span>
                    <p className="text-start text-xl font-normal capitalize">
                        Animated TV shows and films, primarily from Japan, known for unique art styles and diverse storytelling.
                    </p>
                </div>
            </div>

            {/* Popular Anime */}
            <p className="text-center font-medium text-xl text-neutral-600 capitalize pt-4">
                Popular Anime
            </p>

            {/* Card Container */}
            <div className={`card-container py-4 grid  flex-wrap gap-4 justify-center ${!Array.isArray(data) ? 'grid-cols-1' : 'grid-cols-5'}`}>
                {Array.isArray(data) ? (
                    data.map((val) => (
                        <AnimeCard
                            name={val.title_english}
                            rating={val.score}
                            image={val.images.jpg.image_url}
                            id={val.mal_id}
                            val={val}
                            key={val.mal_id}
                        />
                    ))
                ) : (
                    <AnimeCard
                        name={data.title_english}
                        rating={data.score}
                        image={data.images.jpg.image_url}
                        id={id}
                        val={data}
                        fullScreen={true}
                    />
                )}
            </div>
        </div>
    );
}

export default Anime;