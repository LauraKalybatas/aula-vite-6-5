import{Link} from 'react-router-dom'


function Navbar() {
  return(
    <nav>
      <div className=' inline-block  font-bold text-[18px]'>
      <ul className='flex gap-3'>
        <li ><Link className='text-white focus:text-amber-400' to="/">Home</Link></li>
        <li><Link className='text-white focus:text-amber-400' to="filmes">Filmes</Link></li>
        <li><Link className='text-white focus:text-amber-400' to="blog">Blog</Link></li>
        <li><Link className='text-white focus:text-amber-400' to="contato">Contato</Link></li>
      </ul>
      </div>
    </nav>
  )
}
export default Navbar
