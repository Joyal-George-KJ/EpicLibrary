import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {
  Menu,
  Home,
  BookOpen,
  Film,
  Tv,
  Book,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-neutral-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo or Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xl"
            aria-label="CouponShare Home"
          >
            <Home size={24} /> EpicLibrary
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/anime"
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition flex items-center gap-1"
              aria-label="Browse Anime"
            >
              <BookOpen size={18} /> Anime
            </Link>
            <Link
              to="/movie"
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition flex items-center gap-1"
              aria-label="Browse Movies"
            >
              <Film size={18} /> Movies
            </Link>
            <Link
              to="/series"
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition flex items-center gap-1"
              aria-label="Browse Series"
            >
              <Tv size={18} /> Series
            </Link>
            <Link
              to="/book"
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition flex items-center gap-1"
              aria-label="Browse Books"
            >
              <Book size={18} /> Books
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-700 dark:text-neutral-100"
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-4">
            <Link
              to="/anime"
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Anime
            </Link>
            <Link
              to="/movie"
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              to="/series"
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Series
            </Link>
            <Link
              to="/book"
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Books
            </Link>
            <div className="mt-4">
              <SearchBar />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
