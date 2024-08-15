import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


function Home() {
  
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
      <main className="bg-neutral-900">
          <div className='size-full relative'>
            <img src="bannerD.png" alt='#'/>
            <div className='absolute top-20 p-11 text-white font-bold '> 
              <p className='text-amber-400 text-4xl'>Bem-vindo(a).</p>
              <p className='text-2xl'>Milhões de filmes, séries e artigos para descobrir. Explore já.</p>
              
              <form className=" mx-auto mt-8">   
                
                <div>
                <input type="search" id="default-search" className="w-[600px] p-3 text-sm rounded-full bg-black bg-opacity-25 border border-solid border-neutral-600 transition-colors  focus:outline-none focus:border-yellow-400 text-white" placeholder="Pesquise por título, gênero, elenco, etc..."/>


                </div>
              </form>
            </div>
          </div>

          <p className='text-white text-[35px] font-bold ml-[50px] mt-[20px] '>Filmes</p>
          <div className="pl-[30px] pr-[30px] flex flex-row overflow-x-scroll pt-4 hide-scroll-bar relative pb-7">
               {
                filmes.map(filme => (
                  <>
                    <div className="inline-block px-4">
                    <Link to={`${filme.id}`} >
                      <div className="inline-block pt-4">

                      
                        <img className='absolute w-1/6 h-64 ml-[18px]  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                        <div className=" h-[340px]  w-[240px]  overflow-hidden rounded-lg bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                          <h1 className="relative font-bold text-center text-white text-[17px] pt-[265px] ml-3 mr-3">{filme.title}</h1>
                         
                        </div>
                        </div>
                        </Link>
                    </div>

                </>
                ))}
          </div>

          <p className='text-white text-[35px] font-bold ml-[50px] mt-[20px] '>Artigos</p>
          <div className="pl-[30px] pr-[30px]  flex flex-row overflow-x-scroll pt-4 relative pb-6">
          {
                filmes.map(filme => (
                  <>
                    <div className="inline-block px-4">
                    <Link to={`${filme.id}`} >
                      <div className="inline-block pt-4">

                      
                        <img className='absolute w-1/6 h-64 ml-[18px]  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                        <div className=" h-[340px]  w-[240px]  overflow-hidden rounded-lg bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                          <h1 className="relative font-bold text-center text-white text-[17px] pt-[265px] ml-3 mr-3">{filme.title}</h1>
                          <div className="text-sm pl-[70px] pt-[17px]">
                         
                        </div>
                        </div>
                        </div>
                        </Link>
                    </div>

                </>
                ))}
          </div>

          <p className='text-white text-[35px] font-bold ml-[50px] mt-[20px] '>Recomendações</p>
          <div className="pl-[30px] pr-[30px]  flex flex-row overflow-x-scroll pt-4 relative pb-[90px]">
          {
                filmes.map(filme => (
                  <>
                    <div className="inline-block px-4 ">
                    <Link to={`${filme.id}`} >
                      <div className="inline-block pt-4">

                      
                        <img className='absolute w-1/6 h-64 ml-[18px]  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                        <div className=" h-[340px]  w-[240px]  overflow-hidden rounded-lg bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                          <h1 className="relative font-bold text-center text-white text-[17px] pt-[265px] ml-3 mr-3">{filme.title}</h1>
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
            <span><Link to='Contato'>CONTATO</Link></span>
          </div>
        </nav> 
      </footer>
      </div>
    </>
  )
}
export default Home