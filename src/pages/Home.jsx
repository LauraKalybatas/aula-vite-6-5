import data from '../../artigos.json'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Home() {
  console.log(data)
  

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

  return(
    <>
      <main className="bg-zinc-900">
          <div className='size-full relative'>
            <img src="bannerD.png" alt='#'/>
            <div className='absolute top-20 p-11 text-white font-bold '> 
              <p className='text-amber-400 text-4xl'>Bem-vindo(a).</p>
              <p className='text-2xl'>Milhões de filmes, séries e artigos para descobrir. Explore já.</p>
              
              <form className="max-w-md mx-auto mt-8">   
                <label htmlFor="default-search" className="block mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>

                <div>
                <input type="search" id="default-search" className="w-full p-3 text-sm rounded-full bg-black bg-opacity-25 border border-solid border-neutral-600 focus:border-neutral-600 focus:outline-none" placeholder="Pesquise por título, gênero, elenco, etc..."/>


                </div>
              </form>
            </div>
          </div>

          <p className='text-white text-3xl font-bold ml-4 mt-4'>Filmes</p>
          <div className="listaFilmes flex flex-row overflow-x-scroll pt-4 hide-scroll-bar relative pb-6">
               {
                filmes.map(filme => (
                  <>
                    <div className="inline-block px-3 ">
                        <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                        <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-zinc-800 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                          <h1 className="relative font-bold text-center text-white pt-64 ml-3 mr-3">{filme.title}</h1>
                        </div>
                        <div className="text-sm pl-20 pt-3">
                          <Link to={`${filme.id}`} className="bg-violet-500 pr-2 pl-2 pt-1 pb-1 rounded-xl">Saiba Mais</Link>
                        </div>
                    </div>
                </>
                ))}
          </div>

          <p className='text-white text-3xl font-bold ml-4 mt-4'>Artigos</p>
          <div className="listaFilmes flex flex-row overflow-x-scroll pt-4 relative pb-6">
               {
                filmes.map(filme => (
                  <>
                    <div className="inline-block px-3 ">
                      <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                      <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-zinc-800 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h1 className="relative font-bold text-center text-white pt-64 ml-3 mr-3">{filme.title}</h1>
                      </div>
                      <div className="text-sm pl-20 pt-3">
                        <Link to={`${filme.id}`} className="bg-violet-500 pr-2 pl-2 pt-1 pb-1 rounded-xl">Saiba Mais</Link>
                      </div>
                    </div>
                  </>
                ))}
          </div>

          <p className='text-white text-3xl font-bold ml-4 mt-4'>Recomendações</p>
          <div className="listaFilmes flex flex-row overflow-x-scroll pt-4 hide-scroll-bar relative pb-6">
               {
                filmes.map(filme => (
                  <>
                      <div className="inline-block px-3 ">
                      <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                      <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-zinc-800 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h1 className="relative font-bold text-center text-white pt-64 ml-3 mr-3">{filme.title}</h1>
                      </div>
                      <div className="text-sm pl-20 pt-3">
                        <Link to={`${filme.id}`} className="bg-violet-500 pr-2 pl-2 pt-1 pb-1 rounded-xl">Saiba Mais</Link>
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
export default Home