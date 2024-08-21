import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="flex justify-between bg-zinc-800 text-white p-5">
      <Link to="/" className="text-violet-500 font-bold text-[22px]">
        CINE<span className="text-amber-400">LORA</span>
      </Link>
      <Navbar />
    </header>
  );
}
export default Header;
