import Link from "next/link";
import { Building2, Check, Flame, Droplets, Shield, FileText, Phone } from "lucide-react";

const coverageItems = [
  "Fire and lightning damage to buildings and contents",
  "Explosion and aircraft damage",
  "Flood and water damage protection",
  "Theft and burglary coverage",
  "Riot, strike, and malicious damage",
  "Business interruption and loss of income",
  "Plate glass and signage coverage",
  "Machinery and equipment breakdown",
];

const benefits = [
  { title: "Comprehensive Protection", description: "All-risk coverage for buildings, contents, and inventory" },
  { title: "Business Continuity", description: "Cover loss of income during recovery from insured events" },
  { title: "Flexible Sum Insured", description: "Choose coverage amount based on your property value" },
  { title: "Quick Claims Settlement", description: "Efficient claims process to minimize business disruption" },
  { title: "Risk Assessment", description: "Free property risk assessment by our specialists" },
  { title: "Multi-Location Coverage", description: "Single policy for multiple business premises" },
];

const whoNeeds = [
  "Business owners with commercial premises",
  "Retail shop and restaurant operators",
  "Warehouse and factory owners",
  "Office space occupiers",
  "Property developers and landlords",
  "Shopping mall and building management",
];

const relatedServices = [
  { title: "Engineering Insurance", href: "/services/engineering-insurance" },
  { title: "Surety Bonds", href: "/services/surety-bonds" },
  { title: "Employee Benefits", href: "/services/employee-benefits" },
];

export default function PropertyInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Property Insurance</h1>
              <p className="text-xl text-teal-100 mb-8">
                Protect your business premises, equipment, and assets against unforeseen events and disasters.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            <div className="flex-1 hidden lg:flex justify-center">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                <Building2 className="w-40 h-40 text-white/50" />
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
              Our property insurance provides comprehensive protection for your business assets, from buildings to equipment and inventory.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Needs Property Insurance?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Any business with physical assets should have property insurance. Protecting your premises and equipment ensures business continuity even when unexpected events occur.
              </p>
              <ul className="space-y-4">
                {whoNeeds.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Risks in Singapore</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fire incidents from electrical faults or kitchen equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Water damage from flash floods or burst pipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Theft and break-ins during non-business hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Business Property?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get comprehensive property coverage tailored to your business needs. Our experts will help you assess risks and find the right protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Speak to an Advisor
            </Link>
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
