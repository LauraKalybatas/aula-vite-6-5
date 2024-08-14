import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Filmes() {
 
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
                <h1 className="font-bold text-white text-[28px] pt-5 pl-[52px]">A biblioteca completa de informações <p>dos filmes disponíveis no <a className="text-violet-500">Cine</a><a className="text-amber-400">Lora</a></p></h1>
                
                <form className=" mx-12 mt-4 mb-10">   

                    <div className="relative">

                    <input type="search" id="default-search" className="inline-flex w-[1100px] border-white p-2 text-sm rounded-full bg-transparent   border-2 pl-10  transition-colors  focus:outline-none focus:border-yellow-400 text-white" placeholder="Pesquise por título, gênero, elenco, etc..."/>
                    </div>
                </form>

                <div className=" grid-4 pt-4 relative">
                    {filmes.map(filme => (
                        <>
                            <div className="inline-block  pb-[45px] ml-[50px]">
                                <img className='absolute w-1/6 h-64 ml-[18px] pt-5' src={`${urlImg}${filme.poster_path}`} alt=""/>
                                <div className="h-[370px]  w-[240px] overflow-hidden rounded-lg bg-zinc-800 hover:shadow-amber-500 shadow-[10px_10px_10px_10px] duration-300 ease-in-out">
                                    <h1 className="relative font-bold text-center text-white pt-[265px] ml-3 mr-3">{filme.title}</h1>
                                    <div className="text-sm pl-[70px] pt-[17px]">
                                        <Link to={`${filme.id}`} className="text-white font-bold	bg-violet-500 pr-4 pl-4 pt-2 pb-2 rounded-full">Saiba Mais</Link>
                                </div>
                                </div>
                                
                            </div>
                        </>
                    ))}
                </div>

                <div className="grid grid-cols-4 mt-10 pb-20 gap-16">
            {
                filmes.map(filme => (
                    <Link to={`${filme.id}`} key={filme.id}>
                     
                          
                            <div className="inline-block  pb-[45px] ml-[50px]">
                                <img className='absolute w-1/6 h-64 ml-[18px] pt-5' src={`${urlImg}${filme.poster_path}`} alt=""/>
                                </div>
                                <div className=" duration-300  flex flex-col hover:shadow-[rgba(255,194,1)_10px_5px_4px_0px] h-[340px]  w-[240px] overflow-hidden rounded-lg bg-zinc-800 ">
                                <h1 className="relative font-bold text-center text-white pt-[265px] ml-3 mr-3">{filme.title}</h1>
                                </div>
                        
                       
                    </Link>
                ))
            }
            </div>
            </main>

            <footer className="grid grid-cols-2 p-10  text-base-content bg-zinc-800">
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
            <span><Link to='Favorito'>FAVORITOS</Link></span>
          </div>
        </nav> 
      </footer>
        </> 
    )
}


export default Filmes ;
