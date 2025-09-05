import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form.name, form.email, form.password);
    navigate("/login");
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-gray-100"
      style={{ backgroundImage: "url('/bg.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div
          className="hidden md:block w-full md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.svg')" }}
        ></div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
