import React from "react";
import { useState } from "react";

export default function Book() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", location: "",
    guests: 1, arrivals: "", leaving: ""
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Valid email required";
    if (!/^\+?[0-9\-\s]{7,15}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!form.location) e.location = "Please select a destination";
    if (!form.arrivals) e.arrivals = "Select arrival date";
    if (!form.leaving) e.leaving = "Select leaving date";
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length === 0) {
      alert("Booking submitted! (hook up to API here)");
    }
  };

  const inputBase = "w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-brand/40";

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Book Your Trip</h1>
      <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2 bg-white p-6 rounded-2xl shadow-soft">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className={inputBase} name="name" value={form.name} onChange={onChange} />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className={inputBase} name="email" value={form.email} onChange={onChange} />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input className={inputBase} name="phone" value={form.phone} onChange={onChange} />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Address</label>
          <input className={inputBase} name="address" value={form.address} onChange={onChange} />
        </div>
        <div>
          <label className="block text-sm mb-1">Destination</label>
          <select className={inputBase} name="location" value={form.location} onChange={onChange}>
            <option value="">Select a place</option>
            {["Kashmir","Goa","Manali","Jhibi","Thailand","Kerala"].map((p) => <option key={p}>{p}</option>)}
          </select>
          {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Guests</label>
          <input type="number" min="1" className={inputBase} name="guests" value={form.guests} onChange={onChange} />
        </div>
        <div>
          <label className="block text-sm mb-1">Arrivals</label>
          <input type="date" className={inputBase} name="arrivals" value={form.arrivals} onChange={onChange} />
          {errors.arrivals && <p className="text-red-600 text-sm mt-1">{errors.arrivals}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Leaving</label>
          <input type="date" className={inputBase} name="leaving" value={form.leaving} onChange={onChange} />
          {errors.leaving && <p className="text-red-600 text-sm mt-1">{errors.leaving}</p>}
        </div>
        <div className="md:col-span-2">
          <button className="w-full rounded-lg bg-brand px-4 py-3 font-medium text-white hover:bg-brand/80">Submit</button>
        </div>
      </form>
    </section>
  );
}
