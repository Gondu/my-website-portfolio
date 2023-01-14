import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="#home" smooth>Home</Link>
          </li>
          <li>
            <Link to="#work" smooth>Work</Link>
          </li>
          <li>
            <Link to="#about" smooth>About</Link>
          </li>
          <li>
            <Link to="#contact" smooth>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navbar;