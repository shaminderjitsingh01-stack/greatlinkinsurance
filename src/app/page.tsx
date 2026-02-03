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
    title: "Travel Insurance",
    description:
      "Corporate travel coverage for your employees, including medical emergencies and trip cancellation.",
    href: "/services/travel",
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
  { icon: BadgeCheck, text: "Licensed by MAS" },
  { icon: Award, text: "10+ Years Experience" },
  { icon: Users, text: "1000+ Clients" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Protect What Matters Most
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              Singapore&apos;s trusted corporate insurance broker since 2015
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
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0D9488] border-2 border-[#0D9488] rounded-lg hover:bg-[#0D9488] hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 sm:gap-10"
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <badge.icon className="w-5 h-5 text-[#0D9488]" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D9488] to-[#115E59]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              Ready to Get Protected?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-teal-100 mb-10"
            >
              Schedule a free consultation with our insurance experts. We&apos;ll
              analyze your needs and provide tailored recommendations at no
              obligation.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0D9488] bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Us Today
              </Link>
              <a
                href="https://wa.me/6591234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#0D9488] transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-2 bg-[#115E59]" />
    </div>
  );
}
