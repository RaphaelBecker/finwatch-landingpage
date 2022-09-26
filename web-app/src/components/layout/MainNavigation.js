import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Landing page</Link>
          </li>
          <li>
            <Link to="/education">Education page</Link>
          </li>
          <li>
            <Link to="/signup">Signup page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
