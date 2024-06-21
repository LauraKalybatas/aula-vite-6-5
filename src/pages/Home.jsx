import data from '../../artigos.json'
import { useEffect, useState } from 'react';

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
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>

                <div className="relative">

                  <input type="search" id="default-search" className="block w-full p-2 text-sm rounded-full bg-transparent text-white" placeholder="Pesquise por título, gênero, elenco, etc..."/>
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
                    </div>
                </>
                ))}
          </div>

          <p className='text-white text-3xl font-bold ml-4 mt-4'>Artigos</p>
          <div className="listaFilmes flex flex-row overflow-x-scroll pt-4 hide-scroll-bar relative pb-6">
               {
                filmes.map(filme => (
                  <>
                    <div className="inline-block px-3 ">
                    <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                    <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-zinc-800 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <h1 className="relative font-bold text-center text-white pt-64 ml-3 mr-3">{filme.title}</h1>
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
                    </div>
                </>
                ))}
          </div>

      </main>

      <footer>
      </footer>
    </>
  )
}
export default Home