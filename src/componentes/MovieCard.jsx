
const urlImg = 'https://image.tmdb.org/t/p/w342/'



const MovieCard = (movie = true) => {
    return (
        <div className="movie-card">
            <img src={urlImg + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
        </div>
    )
}

export default MovieCard