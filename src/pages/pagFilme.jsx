import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Recomendacao from "../componentes/Recomendacao/recomendacao"
import { FaStar } from "react-icons/fa";

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
            <main className='bg-neutral-900'>
                <div className="absolute z-20 flex">
                    <div className="pl-11 pt-8">
                <img className="rounded-lg w-[339px] h-[550px]  " src={`${urlImg}${filmes.poster_path}`}></img>
                </div>
                
        </div>

        <div className="absolute z-20 mt-[100px] flex flex-col ml-[450px]">
            <div className="">
            <h1 className="text-white text-[36px] font-bold "> {filmes.title}</h1>
            <div className="flex">
            <p className="text-white text-[18px] pr-[10px]">{filmes.release_date}</p>
            <span className="text-white text-bold pr-[10px]">–</span>
            <p className="text-white text-[18px] pr-[10px]">{filmes.origin_country}</p>
            <span className="text-white text-bold pr-[10px]">–</span>
            <FaStar  className="text-amber-400 mt-[5px]" />
            <p className="text-white text-[18px] pr-[10px]">{filmes.vote_average}</p>
            </div>
            <p className="text-white text-[22px] font-semibold mt-[50px]  ">Sinopse</p>
            <p className="text-white text-[18px] w-11/12 ">{filmes.overview}</p>
            
            
            </div>
            </div>
        

        <div className="w-full h-[623px] bg-cover" style={{backgroundImage: `url(${urlImg}${filmes.backdrop_path})`}}>
            
             <div className=" bg-black w-full h-full opacity-70">
             
             </div>
        </div>
        
        <p className="text-white text-[30px] font-bold ml-[55px] mt-[45px]">Recomendações</p>
        <Recomendacao/>

            
        
        </main>

        <div className="bg-neutral-900">
      <footer className="rounded-t-3xl footer grid grid-cols-2 p-10 bg-base-200 text-base-content bg-zinc-800">
        <aside className='pl-[50px]'>
          <p className='text-violet-500 text-[25px] font-bold mb-[10px]'>CINE<a className='text-amber-400'>LORA</a></p>
          <p className='text-stone-300 text-[15px'>Uma coleção de artigos de todo tipo que abrangem o mundo <p> cinematografico, sejam informativos, resenhas ou apenas uma</p> lista dos atores mais bonitos da última decada.</p>
        </aside> 
        <nav className='text-white text-sm pl-[50px]'>
          <h6 className="footer-title text-[15px] pt-[20px] mb-[10px]">Mais sobre <a className='font-bold'>CINELORA</a></h6> 
          <div className='grid grid-cols-5 text-[17px]'>
            <span><Link to="/">HOME</Link></span>
            <span><Link to='Filmes'>FILMES</Link></span>
            <span><Link to='Blog'>BLOG</Link></span>
            <span><Link to='Contato'>Contato</Link></span>
          </div>
        </nav> 
      </footer>
      </div>

        </>

    );
}

export default PaginaFilmes