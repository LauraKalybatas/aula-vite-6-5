import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
function Blog() {
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
          <main className="bg-zinc-900">
              <h1 className="font-bold text-white text-xl pt-5 pl-5">Todos os artigos relacionados ao universo cinematografico</h1>
              
              <form className="max-w-md mx-12 mt-4 mb-10">   
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>

                  <div className="relative">

                  <input type="search" id="default-search" className="block w-full p-2 text-sm rounded-full bg-transparent text-white" placeholder="Pesquise por título, gênero, elenco, etc..."/>
                  </div>
              </form>

              <div className="listaFilmes grid-4 pt-4 relative pb-6">
                  {filmes.map(filme => (
                      <>
                          <div className="inline-block pr-6 pb-5 pl-11">
                              <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt=""/>
                              <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-zinc-800 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                  <h1 className="relative font-bold text-center text-white pt-64 ml-3 mr-3">{filme.title}</h1>
                              </div>
                          </div>
                      </>
                  ))}
              </div>
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
  )
}
export default Blog