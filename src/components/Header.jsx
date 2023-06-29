import { GiGemini } from "react-icons/gi";
import { MdHome, MdInfo } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <GiGemini size={24} />
        <div>DimasFirmansyah</div>
      </Link>
      <nav>
        <NavLink to="/">
          <MdHome size={24} />
          Beranda
        </NavLink>
        <NavLink to="/about">
          <MdInfo size={24} />
          Tentang
        </NavLink>
      </nav>
      <button className="button">Login</button>
    </header>
  );
}
