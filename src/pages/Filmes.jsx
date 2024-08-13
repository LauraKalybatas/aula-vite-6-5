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

                    <input type="search" id="default-search" className="inline-flex w-[1100px] border-white p-2 text-sm rounded-full bg-transparent   border-2 pl-10 border-gray-300  transition-colors  focus:outline-none focus:border-yellow-400 text-white" placeholder="Pesquise por título, gênero, elenco, etc..."/>
                    </div>
                </form>

                <div className=" grid-4 pt-4 relative">
                    {filmes.map(filme => (
                        <>
                            <div className="inline-block  pb-[45px] ml-[50px]">
                                <img className='absolute w-1/6 h-64 ml-[18px]  pt-5' src={`${urlImg}${filme.poster_path}`} alt=""/>
                                <div className="w-56 h-[370px]  w-[240px] overflow-hidden rounded-lg shadow-md bg-zinc-800 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <h1 className="relative font-bold text-center text-white pt-[265px] ml-3 mr-3">{filme.title}</h1>
                                    <div className="text-sm pl-[70px] pt-[17px]">
                                        <Link to={`${filme.id}`} className="text-white font-bold	bg-violet-500 pr-4 pl-4 pt-2 pb-2 rounded-full">Saiba Mais</Link>
                                </div>
                                </div>
                                
                            </div>
                        </>
                    ))}
                </div>
            </main>

            <footer className="footer grid grid-cols-2 p-10 bg-base-200 text-base-content bg-zinc-800">
                <aside>
                <p className='text-violet-500 font-bold'>CINE<a className='text-amber-400'>LORA</a></p>
                <p className='text-white'>Uma coleção de artigos de todo tipo que abrangem o mundo cinematografico, sejam informativos, resenhas ou apenas uma lista dos atores mais bonitos da última decada.</p>
                </aside> 
                <nav className='text-white text-sm'>
                <h6 className="footer-title">Mais sobre <a className='font-bold'>CINELORA</a></h6> 
                <div className='grid grid-cols-4'>
                    <span>BLOG</span>
                    <span>SOBRE</span>
                    <span>TERMOS</span>
                    <span>CONTACT US</span>
                </div>
                </nav> 
            </footer>
        </> 
    )
}


export default Filmes ;
