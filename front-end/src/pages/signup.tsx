import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { IUser } from "../interfaces/userInterface";
import dotenv from "dotenv";
dotenv.config();

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<IUser>({
    fullName: "",
    phoneNumber: "",
    language: "en",
    email: "",
    password: "",
    region: "",
    subscription: false,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/userRoutes/register`,
        formData
      );

      if (response.status === 201) {
        console.log("User registered successfully:", response.data);
        // You can redirect the user or show a success message here
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        setErrorMessage(`Error: ${axiosError.response.data.message}`);
      } else if (axiosError.request) {
        setErrorMessage("Error: No response from server.");
      } else {
        setErrorMessage(`Error: ${axiosError.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Register as a Farmer</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          aria-label="Full Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          aria-label="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          aria-label="Password"
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          aria-label="Phone Number"
        />
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          aria-label="Language"
        >
          <option value="en">English</option>
          <option value="am">Amharic</option>
          <option value="om">Oromo</option>
        </select>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          aria-label="Region"
        >
          <option value="oromia">Oromia</option>
          <option value="amhara">Amhara</option>
          <option value="afar">Afar</option>
          <option value="somali">Somali</option>
          <option value="tigrai">Tigray</option>
          <option value="benishangul">Benishangul</option>
          <option value="south">South</option>
          <option value="gambela">Gambela</option>
          <option value="harar">Harar</option>
        </select>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            name="subscription"
            checked={formData.subscription}
            onChange={handleChange}
            className="mr-2"
            aria-label="Subscribe to updates"
          />
          Subscribe to updates
        </label>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
        {errorMessage && (
          <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
        )}
      </form>
      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login here
        </a>
        .
      </p>
    </div>
  );
};

export default Signup;
