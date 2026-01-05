import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    time: "",
    date: "",
    place: "",
    title: "",
    description: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.description)
      newErrors.description = "Description is required";

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/events");
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto my-8 sm:my-10 md:my-14 p-5 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-lg custom-bg font-[Rubik] flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl text-[#000000d9] sm:text-2xl md:text-3xl font-semibold">
            Register for a Bayyinah Event
          </h2>
          <p className="text-sm text-[#000000d9] sm:text-base leading-relaxed">
            Fill out this form to register your interest in attending
            a Bayyinah event. Your submission helps us connect with you and plan
            meaningful events in your community. Please note that submitting
            this form does not guarantee a spot, but our team will review your
            request and get in touch with you.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg text-[#000000d9] sm:text-xl font-semibold">
            Basic Contact Information
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-base text-[#000000d9] font-semibold"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-md px-3 py-2 outline-none focus:border-[#4d0b00]"
              />
              {errors.name && (
                <p className="text-[#4d0b00] text-base">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="lastname"
                className="text-base text-[#000000d9] font-semibold"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="rounded-md px-3 py-2 outline-none focus:border-[#4d0b00]"
              />
              {errors.lastname && (
                <p className="text-[#4d0b00] text-base">{errors.lastname}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label
                htmlFor="email"
                className="text-base text-[#000000d9] font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="rounded-md px-3 py-2 outline-none focus:border-[#4d0b00]"
              />
              {errors.email && (
                <p className="text-[#4d0b00] text-base">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label
                htmlFor="password"
                className="text-base text-[#000000d9] font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="rounded-md px-3 py-2 outline-none focus:border-[#4d0b00]"
              />
              {errors.password && (
                <p className="text-[#4d0b00] text-base">{errors.password}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label
                htmlFor="Write about you"
                className="text-base text-[#000000d9] font-semibold"
              >
                Write about you
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description..."
                className="rounded-md px-3 py-2 outline-none focus:outline-none resize-none"
              />
              {errors.description && (
                <p className="text-[#4d0b00] text-base">{errors.description}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-fit px-6 py-3 rounded-lg font-semibold transition-all bg-[#841400] text-[#fff]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddEvent;
