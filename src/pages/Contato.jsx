import { useState } from 'react'
import emailjs from '@emailjs/browser'

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
      <div className='bg-neutral-900'>
          <div className="flex justify-center md:pt-24 pt-10">
                  <h1 className="md:text-6xl text-5xl md:w-full w-11/12 text-center md:pt-10 pt-10 " id="contato"><soan className='text-violet-500 fontbold'>Contate</soan><span className='text-amber-400 font-bold' >-nos</span></h1>
              </div>
              <div className="flex justify-center mt-12 ">
                  <form action="" onSubmit={sendEmail} className=" flex flex-col md:w-7/12 w-11/12">

                      <input 
                      type="text" 
                      placeholder="Nome" 
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="bg-neutral-900   mb-5 border-b-8  py-1 text-white focus:outline-none text-3xl rounded-b-md"/>

                      <input 
                      type="email" 
                      placeholder="E-mail"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="bg-foxus dark:bg-nav placeholder:text-ph dark:placeholder:text-white placeholder:text-2xl mb-5 border-b-8 border-tpg dark:border-dmnav py-1 focus:outline-none text-3xl rounded-b-md"/>

                      <input
                      type="text" 
                      placeholder="Mensagem" 
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="bg-foxus dark:bg-nav placeholder:text-ph dark:placeholder:text-white placeholder:text-2xl mb-10 border-b-8 border-tpg dark:border-dmnav py-1 focus:outline-none text-3xl rounded-b-md"/>

                      <div className="flex justify-center mt-3">
                          <button type='submit' value="enviar" className="px-7 py-2 bg-violet-500  dark:text-nav font-bold rounded-full focus:outline-none text-3xl text-white">ENVIAR</button>
                      </div>

                  </form>
              </div>
      </div>
  )
}



 