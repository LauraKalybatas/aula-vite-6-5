import Navbar from "../Navbar/Navbar"

function Header() {
    return(
      <header className="flex justify-between bg-zinc-700 text-white p-5">
        <p className="text-violet-500 font-bold text-xl">CINE<span className="text-amber-400">LORA</span></p>
        <Navbar/>
      </header>
    )
}
export default Header