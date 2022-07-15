import { Outlet, Link} from "react-router-dom";
import styled from "styled-components";
import cyberlogo from "./img/cyber.jpeg";
import { Nav } from "./styles/stylesnav";
import { FaRegUserCircle, FaSearch} from "react-icons/fa";

const Layout = styled.div`
  height: 100%;
`;

export const HeaderNav = () => {
  return (
    <Layout>
      <Nav>
        <div>
          <img src={cyberlogo} alt="logo" />
        </div>
        <li>
          <Link to={"/"}> Home</Link>
        </li>
        <li>
          <Link to={"/courses"}>Courses</Link>
        </li>
        <li>
          <Link to={"/articles"}>Artigos</Link>
        </li>
        <div>
          <FaSearch className="icon" id="search" />
          <FaRegUserCircle className="icon" id="user" />
        </div>
      </Nav>
      <Outlet />
    </Layout>
  );
};
