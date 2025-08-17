import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-lightbg mt-16">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-muted">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/packages" className="hover:text-brand">Package</Link></li>
            <li><Link to="/book" className="hover:text-brand">Book</Link></li>
            <li><Link to="/about" className="hover:text-brand">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Extra Links</h4>
          <ul className="space-y-2 text-muted">
            <li><a href="#" className="hover:text-brand">Ask Questions</a></li>
            <li><a href="#" className="hover:text-brand">About Us</a></li>
            <li><a href="#" className="hover:text-brand">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand">Terms of Use</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-muted">
            <li className="flex items-center gap-3"><FaPhone />+91 7827659667 </li>
            <li className="flex items-center gap-3"><FaPhone /> +91 8595221349</li>
            <li className="flex items-center gap-3"><FaEnvelope/>infonewwaytravel2003@gmail.com</li>
            <li className="flex items-center gap-3"><FaMapMarkerAlt /> Delhi, India</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3 text-white">
            <a className="inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2 hover:bg-brand transition"><FaFacebookF /> Facebook</a>
            <a className="inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2 hover:bg-brand transition"><FaTwitter /> Twitter</a>
          </div>
          <div className="mt-3 flex gap-3 text-white">
            <a className="inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2 hover:bg-brand transition"><FaInstagram /> Instagram</a>
            <a className="inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2 hover:bg-brand transition"><FaLinkedinIn /> LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} travel. All rights reserved.
      </div>
    </footer>
  );
}
