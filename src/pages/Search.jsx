import { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import MovieCard from "../componentes/MovieCard"

const searchurl = 'https://api.themoviedb.org/3/search/movie'
const apikey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'



const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] =useState([])
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        console.log(url)
        const res = await fetch(url);
        const data = await res.json();

        
        setMovies(data.results)
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchurl}?${apikey}&query=${query}`;
        console.log(searchWithQueryURL)


        getSearchedMovies(searchWithQueryURL)
    }, [query]);

    return(
        <div className="">
            <h2>Resultados para: <span>{query}</span> </h2>
            <div>
                {/* {movies.length === 0 && <p>Carregando...</p>} */}
                {/* {movies.length > 0 && */}
                 {   movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
};

export default Search;