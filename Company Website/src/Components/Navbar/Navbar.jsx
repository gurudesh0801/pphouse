import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4 text-light" href="#">
          Project<span className="text-primary">Powerhouse</span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`ri-${isOpen ? "close" : "menu"}-line ri-xl`}></i>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link text-light fw-medium" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-medium" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-medium" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-medium" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-medium" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
