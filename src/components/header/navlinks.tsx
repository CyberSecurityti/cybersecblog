import cyberlogo from "./img/cyber.jpeg";
import { Nav } from "./styles/stylesnav";
import { FaRegUserCircle, FaSearch} from "react-icons/fa";

export const Navlinks = () => {
  return (
    <Nav>
      <div>
        <img src={cyberlogo} alt="logo" />
      </div>
      <li>Home</li>
      <li>Cursos</li>
      <li>Artigos</li>
      <div>
        <FaSearch className='icon' id='search'/> 
        <FaRegUserCircle className='icon' id="user"/>
      </div>
    </Nav>
  );
};
