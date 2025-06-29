import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/aqomevda", data);
      toast.success("Thanks for reaching out! 🚀");
      reset();
    } catch (err) {
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <section
      name="Contact"
      className="max-w-screen-xl mx-auto px-4 md:px-20 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Let’s Connect
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
          Whether you have a project idea, job opportunity, or just want to say
          hello — I'm always open!
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              placeholder="e.g. Maulik Patel"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">Name is required.</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">Email is required.</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              placeholder="Let's build something great together!"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">Message is required.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
