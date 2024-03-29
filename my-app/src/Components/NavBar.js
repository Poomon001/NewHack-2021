const NavBar = ({ scroll, aboutRef, instructionRef }) => {
  return (
    <nav className="nav-links">
      <a className="logo" href="/">
        <img src="new-logo.png" alt="logo" id="logo" />
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
        <li>
          <a href="https://github.com/Poomon001/NewHack-2021">
            <div className="github">GitHub</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
