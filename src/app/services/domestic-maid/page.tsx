import Link from "next/link";
import { Home, Check, Calendar } from "lucide-react";

const coverageItems = [
  "Personal accident — death and permanent disability",
  "Medical and hospitalisation expenses",
  "Third-party liability coverage",
  "Repatriation expenses",
  "Wages compensation during hospitalisation",
  "Theft coverage by domestic helper",
  "Maid replacement costs",
  "24/7 emergency assistance",
];

const benefits = [
  { title: "MOM Compliant", description: "Policies meet all Ministry of Manpower requirements for work permit holders" },
  { title: "Fast Issuance", description: "Policy issued quickly so your helper can start work without delay" },
  { title: "Competitive Premiums", description: "Affordable rates with comprehensive coverage tailored to your needs" },
  { title: "Easy Claims", description: "Straightforward claims process with dedicated support" },
  { title: "Annual Renewal", description: "Hassle-free annual renewal aligned with your helper's work permit" },
  { title: "Add-On Options", description: "Enhance your plan with additional coverage options as needed" },
];

const whoNeeds = [
  "Families employing a foreign domestic worker in Singapore",
  "Employers renewing their helper's work permit",
  "Employers hiring a new domestic helper for the first time",
  "Households requiring MOM-compliant insurance coverage",
];

const relatedServices = [
  { title: "Employee Benefits", href: "/services/employee-benefits" },
  { title: "Motor Insurance", href: "/services/motor-insurance" },
  { title: "Property Insurance", href: "/services/property-insurance" },
];

export default function DomesticMaidInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Domestic Maid Insurance</h1>
              <p className="text-xl text-teal-100 mb-8">
                Protect your domestic helper and your household with comprehensive MOM-compliant coverage — giving you peace of mind at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/greatlinkinsurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Meeting
                </a>
              </div>
            </div>
            <div className="flex-1 hidden lg:flex justify-center">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                <Home className="w-40 h-40 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Covered */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Covered</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our domestic maid insurance provides comprehensive protection for your helper and your household, covering medical emergencies, accidents, and liability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Needs This Insurance?</h2>
              <p className="text-lg text-gray-600 mb-8">
                In Singapore, employers of foreign domestic workers are required by MOM to purchase a personal accident policy and a security bond. Our plans ensure you are fully compliant.
              </p>
              <ul className="space-y-4">
                {whoNeeds.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MOM Requirements</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Personal accident insurance is mandatory for all foreign domestic workers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Coverage must be maintained throughout the validity of the work permit</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Minimum sum assured of S$60,000 for accidental death and permanent disability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Covered Today</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Ensure your domestic helper is protected and your household is compliant. Get a quote in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/greatlinkinsurance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Meeting
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="p-6 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all"
              >
                <span className="text-lg font-medium text-gray-900 hover:text-teal-600">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
