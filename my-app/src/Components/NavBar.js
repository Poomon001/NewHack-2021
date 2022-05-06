const NavBar = ({ scroll, aboutRef, instructionRef, homeRef }) => {
  return (
    <div className="nav-links">
      <nav>
        <a className="logo" href="/">
          <img src="new-logo.png" alt="" />
        </a>
        <ul>
          <li className="Pages">
            <a
              href="about"
              onClick={(e) => {
                scroll(e, aboutRef);
              }}
            >
              ABOUT
            </a>
          </li>
          <li className="Pages">
            <a
              href="instruction"
              onClick={(e) => {
                scroll(e, instructionRef);
              }}
            >
              INSTRUCTION
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
