import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) return setError("Please enter email & password");
    // fake auth
    if (email.includes("@") && password.length >= 4) {
      nav("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="min-h-[70vh] grid place-items-center px-6">
      <form onSubmit={submit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow-soft space-y-4">
        <h1 className="text-2xl font-semibold">Login</h1>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand/40"
                 value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand/40"
                 value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className="w-full rounded-lg bg-brand px-4 py-3 font-medium text-white hover:bg-brand/80">Login</button>
        <p className="text-sm text-muted">No account? <Link to="/register" className="text-brand">Register</Link></p>
      </form>
    </section>
  );
}
