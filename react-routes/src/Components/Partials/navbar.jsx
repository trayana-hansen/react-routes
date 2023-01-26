import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/goals">Goals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
