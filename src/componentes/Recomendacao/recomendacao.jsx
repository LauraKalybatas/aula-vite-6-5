import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Recomendacao() {
 
    const [filmes, setFilmes] = useState([])

    const apiKey= 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {

    fetch(`${urlBase}popular?${apiKey}`)
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(error => console.log(error))

    },[])

    return ( 
        <>
            <main className="bg-neutral-900">
                
                
     
            <div className="pl-[30px] pr-[30px]  flex flex-row overflow-x-scroll pt-4 relative pb-[90px]">
          {
                filmes.map(filme => (
                  <>
                    <div className="inline-block px-4 ">
                    <Link to={`${filme.id}`} >
                      <div className="inline-block pt-4">

                      
                        <img className='absolute w-[250px] h-[180px] ml-[18px] mr-[18px]  pt-5' src={`${urlImg}${filme.backdrop_path}`} alt="" />
                        <div className=" h-[230px]  w-[290px]  overflow-hidden rounded-lg bg-zinc-800 shadow-none hover:shadow-violet-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                           <h1 className="relative font-bold text-center text-white text-[17px] pt-[190px] ml-3 mr-3">{filme.title}</h1>
                          <div className="text-sm pl-[70px] pt-[17px]">
                         
                        </div>
                        </div>
                        </div>
                        </Link>
                    </div>

                </>
                ))}
          </div>


              
            </main>


        </> 
    )
}


export default Recomendacao ;
