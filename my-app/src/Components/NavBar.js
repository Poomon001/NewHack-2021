const NavBar = () => {
  return (
    <div className="nav-links">
      <nav>
        <a className="logo">
          <img src="new-logo.png" alt="" />
        </a>
        <ul>
          <li className="Pages">
            <a href="">HOME</a>
          </li>
          <li className="Pages">
            <a href="">ABOUT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
