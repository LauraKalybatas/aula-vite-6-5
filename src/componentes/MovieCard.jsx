
const urlImg = 'https://image.tmdb.org/t/p/w342/'

function MovieCard (movie = true)   {
    return (
        <div className="movie-card  ">
            <img className="absolute w-1/6 h-64 ml-[18px] pt-5" src={`${urlImg}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
        </div>
    )
}

export default MovieCard