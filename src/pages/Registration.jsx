import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return setError("All fields are required");
    if (form.password !== form.confirm) return setError("Passwords do not match");
    alert("Registered! (hook up to API here)");    
  };

  const inputBase = "w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-brand/40";

  return (
    <section className="min-h-[70vh] grid place-items-center px-6">
      <form onSubmit={submit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow-soft space-y-4">
        <h1 className="text-2xl font-semibold">Create Account</h1>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className={inputBase} name="name" value={form.name} onChange={onChange} />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className={inputBase} name="email" value={form.email} onChange={onChange} />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className={inputBase} name="password" value={form.password} onChange={onChange} />
        </div>
        <div>
          <label className="block text-sm mb-1">Confirm Password</label>
          <input type="password" className={inputBase} name="confirm" value={form.confirm} onChange={onChange} />
        </div>
        <button className="w-full rounded-lg bg-brand px-4 py-3 font-medium text-white hover:bg-brand/80">Register</button>
        <p className="text-sm text-muted">Already have an account? <Link to="/login" className="text-brand">Login</Link></p>
      </form>
    </section>
  );
}
