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
              
              <form className="max-w-md mx-auto mt-5">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path className="stroke-currentColor stroke-linecap-round stroke-linejoin-round stroke-width-2 d-m19-19-4-4m0-7A7-7-0-1-1-1-8a7-7-0-0-1-14-0Z"/>
                    </svg>
                  </div>

                  <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm rounded-full bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 text-black" placeholder="Pesquise por título, gênero, elenco, etc..."/>
                </div>
              </form>
            </div>
          </div>

          <div className="listaFilmes flex flex-row overflow-x-scroll pt-7 hide-scroll-bar relative ">
               {
                filmes.map(filme => (
                  <>
                    <div className="inline-block px-3 ">
                    <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                    <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-stone-900 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <h1 className="relative font-bold text-center text-white pt-64 ">{filme.title}</h1>
                    </div>
                    </div>
                </>
                ))}
          </div>
      </main>
    </>
  )
}
export default Home