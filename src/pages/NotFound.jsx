import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center px-6 text-center">
      <div>
        <h1 className="text-6xl font-bold text-brand">404</h1>
        <p className="mt-4 text-gray-600">Page not found.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-brand text-white rounded-lg shadow hover:bg-brand/80 transition">Go Home</Link>
      </div>
    </section>
  );
}
