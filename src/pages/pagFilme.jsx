import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PaginaFilmes(){

    const {id} = useParams();
    const [filmes, setFilmes] = useState([])


    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const apiKey= 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlImg = 'https://image.tmdb.org/t/p/w1280/'
    
    useEffect(() => {

        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch(error => console.log(error))
    
    },[])

    return( 
        <>
        <img src={`${urlImg}${filmes.backdrop_path}`}/>
        <h1> {filmes.title}</h1>
        <p>{filmes.overview}</p>
        </>

    );
}

export default PaginaFilmes