import { useState } from "react";
import axios from "axios";

function Login({ setView, setIntern }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://intern-portal-server.onrender.com/api/intern/login", form);
      setIntern(res.data);
      setView("dashboard");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="w-80 space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-4 py-2"
            placeholder="Enter your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border px-4 py-2"
            placeholder="Enter your password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button className="w-full bg-green-600 text-white py-2" type="submit">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <span
          className="text-green-500 cursor-pointer"
          onClick={() => setView("register")}
        >
          Register here
        </span>
      </p>
    </div>
  );
}

export default Login;
