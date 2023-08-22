const NavBar = () => {
  return (
    <nav className="nav--bar">
      <div className="container nav--bar--box">
        <a href="#" className="logo--container">
          <img src="/logo.png" />
        </a>
        <ul className="nav--list--container">
          <li className="nav--list">
            <a href="" className="nav--links">
              Features
            </a>
          </li>
          <li className="nav--list">
            <a href="" className="nav--links">
              Pricing
            </a>
          </li>
          <li className="nav--list">
            <a href="" className="nav--links">
              Login
            </a>
          </li>
          <li className="nav--list">
            <a href="" className="nav--links nav--links--border">
              Get access now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
