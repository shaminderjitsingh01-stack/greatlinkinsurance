import Link from "next/link";
import { Shield, Check, FileCheck, Handshake, Award, FileText, Phone } from "lucide-react";

const coverageItems = [
  "Performance bonds for contract completion guarantees",
  "Bid bonds for tender security",
  "Advance payment bonds",
  "Retention money bonds",
  "Maintenance bonds for defects liability period",
  "Customs and excise bonds",
  "Foreign worker security bonds",
  "Court bonds and legal guarantees",
];

const benefits = [
  { title: "Fast Approval", description: "Quick turnaround for urgent tender submissions" },
  { title: "Competitive Rates", description: "Best rates from our panel of top-rated insurers" },
  { title: "High Bond Limits", description: "Capacity for large-value contracts and projects" },
  { title: "Expert Guidance", description: "Advice on bond requirements and documentation" },
  { title: "Flexible Terms", description: "Bond periods aligned with your project timelines" },
  { title: "Claims Support", description: "Professional handling if bond calls arise" },
];

const whoNeeds = [
  "Construction contractors bidding for projects",
  "Government and GLC project contractors",
  "IT and services companies with government contracts",
  "Importers requiring customs bonds",
  "Employers of foreign workers",
  "Companies in legal proceedings requiring court bonds",
];

const relatedServices = [
  { title: "Engineering Insurance", href: "/services/engineering-insurance" },
  { title: "Property Insurance", href: "/services/property-insurance" },
  { title: "Employee Benefits", href: "/services/employee-benefits" },
];

export default function SuretyBondsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Surety Bonds</h1>
              <p className="text-xl text-teal-100 mb-8">
                Performance bonds, bid bonds, and guarantees to support your business contracts and tender submissions.
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
                <Shield className="w-40 h-40 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Covered */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Surety Bonds</h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide a full range of surety bonds to support your business operations, from tender submissions to project completion guarantees.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Needs Surety Bonds?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Surety bonds are essential for businesses that need to provide financial guarantees to clients, government agencies, or other parties as part of their contractual obligations.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bond vs Bank Guarantee</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Preserve Credit Lines</span>
                    <p className="text-gray-600 text-sm">Insurance bonds do not affect your bank credit facilities</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Handshake className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">No Collateral Required</span>
                    <p className="text-gray-600 text-sm">Bonds typically require less security than bank guarantees</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Competitive Pricing</span>
                    <p className="text-gray-600 text-sm">Often more cost-effective than bank guarantee fees</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Bond for Your Next Project?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get competitive quotes for performance bonds, bid bonds, and other guarantees. Our team specializes in fast turnaround for urgent requirements.
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
