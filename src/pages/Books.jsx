import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import Image from "../assets/images/book.jpg";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";

function Books() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = "AIzaSyDHScsjAMWcn1Ms7-cIHV9oxnmWAHzHTE8";

    const fetchData = async () => {
        try {
            setLoading(true);
            const url = id
                ? `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
                : `https://www.googleapis.com/books/v1/volumes?q=trendingbooks&key=${apiKey}`;
            const res = await fetch(url);
            const json = await res.json();
            setData(id ? json : json.items);
        } catch (err) {
            setLoading(false);
            setError("Failed to load books");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    if(loading) return <Loader />;
    if(error) return <ErrorPage message={error} />;

    return (
        <div className="flex flex-col p-4">
            <Helmet>
                <title>Browse Books | EpicLibrary</title>
                <meta name="description" content="Find popular books and literary works. Read, discover, and explore with EpicLibrary." />
            </Helmet>

            <div className="grid laptop:grid-cols-2 mobile:grid-cols-1 items-center p-4">
                <img src={Image} className="w-full max-w-xs border shadow" alt="Books" />
                <div className="pl-4">
                    <h2 className="text-2xl font-bold text-neutral-800">Books</h2>
                    <p className="text-neutral-600">Explore written works that inspire, educate, and entertain. Fiction and nonfiction across genres.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-center pt-6">Popular Books</h3>
            <div className={`grid gap-4 py-6 ${!Array.isArray(data) ? "grid-cols-1" : "laptop:grid-cols-5 mobile:grid-cols-1"}`}>
                {!loading && !error && Array.isArray(data) ? (
                    data.map(val => (
                        <Card key={val.id} val={val} currentRoute="book" />
                    ))
                ) : (
                    data && <Card val={data} fullScreen={true} currentRoute="book" />
                )}
            </div>
        </div>
    );
}

export default Books;
