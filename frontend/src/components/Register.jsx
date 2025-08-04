import { useState } from "react";
import axios from "axios";

function Register({ setView }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://intern-portal-server.onrender.com/api/intern/register", form);
      alert("Registered successfully!");
      setView("login");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="w-80 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            className="w-full border px-4 py-2"
            placeholder="Enter your name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
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
        <button className="w-full bg-blue-600 text-white py-2" type="submit">
          Register
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already registered?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setView("login")}
        >
          Login here
        </span>
      </p>
    </div>
  );
}

export default Register;
