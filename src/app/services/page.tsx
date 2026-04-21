import Link from "next/link";
import { Car, Users, Building2, Home, Wrench, Shield } from "lucide-react";

const services = [
  {
    title: "Motor Insurance",
    description: "Comprehensive coverage for your vehicles including private cars, motorcycles, and commercial vehicles.",
    icon: Car,
    href: "/services/motor-insurance",
  },
  {
    title: "Employee Benefits",
    description: "Group health insurance, life insurance, and wellness programs to protect and retain your workforce.",
    icon: Users,
    href: "/services/employee-benefits",
  },
  {
    title: "Property Insurance",
    description: "Protect your business premises, equipment, and assets against fire, theft, and natural disasters.",
    icon: Building2,
    href: "/services/property-insurance",
  },
  {
    title: "Domestic Maid Insurance",
    description: "Comprehensive coverage for your domestic helpers, including medical expenses, personal accident, and liability protection.",
    icon: Home,
    href: "/services/domestic-maid",
  },
  {
    title: "Engineering Insurance",
    description: "Specialized coverage for construction projects, machinery breakdown, and engineering risks.",
    icon: Wrench,
    href: "/services/engineering-insurance",
  },
  {
    title: "Surety Bonds",
    description: "Performance bonds, bid bonds, and guarantees to support your business contracts and tenders.",
    icon: Shield,
    href: "/services/surety-bonds",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Insurance Solutions</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            GreatLink Insurance offers comprehensive coverage tailored to protect what matters most to you and your business.
            Explore our range of insurance products designed for individuals and enterprises in Singapore.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Coverage for Every Need</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From personal protection to business solutions, we have the right insurance product for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <IconComponent className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-teal-600 font-medium inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Sure Which Coverage You Need?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced insurance advisors are here to help you find the perfect coverage for your unique situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Speak with an Advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
