import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/packages", label: "Package" },
    { to: "/book", label: "Book" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-wide">
            <span className="text-brand">New Way Travel</span>
            <span className="text-ink"></span>
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 shadow-sm"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <FaBars className="text-xl" />
          </button>

          <nav
            className={
              "absolute left-0 right-0 top-16 mx-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg md:static md:mx-0 md:border-0 md:bg-transparent md:p-0 md:shadow-none" +
              (open ? " block" : " hidden md:block")
            }
          >
            <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      "block rounded-xl px-4 py-2 text-base transition md:rounded-none md:px-0 md:py-0 " +
                      (isActive ? "text-brand" : "text-ink hover:text-brand")
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="md:ml-4">
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-red-600 px-4 py-2 text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
