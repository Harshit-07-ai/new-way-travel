import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import {
  FaHotel,
  FaUtensils,
  FaBus,
  FaHiking,
  FaGlobe,
  FaPlane,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="mt-0">
      {/* Hero Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-[70vh]"
      >
        {[1, 2].map((n) => (
          <SwiperSlide key={n}>
            <div
              className="flex h-full items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(/home-slide-${n}.jpg)` }}
            >
              <div className="bg-black/50 p-8 text-center text-white rounded-xl mx-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {n === 1 ? "Explore, Discover, Travel" : "Make Your Tour Worthwhile"}
                </h2>
                <p className="mb-6">
                  {n === 1 ? "Travel around the world with us" : "Amazing adventures await"}
                </p>
                <Link
                  to={n === 1 ? "/packages" : "/book"}
                  className="inline-block px-6 py-3 bg-brand text-white font-medium rounded-lg shadow hover:bg-brand/80 transition"
                >
                  {n === 1 ? "Discover More" : "Book Now"}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Services */}
      <section className="py-16 bg-lightbg">
        <h2 className="text-center text-3xl font-semibold mb-10">Our Services</h2>
        <div className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <ServiceCard icon={<FaHotel />} title="Affordable Hotels" />
          <ServiceCard icon={<FaUtensils />} title="Food & Drinks" />
          <ServiceCard icon={<FaBus />} title="Transport" />
          <ServiceCard icon={<FaGlobe />} title="Around the World" />
          <ServiceCard icon={<FaPlane />} title="Fastest Travel" />
          <ServiceCard icon={<FaHiking />} title="Adventures" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/about-img.jpg"
            alt="About us"
            className="rounded-xl shadow-soft"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            We’re a leading travel booking platform helping you explore the world with
            affordable packages, exciting adventures, and stress-free planning.
          </p>
          <Link
            to="/about"
            className="px-6 py-3 bg-brand text-white rounded-lg shadow hover:bg-brand/80 transition"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-lightbg">
        <h2 className="text-center text-3xl font-semibold mb-10">Top Packages</h2>
        <div className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {["Kashmir","Goa","Manali","North-East","Thailand","Kerala"].map((place, i) => (
            <div key={place} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg transition">
              <img
                src={`/img-${i + 1}.jpg`}
                alt={place}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{place}</h3>
                <p className="text-gray-600 mb-4">
                  Discover the best sights and experiences in {place}.
                </p>
                <Link
                  to="/book"
                  className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/80 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer */}
      <section className="py-20 px-6 text-center bg-brand text-white">
        <h2 className="text-4xl font-bold mb-4">Up to 50% Off</h2>
        <p className="mb-6 text-lg">Plan your holiday now and save big!</p>
        <Link
          to="/book"
          className="px-6 py-3 bg-white text-brand font-medium rounded-lg shadow hover:bg-gray-100 transition"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-soft hover:shadow-lg transition">
      <div className="text-brand text-4xl mb-4">{icon}</div>
      <h3 className="font-medium">{title}</h3>
    </div>
  );
}
