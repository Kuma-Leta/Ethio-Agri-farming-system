import React, { useState } from "react";
import axios, { AxiosError } from "axios";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/userRoutes/login",
        formData
      );
      if (response.status === 200) {
        console.log("Login successful", response.data);
        // Redirect or save token to localStorage
        localStorage.setItem("token", response.data.token);
        window.location.href = "/dashboard"; // Replace with your dashboard route
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        setErrorMessage(axiosError.response.data.message);
      } else {
        setErrorMessage("An error occurred during login.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        {errorMessage && (
          <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
        )}
      </form>
      <p className="mt-4 text-gray-600">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Register here
        </a>
        .
      </p>
    </div>
  );
};

export default Login;
