"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="container nav-container">
        <Link href="/" className="logo">
          <img src="/assets/atlas.png" alt="AtlasFlux" className="logo-img" />
          <span className="logo-text">AtlasFlux</span>
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://ai.atlasflux.my"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              AI App
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
