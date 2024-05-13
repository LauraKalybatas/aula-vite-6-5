import Navbar from "../Navbar/Navbar"

function Header() {
    return(
      <header className="flex">
        <span>Olá, Visitante!</span>
        <h1>Bem-vindo ao MovieApp</h1>
        <Navbar/>
      </header>
    )
}
export default Header