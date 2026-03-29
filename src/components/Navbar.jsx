import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (!menuOpen) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (burgerRef.current?.contains(target)) {
        return;
      }

      if (navRef.current?.contains(target)) {
        return;
      }

      setMenuOpen(false);
    };

    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [menuOpen]);

  const pathname = (location.pathname || "/").toLowerCase();

  const isActive = (paths) => paths.includes(pathname);
  const linkClassName = (paths) => (isActive(paths) ? "active" : "");
  const closeMenu = () => setMenuOpen(false);

  const handleBurgerKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setMenuOpen((prev) => !prev);
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/assets/logo.svg" alt="RBC Tech" className="logo-img" />
        </div>

        <ul ref={navRef} className={menuOpen ? "nav-active" : ""}>
          <li>
            <Link
              to="/index.html"
              className={linkClassName(["/", "/index.html"])}
              onClick={closeMenu}
              aria-current={isActive(["/", "/index.html"]) ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about.html"
              className={linkClassName(["/about", "/about.html"])}
              onClick={closeMenu}
              aria-current={isActive(["/about", "/about.html"]) ? "page" : undefined}
            >
              Uber uns
            </Link>
          </li>
          <li>
            <Link
              to="/services.html"
              className={linkClassName(["/services", "/services.html"])}
              onClick={closeMenu}
              aria-current={isActive(["/services", "/services.html"]) ? "page" : undefined}
            >
              Dienstleistungen
            </Link>
          </li>
          <li>
            <Link
              to="/contact.html"
              className={linkClassName(["/contact", "/contact.html"])}
              onClick={closeMenu}
              aria-current={isActive(["/contact", "/contact.html"]) ? "page" : undefined}
            >
              Kontakt
            </Link>
          </li>
        </ul>

        <div
          ref={burgerRef}
          className={`burger ${menuOpen ? "active" : ""}`}
          role="button"
          tabIndex={0}
          aria-label="Menu"
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen((prev) => !prev)}
          onKeyDown={handleBurgerKeyDown}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
