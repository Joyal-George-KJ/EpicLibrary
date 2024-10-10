import React, { useEffect, useState } from "react";
import Image from "../assets/images/book.jpg";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import Card from "../components/Card";

function Books() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [genre, setGenre] = useState(null);
    const [loading, setLoading] = useState(true); // To manage loading state
    const [error, setError] = useState(null); // To manage errors

    const apiKey = "AIzaSyDHScsjAMWcn1Ms7-cIHV9oxnmWAHzHTE8";

    // Fetch data
    const fetchData = async () => {
        try {
            setLoading(true); // Start loading

            const movieUrl = id
                ? `https://api.jikan.moe/v4/anime/${id}`
                : `https://www.googleapis.com/books/v1/volumes?q=trendingbooks&${'key=' + apiKey}`;

                console.log(movieUrl);
                

            // const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

            // Fetch both movie and genre data concurrently
            const movieRes = await fetch(movieUrl).then((res) => res.json())

            console.log(movieRes.items[1]);

            // Set movie data
            setData(movieRes.items);
            // setGenre(genreRes.genres);
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
            <div className="flex border-b p-4 items-center">
                <img
                    src={Image}
                    className="w-1/5 shadow p-2 border"
                    alt="Anime"
                />
                <div className="pl-4">
                    <span className="text-start font-extrabold text-2xl text-neutral-600 capitalize">
                        Books
                    </span>
                    <p className="text-start text-xl font-normal capitalize">
                        Written works of fiction or non-fiction, offering
                        knowledge, stories, and imagination across many genres.
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
                        <Card
                            val={val}
                            key={val.id}
                            currentRoute={"book"}
                        />
                    ))
                ) : (
                    <Card
                        val={data}
                        currentRoute={"book"}
                        fullScreen={true}
                    />
                )}
            </div>
        </div>
    );
}

export default Books;
