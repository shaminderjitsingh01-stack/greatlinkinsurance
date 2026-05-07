"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  insuranceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const insuranceTypes = [
  "Motor",
  "Employee Benefits",
  "Property",
  "Travel",
  "Engineering",
  "Surety Bonds",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    insuranceType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);

    if (res.ok) {
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        insuranceType: "",
        message: "",
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } else {
      alert("Something went wrong. Please try again or email us directly at contact@greatlinkinsurance.com");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D9488] to-[#115E59] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-teal-100">
            Get in touch with our team for all your insurance needs
          </p>
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form - Left Side */}
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24
                hours
              </p>

              {submitSuccess && (
                <div className="mt-4 rounded-lg bg-green-50 p-4 border border-green-200">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="ml-2 text-green-700">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    placeholder="+65 9123 4567"
                  />
                </div>

                {/* Company Name Field */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    placeholder="Your company name"
                  />
                </div>

                {/* Insurance Type Dropdown */}
                <div>
                  <label
                    htmlFor="insuranceType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Insurance Type
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white"
                  >
                    <option value="">Select insurance type</option>
                    {insuranceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#0D9488] px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-[#115E59] focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information - Right Side */}
            <div className="space-y-8">
              {/* Contact Details Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#115E59] p-8 text-white">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-teal-100">
                  Reach out to us through any of these channels
                </p>

                <div className="mt-8 space-y-6">
                  {/* Office Address */}
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Office Address</h3>
                      <p className="mt-1 text-teal-100">
                        8 Burn Road, #14-08
                        <br />
                        Trivex
                        <br />
                        Singapore 369977
                      </p>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Phone</h3>
                      <a
                        href="tel:+6560470353"
                        className="mt-1 text-teal-100 hover:text-white transition-colors"
                      >
                        T: (65) 6047 0353
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Email</h3>
                      <a
                        href="mailto:contact@greatlinkinsurance.com"
                        className="mt-1 text-teal-100 hover:text-white transition-colors"
                      >
                        contact@greatlinkinsurance.com
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Operating Hours</h3>
                      <p className="mt-1 text-teal-100">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday & Public Holidays: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.733949743521!2d103.88056972173004!3d1.3358563951638118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da13369ec6f7ab%3A0xa24aa08c0cabfead!2sGreatlink%20Insurance%20Agency%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1770112112839!5m2!1sen!2ssg"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GreatLink Insurance Office Location"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">
              Have Questions?
            </h2>
            <p className="mt-2 text-gray-600">
              Check out our frequently asked questions for quick answers
            </p>
            <a
              href="/faq"
              className="mt-4 inline-flex items-center text-[#0D9488] font-semibold hover:text-[#115E59] transition-colors"
            >
              View FAQs
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
