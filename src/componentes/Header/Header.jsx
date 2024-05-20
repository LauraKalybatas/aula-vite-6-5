import Navbar from "../Navbar/Navbar"

function Header() {
    return(
      <header className="flex justify-between bg-primary-raul text-white p-5">
        <span>Olá, Visitante!</span>
        <h1>Bem-vindo ao MovieApp</h1>
        <Navbar/>
      </header>
    )
}
export default Header