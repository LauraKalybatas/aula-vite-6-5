import { useEffect} from 'react';
import {Link} from 'react-router-dom';
import Noticias from '../assets/Noticias';
Noticias
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
          
              <h1 className="font-bold text-white text-[28px] pb-[20px] pt-5  ml-[90px]">Todos os artigos relacionados ao universo cinematografico</h1>
             <div className='pb-[100px]'>
              <Noticias/>
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