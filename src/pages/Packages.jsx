import React from "react";

export default function Packages() {
  const places = ["Kashmir","Goa","Manali", " North East", "Thailand", "Kerala"];

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Packages</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place, i) => (
          <article
            key={place}
            className="bg-white rounded-xl shadow-soft overflow-visible flex flex-col"
          >
            {/* image wrapper: fixed height, overflow-hidden, relative */}
            <div className="relative w-full h-56 overflow-hidden bg-gray-100">
              <img
                src='/img-{i + 1}.jpg'
                alt={place}
                /* IMPORTANT:
                   - w-full h-full keeps image exactly matching wrapper box
                   - object-cover fills the wrapper without distortion
                   - transform scale-90 visually zooms the image content out
                   - transform-origin-center keeps scaling centered
                   - z-0 keeps the image under the text area
                */
                className="w-full h-full object-cover transform scale-85 origin-center transition-transform duration-300 z-0"
                /* optional: hover to slightly zoom to normal */
                /* add: hover:scale-100 lg:hover:scale-95  */
              />
            </div>

            {/* content: ensure it's above image if any overlap happens */}
            <div className="p-6 flex-1 relative z-10">
              <h3 className="text-xl font-semibold mb-2">{place}</h3>
              <p className="text-gray-600 mb-4">
                Curated experiences in {place} with great value.
              </p>
              <a
                href="/book"
                className="inline-block px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/80 transition"
              >
                Book Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
