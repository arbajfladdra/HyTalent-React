//Images from assests
import BrandLogo from "../assets/hy-talent-logo_white.png";

const Header = () => {
  return (
    <header className="row">
      <div className="header-wrapper container">
        <div className="header-item brand">
          <img
            className="brand-logo"
            src={BrandLogo}
            alt="hy talent brand logo here"
          />
        </div>
        <div className="header-item header-nav">
          <nav className="header-nav-wrapper">
            <ul
              type="none"
              className="header-nav-list-wrapper registeration-nav-list-wrapper"
            >
              <li className="header-nav-list-item">
                <a href="#">Sign In</a>
              </li>{" "}
              |
              <li className="header-nav-list-item">
                <a href="#">Company Registration</a>
              </li>
            </ul>

            <ul
              type="none"
              className="header-nav-list-wrapper component-nav-list-wrapper"
            >
              <li className="header-nav-list-item">
                <a href="#">Home</a>
              </li>{" "}
              |
              <li className="header-nav-list-item">
                <a href="#">About the Programme</a>
              </li>{" "}
              |
              <li className="header-nav-list-item">
                <a href="#">News</a>
              </li>{" "}
              |
              <li className="header-nav-list-item">
                <a href="#">Gallery</a>
              </li>{" "}
              |
              <li className="header-nav-list-item">
                <a href="#">Why HyTalent</a>
              </li>{" "}
              |
              <li className="header-nav-list-item">
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div className="nav-toggle">Menu</div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
