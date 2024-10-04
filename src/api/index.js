// TMDB API

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzczZTUyNDcxMzkxZGQ2MjFmMmE0MjY0OWY1M2NlYyIsIm5iZiI6MTcyNzcxNzM5MC42NjkzNTIsInN1YiI6IjY1NTRmYWFiZWE4NGM3MTA5NTlkNTQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MJ5U4JipzaWxeUTI0eOykyScatBYizgKnDDRbuwY8nY",
    },
};

fetch("https://api.themoviedb.org/3/authentication", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
