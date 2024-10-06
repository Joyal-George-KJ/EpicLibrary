import React from "react";

function Home() {
    return (
        <div className="h-[65svh] flex flex-col justify-center items-center p-4">
            <p className="text-center text-xl font-normal">
                <span className="font-extrabold text-6xl text-neutral-600 capitalize">
                    Welcome to EpicLibrary!
                </span>
            </p>
            <p className="text-center text-2xl font-normal text-neutral-600 capitalize">
                Discover and track your favorite movies, TV series, anime,
                manga, and books all in one place. Easily search and find
                entertainment that suits your interests!
            </p>
        </div>
    );
}

export default Home;
