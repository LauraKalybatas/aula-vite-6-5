import { BiSearchAlt2 } from "react-icons/bi";
import data from "../../artigos.json";
import { useState } from "react";
import Line from "../../public/Line.png";

export default function Noticias() {

    const [query, setQuery] = useState("");

    const filteredArticles = data.filter(post => {
        if (query === '') {
            return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
        }
        return false;
    });

    const noResults = filteredArticles.length === 0 && query !== '';


    return(
        <>

        <form className="flex mx-12  ml-[90px] mb-5">
            <input
            type="text"
            className="inline-flex w-[1100px] h-[40px] border-neutral-600 p-2 text-sm rounded-full bg-transparent   border-2 pl-10  transition-colors  focus:outline-none focus:border-yellow-400 text-white" placeholder="Pesquise por título, gênero, elenco, etc..."
            onChange={event => setQuery(event.target.value)}
            />
            <div className="pl-[20px]">
            <button
            type="submit"
            className="w-[50px]  h-[50px] bg-violet-500 flex items-center justify-center text-2xl text-white rounded-full"
            >
            <BiSearchAlt2 />
            </button>
            </div>
        </form>
                
        <main className="mt-2">
        {noResults ? (
                    <div className='col-span-3 text-center text-xl mt-10 text-white'>
                        <h1>Nenhum Artigo Encontrado</h1>
                    </div>
                ) : (
                filteredArticles.map( (artigo, index) => (
                <div key={index}>
                     
                    <div className="flex justify-center items-center space-x-28" >
                        <div className="flex justify-center">
                            <img className="w-[250px] h-[350px] rounded-[10px]" src={artigo.image} alt={artigo.image} />
                        </div>
                        <div className="text-white size-6/12 mt-12 mb-20">
                            <h1 className="text-3xl mb-7 font-bold">{artigo.title}</h1>
                            {artigo.text.map( (paragrafo,index) => (
                            <p className="text-[18px]" key={index}>{paragrafo}</p>
                            ))}
                        </div>
                        
                    </div>
                    <div className="flex justify-center">
                        <img className="w-11/12" src={Line} alt="" />
                    </div>
                </div>
                    
                )))
            }
        </main>
        </>
    )
}