import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation Function
  const validate = () => {
    let newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

 // Password Validation
if (!formData.password) {
  newErrors.password = "Password is required";
} else if (
  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    formData.password
  )
) {
  newErrors.password =
    "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special character and be at least 8 characters long";
}

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);

      alert("Registration Successful!");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-[350px] flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h2>

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black w-full"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black w-full"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black w-full"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;