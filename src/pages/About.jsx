import React from "react";
export default function About() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img src="/src/assets/images/about-img.jpg" alt="About" className="rounded-xl shadow-soft" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          We craft memorable journeys with a focus on comfort, value, and adventure.
          From weekend getaways to international explorations, our team ensures seamless planning.
        </p>
      </div>
    </section>
  );
}
