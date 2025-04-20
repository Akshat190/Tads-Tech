import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const handleAboutClick = () => {
    window.scrollTo(0, 0);
  };

  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
    document.body.classList.toggle("mobile-nav-active");
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const ctaSection = document.querySelector(".call-to-action");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCtaVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ctaSection) {
      observer.observe(ctaSection);
    }

    return () => {
      if (ctaSection) {
        observer.unobserve(ctaSection);
      }
    };
  }, []);

  return (
    <div>
      {/* Header Section Start */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <div className="logo pull-left">
            <h1>
              <Link to="/">
                <img src="img/Tads2.png" alt="Logo" title="Your Logo" />
              </Link>
            </h1>
          </div>
          <nav id="nav-menu-container">
            <ul className={`nav-menu ${ctaVisible ? "white-text" : ""}`}>
              <li>
                <Link to="/about" onClick={handleAboutClick}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={handleAboutClick}>Services</Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={handleAboutClick}>Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleAboutClick}>Contact</Link>
              </li>
            </ul>
          </nav>
          <button id="mobile-nav-toggle" onClick={toggleMobileNav}>
            &#9776;
          </button>
          <nav id="mobile-nav" className={mobileNavActive ? "active" : ""}>
            <ul>
              <li className="menu-active home-link">
                <Link to="/" onClick={toggleMobileNav}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMobileNav}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={toggleMobileNav}>Services</Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={toggleMobileNav}>Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMobileNav}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div id="mobile-body-overly" onClick={toggleMobileNav}></div>
        </div>
      </header>
      {/* Header Section End */}
    </div>
  );
}

export default Navbar;
