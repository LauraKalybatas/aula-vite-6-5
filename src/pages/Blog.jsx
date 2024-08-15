import { useEffect} from 'react';
import {Link} from 'react-router-dom';
function Blog() {


  const apiKey= 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
  const urlBase = 'https://api.themoviedb.org/3/movie/'


  useEffect(() => {

  fetch(`${urlBase}popular?${apiKey}`)
  .then(response => response.json())
  .catch(error => console.log(error))

  },[])

  return ( 
      <>
          <main className="bg-zinc-900">
              <h1 className="font-bold text-white text-[28px] pt-5 pl-[52px]">Todos os artigos relacionados ao universo cinematografico</h1>
              
              <form className=" mx-12 mt-4 mb-5">   

                    <div className="relative">

                    <input type="search" id="default-search" className="inline-flex w-[1100px] border-neutral-600 p-2 text-sm rounded-full bg-transparent   border-2 pl-10  transition-colors  focus:outline-none focus:border-yellow-400 text-white" placeholder="Pesquise por título, gênero, elenco, etc..."/>
                    </div>
                </form>

              <div className="listaFilmes grid-4 pt-4  pl-2 relative">
                  
                      <>
  
                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="Rectangle10.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>7 filmes com grandes plot twists</p>
                              </div>
                          </div>

                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme1.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>5 vezes que X-men'97 se provou ser a melhor produção da Marvel</p>
                              </div>
                          </div>


                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme2.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>Uma Família Feliz é o melhor do suspense brasileiro</p>
                              </div>
                          </div>
                          
                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme3.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>Kung Fu Panda 4: divertido, mas é uma pegada fraca para a franquia</p>
                              </div>
                          </div>
                      
                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="Rectangle10.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>7 filmes com grandes plot twists</p>
                              </div>
                          </div>

                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme1.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>5 vezes que X-men'97 se provou ser a melhor produção da Marvel</p>
                              </div>
                          </div>


                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme2.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>Uma Família Feliz é o melhor do suspense brasileiro</p>
                              </div>
                          </div>
                          
                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme3.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>Kung Fu Panda 4: divertido, mas é uma pegada fraca para a franquia</p>
                              </div>
                          </div>
                 
                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="Rectangle10.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>7 filmes com grandes plot twists</p>
                              </div>
                          </div>

                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme1.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>5 vezes que X-men'97 se provou ser a melhor produção da Marvel</p>
                              </div>
                          </div>


                          <div className="inline-block pb-[45px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme2.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>Uma Família Feliz é o melhor do suspense brasileiro</p>
                              </div>
                          </div>
                          
                          <div className="inline-block pb-[75px] pl-11">
                              <div className="w-[244px] h-[275px]  overflow-hidden rounded-2xl shadow-md bg-zinc-800 shadow-none hover:shadow-amber-500 hover:shadow-[0px_0px_30px_3px]  duration-300
                         ease-in-out">
                              <img className='p-6' src="filme3.png" alt='#'/>
                              <p className='text-white font-bold pl-6'>Kung Fu Panda 4: divertido, mas é uma pegada fraca para a franquia</p>
                              </div>
                          </div>
        
                          

                      </>
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