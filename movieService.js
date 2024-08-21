import { useState, useEffect } from 'react';

const apiKey = '7c572a9f5b3ba776080330d23bb76e1e';
const urlBase = 'https://api.themoviedb.org/3/movie/';
const urlSearch = 'https://api.themoviedb.org/3/search/movie';

export const useMovie = (id) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`${urlBase}${id}?api_key=${apiKey}&language=pt-BR`)
                .then(response => response.json())
                .then(data => setMovie(data))
                .catch(error => console.error('Error fetching movie:', error));
        }
    }, [id]);

    return movie;
};

export const useMovieSearch = (query) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            fetch(`${urlSearch}?api_key=${apiKey}&language=pt-BR&query=${query}`)
                .then(response => response.json())
                .then(data => setMovies(data.results || []))
                .catch(error => console.error('Error searching movies:', error));
        }
    }, [query]);

    return movies;
};