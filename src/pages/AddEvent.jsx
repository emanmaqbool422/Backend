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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.place) newErrors.place = "Place is required";
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description)
      newErrors.description = "Description is required";

    setErrors(newErrors);

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
            Bayyinah Event Request & Interest Form
          </h2>
          <p className="text-sm text-[#000000d9] sm:text-base leading-relaxed">
            This form allows you to express interest in hosting a Bayyinah
            event. Submission doesn’t guarantee an event.
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
                htmlFor="time"
                className="text-base text-[#000000d9] font-semibold"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="rounded-md px-3 py-2 outline-none focus:border-[#4d0b00]"
              />
              {errors.time && (
                <p className="text-[#4d0b00] text-base">{errors.time}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="date"
                className="text-base text-[#000000d9] font-semibold"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="rounded-md px-3 py-2 outline-none focus:border-[#4d0b00]"
              />
              {errors.date && (
                <p className="text-[#4d0b00] text-base">{errors.date}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label
                htmlFor="place"
                className="text-base text-[#000000d9] font-semibold"
              >
                Place
              </label>
              <input
                type="text"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleChange}
                placeholder="City / Venue"
                className="rounded-md px-3 py-2 outline-none focus:border-[#4d0b00]"
              />
              {errors.place && (
                <p className="text-[#4d0b00] text-base">{errors.place}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label
                htmlFor="title"
                className="text-base text-[#000000d9] font-semibold"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Event title"
                className="rounded-md px-3 py-2 outline-none focus:border-[#4d0b00]"
              />
              {errors.title && (
                <p className="text-[#4d0b00] text-base">{errors.title}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label
                htmlFor="description"
                className="text-base text-[#000000d9] font-semibold"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief event description..."
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
