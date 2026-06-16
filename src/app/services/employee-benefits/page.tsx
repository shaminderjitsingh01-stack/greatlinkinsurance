import Link from "next/link";
import { Users, Check, Heart, Shield, Briefcase, Phone } from "lucide-react";

const coverageItems = [
  "Group hospitalization and surgical insurance",
  "Outpatient medical coverage including GP and specialist visits",
  "Group term life insurance",
  "Group personal accident coverage",
  "Dental and vision care benefits",
  "Maternity coverage and family planning",
  "Mental health and counseling services",
  "Wellness programs and health screenings",
];

const benefits = [
  { title: "Attract Top Talent", description: "Competitive benefits help you recruit the best employees" },
  { title: "Improve Retention", description: "Employees are more likely to stay with comprehensive coverage" },
  { title: "Tax Benefits", description: "Employee benefit premiums are tax-deductible business expenses" },
  { title: "Flexible Plans", description: "Customize coverage levels for different employee tiers" },
  { title: "Easy Administration", description: "Streamlined enrollment and claims management portal" },
  { title: "Volume Discounts", description: "Lower per-employee costs with group coverage" },
];

const whoNeeds = [
  "SMEs looking to provide competitive employee benefits",
  "Large corporations with diverse workforce needs",
  "Startups wanting to attract top talent",
  "Companies with regional or overseas employees",
  "Organizations reviewing their current benefits package",
  "HR departments seeking streamlined administration",
];

const relatedServices = [
  { title: "Property Insurance", href: "/services/property-insurance" },
  { title: "Surety Bonds", href: "/services/surety-bonds" },
  { title: "Engineering Insurance", href: "/services/engineering-insurance" },
];

export default function EmployeeBenefitsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Employee Benefits</h1>
              <p className="text-xl text-teal-100 mb-8">
                Comprehensive group insurance solutions to protect your most valuable asset - your employees.
              </p>
            </div>
            <div className="flex-1 hidden lg:flex justify-center">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                <Users className="w-40 h-40 text-white/50" />
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
              Our employee benefits packages are designed to provide holistic coverage for your workforce, from medical care to life protection.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Benefits for Employers</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Needs Employee Benefits?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Every business that values its workforce should consider comprehensive employee benefits. It is not just about compliance - it is about creating a workplace where people want to stay and grow.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The GreatLink Advantage</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager for your company</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Access to panel of A-rated insurers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Annual benefits review and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Enhance Your Employee Benefits?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let us design a benefits package that helps you attract and retain the best talent while managing costs effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
