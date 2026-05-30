/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Croissant } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Find Us", href: "#find-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf7f0]/95 backdrop-blur-md shadow-md border-b border-[#ebe0cf]/50 py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group transition-colors duration-200"
          >
            <div
              className={`p-1.5 rounded-lg transition-colors ${
                isScrolled ? "bg-brand-100 text-brand-700" : "bg-white/10 text-[#fdfbf7]"
              }`}
            >
              <Croissant className="h-6 w-6" />
            </div>
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-tight ${
                isScrolled ? "text-brand-900" : "text-[#fdfbf7]"
              }`}
            >
              Golden Crust
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                  isScrolled
                    ? "text-brand-900 hover:text-brand-600"
                    : "text-[#fdfbf7]/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#menu"
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                isScrolled
                  ? "bg-brand-600 text-white hover:bg-brand-700 shadow-sm"
                  : "bg-[#fdfbf7] text-brand-950 hover:bg-brand-100"
              }`}
            >
              View Today's Menu
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-brand-900 hover:bg-brand-100"
                  : "text-[#fdfbf7] hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#faf7f0] border-b border-[#ebe0cf] shadow-xl py-4 px-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-brand-900 font-medium hover:bg-brand-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-full bg-brand-600 text-white font-semibold tracking-wider text-xs uppercase shadow-md hover:bg-brand-700 transition"
            >
              View Today's Menu
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
