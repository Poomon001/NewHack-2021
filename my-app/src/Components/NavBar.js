const NavBar = () => {
  return (
    <div className="nav-links">
      <nav>
        <a className="logo" href="home">
          <img src="new-logo.png" alt="" />
        </a>
        <ul>
          <li className="Pages">
            <a href="home">HOME</a>
          </li>
          <li className="Pages">
            <a href="about">ABOUT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
