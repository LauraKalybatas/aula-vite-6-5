import data from '../../artigos.json'

function Home() {
  console.log(data)
    return(
      <>
        <main>
          <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca"/>
          <div className='grid grid-cols-3 gap-4'>
            {
              data.map((filme, index) => (
                  <div className='card' key={index}>
                    <h1>{filme.title}</h1>
                    <img className="mb-2 rounded-lg" src={filme.image} alt={filme.title} />
                    <div className='tags'>
                      {filme.tags.map((tags, index) => (
                        <span key={index} className='bg-purple-600 p-1 m-1 rounded-lg text-white'> {tags} </span>
                      ))}
                  </div>  
                  <div className='texto'>
                        {filme.text.map((paragrafo, index) => (
                          <p key={index}> {paragrafo} </p>
                        ))}
                  </div>
                  </div>
                )
              )
            }
        </div>
        </main>
      </>
    )
}
export default Home