import { useEffect, useState } from "react";
import { useSearchParams, useSearchParams } from "react-router-dom";
import MovieCard from ""

const searchurl = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] =useState([])
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results)
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchurl}?${apikey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL)
    }, []);

    return(
        <div className="">
            <h2>Resultados para: <span>{query}</span> </h2>
            <div>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 &&
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
};

export default Search;