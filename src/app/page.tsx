"use client";

import { motion } from "framer-motion";
import {
  Car,
  Users,
  Building2,
  Plane,
  Wrench,
  Shield,
  Award,
  Clock,
  BadgeCheck,
  Banknote,
  Star,
  Phone,
  MessageCircle,
  ChevronRight,
  ClipboardCheck,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Services data
const services = [
  {
    icon: Car,
    title: "Motor Insurance",
    description:
      "Comprehensive coverage for your fleet vehicles, including commercial and private motor insurance.",
    href: "/services/motor",
  },
  {
    icon: Users,
    title: "Employee Benefits",
    description:
      "Group health insurance, dental plans, and comprehensive employee welfare packages.",
    href: "/services/employee-benefits",
  },
  {
    icon: Building2,
    title: "Property Insurance",
    description:
      "Protect your commercial and industrial properties against fire, theft, and natural disasters.",
    href: "/services/property",
  },
  {
    icon: Plane,
    title: "Domestic Maid Insurance",
    description:
      "Comprehensive coverage for your domestic helpers, including medical expenses, personal accident, and liability protection.",
    href: "/services/domestic-maid",
  },
  {
    icon: Wrench,
    title: "Engineering Insurance",
    description:
      "Coverage for construction projects, machinery breakdown, and contractor all risks.",
    href: "/services/engineering",
  },
  {
    icon: Shield,
    title: "Surety Bonds",
    description:
      "Performance bonds, bid bonds, and advance payment guarantees for your business contracts.",
    href: "/services/surety-bonds",
  },
];

// Why choose us data
const features = [
  {
    icon: Award,
    title: "Expert Advice",
    description:
      "Our experienced brokers provide personalized solutions tailored to your business needs.",
  },
  {
    icon: BadgeCheck,
    title: "Wide Coverage",
    description:
      "Access to comprehensive insurance options from Singapore's top insurers.",
  },
  {
    icon: Clock,
    title: "Fast Claims",
    description:
      "Quick and hassle-free claims processing with dedicated support throughout.",
  },
  {
    icon: Banknote,
    title: "Competitive Rates",
    description:
      "We negotiate the best prices without compromising on coverage quality.",
  },
];

// Testimonials data
const testimonials = [
  {
    quote:
      "GreatLink has been managing our company's insurance portfolio for over 5 years. Their expertise and responsiveness are unmatched.",
    name: "David Tan",
    company: "TechVenture Pte Ltd",
    rating: 5,
  },
  {
    quote:
      "The team helped us save 30% on our employee benefits package while improving coverage. Highly recommended!",
    name: "Sarah Lim",
    company: "Marina Bay Logistics",
    rating: 5,
  },
  {
    quote:
      "When we had a major claim, GreatLink guided us through the entire process. Settlement was faster than expected.",
    name: "Michael Wong",
    company: "Orchard Properties Group",
    rating: 5,
  },
];

// Trust badges
const trustBadges = [
  { icon: BadgeCheck, text: "Licensed by GIA" },
  { icon: Award, text: "Trusted Broker" },
  { icon: Users, text: "Expert Team" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-teal-900/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            >
              Solving Your Insurance Needs
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
            >
              Singapore trusted corporate insurance agency
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#0D9488] rounded-lg hover:bg-[#115E59] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get a Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://calendly.com/greatlinkinsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#0D9488] transition-all duration-300"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book a Meeting
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 sm:gap-10"
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/90"
                >
                  <badge.icon className="w-5 h-5 text-teal-400" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Insurance Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive corporate insurance solutions tailored for
              Singapore businesses
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#F0FDFA] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0D9488] transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#0D9488] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#0D9488] font-medium hover:text-[#115E59] transition-colors"
                >
                  Learn More
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#F0FDFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose GreatLink
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We go beyond just selling policies - we become your trusted
              insurance partner
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Trusted by hundreds of Singapore businesses
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-[#F0FDFA] rounded-2xl p-8 relative"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-[#0D9488] opacity-20">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get a Quote & CTA Section (Merged) */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0c4a44] to-[#0D9488]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(13,148,136,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(45,212,191,0.2),transparent_60%)]" />

        {/* Decorative blurred orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M60 0H0v60\' fill=\'none\' stroke=\'%23fff\' stroke-width=\'.5\'/%3E%3C/svg%3E")' }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            {/* Heading */}
            <motion.div variants={fadeInUp} className="text-center mb-14 sm:mb-18">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 text-teal-300 text-sm font-semibold rounded-full mb-6 border border-white/15 backdrop-blur-sm">
                <ClipboardCheck className="w-4 h-4" />
                Quick & Easy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to Get Protected?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Answer a few quick questions and get personalized insurance recommendations tailored to your business needs.
              </p>
            </motion.div>

            {/* 3-Step Cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-18"
            >
              {[
                { step: "1", title: "Tell Us About You", desc: "Business type, size, and industry", icon: Users },
                { step: "2", title: "Select Your Needs", desc: "Choose from 6 insurance categories", icon: Shield },
                { step: "3", title: "Get Recommendations", desc: "Receive a tailored coverage plan", icon: ClipboardCheck },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="group relative bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-2xl p-8 text-center hover:bg-white/[0.12] hover:border-teal-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10"
                >
                  {/* Connector line between cards (hidden on mobile) */}
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-1/2 -right-3 sm:-right-4 w-6 sm:w-8 h-[2px] bg-gradient-to-r from-white/30 to-white/10 z-10" />
                  )}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-teal-500/40 ring-4 ring-gray-900/30">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-white/15 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-5 mt-3 group-hover:from-white/25 group-hover:to-white/10 transition-all duration-500">
                    <item.icon className="w-8 h-8 text-teal-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-gray-900 bg-gradient-to-r from-white to-gray-100 rounded-xl hover:from-gray-50 hover:to-white transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <ClipboardCheck className="mr-2 w-5 h-5 text-[#0D9488]" />
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5 text-[#0D9488]" />
                </Link>
                <a
                  href="https://calendly.com/greatlinkinsurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Meeting
                </a>
              </div>
              <p className="text-white/40 text-sm mt-6">No obligation. Takes under 2 minutes.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-2 bg-[#115E59]" />
    </div>
  );
}
