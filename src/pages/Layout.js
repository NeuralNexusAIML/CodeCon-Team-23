import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class = "navbar background">
        <ul class="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="blogs">Your Events</Link>
          </li>
          <li>
            <Link to = "create">CREATE</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
