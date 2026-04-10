"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Studio", href: "/#studio" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Story", href: "/story" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          <img src="/assets/atlas.png" alt="AtlasFlux" className="logo-img" />
          <span>AtlasFlux</span>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://ai.atlasflux.my"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-cta"
            >
              Open App{" "}
              <i
                className="fas fa-arrow-up-right-from-square"
                style={{ marginLeft: "6px", fontSize: "0.8rem" }}
              ></i>
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
