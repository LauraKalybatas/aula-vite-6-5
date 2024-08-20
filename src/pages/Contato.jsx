import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'

export default function Forms() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
      e.preventDefault();

      if (name === '' || email === '' || message === '') {
          alert("Preencha todos os campos");
          return;
      }

      const templateParams = {
          from_name: name,
          message: message,
          email: email
      }

      emailjs.send("service_9zaf96t", "template_rja4a8j", templateParams, "236LkqJ-Jzma4XSNe")
      .then((response) => {
          console.log("EMAIL ENVIADO", response.status, response.text)
          setName('')
          setEmail('')
          setMessage('')
      }), (erro) => {
          console.log("Erro", erro)
      }
  }

  return(
    <>
      <div className='bg-neutral-900'>
          <div className="flex justify-center md:pt-24 pt-10">
                  <h1 className="md:text-6xl text-5xl md:w-full w-11/12 text-center md:pt-10 pt-10 " id="contato"><soan className='text-violet-500 font-bold'>Contate</soan><span className='text-amber-400 font-bold' >-nos</span></h1>
              </div>
              <p className='text-white text-[25px] font-semibold pl-[270px] pt-[30px]'>Nos mande perguntas, sugestões, propostas, feedback, etc</p>
              <div className="flex justify-center mt-12 ">
                  <form action="" onSubmit={sendEmail} className=" flex flex-col md:w-7/12 w-11/12">

                      <input 
                      type="text" 
                      placeholder="Nome" 
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="bg-neutral-900   mb-5 border-b-8  py-1 text-white focus:outline-none text-3xl border-amber-400 rounded-b-md"/>

                      <input 
                      type="email" 
                      placeholder="E-mail"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="bg-neutral-900   mb-5 border-b-8  py-1 text-white focus:outline-none text-3xl border-amber-400 rounded-b-md"/>

                      <input
                      type="text" 
                      placeholder="Mensagem" 
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="bg-neutral-900   mb-5 border-b-8  py-1 text-white focus:outline-none text-3xl border-amber-400 rounded-b-md"/>

                      <div className="flex justify-center mt-[50px] pb-[150px]">
                          <button type='submit' value="enviar" className="px-8 py-3 bg-violet-500  dark:text-nav font-bold rounded-full focus:outline-none text-2xl text-white">ENVIAR</button>
                      </div>

                  </form>
              </div>
      </div>
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



 