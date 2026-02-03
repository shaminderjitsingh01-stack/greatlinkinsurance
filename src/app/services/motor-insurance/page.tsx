import Link from "next/link";
import { Car, Check, Shield, Clock, FileText, Phone } from "lucide-react";

const coverageItems = [
  "Own damage to your vehicle from accidents, fire, or theft",
  "Third-party bodily injury and death claims",
  "Third-party property damage",
  "Personal accident benefits for driver and passengers",
  "Windscreen damage coverage",
  "Towing and emergency roadside assistance",
  "Loss of use allowance during repairs",
  "Medical expenses for injuries sustained in accidents",
];

const benefits = [
  { title: "24/7 Claims Hotline", description: "Report accidents anytime with our round-the-clock support" },
  { title: "Fast Claims Processing", description: "Get your claims processed within 3-5 working days" },
  { title: "Wide Workshop Network", description: "Access to over 100 authorized repair workshops island-wide" },
  { title: "No Claims Discount", description: "Enjoy up to 50% NCD for claim-free years" },
  { title: "Flexible Payment", description: "Monthly installment options available" },
  { title: "Digital Policy Management", description: "Manage your policy online anytime, anywhere" },
];

const whoNeeds = [
  "Private car owners looking for comprehensive protection",
  "Motorcycle and scooter riders",
  "Commercial vehicle operators (vans, lorries, trucks)",
  "Company fleet managers",
  "Private hire and taxi drivers",
  "Classic and vintage car collectors",
];

const relatedServices = [
  { title: "Travel Insurance", href: "/services/travel-insurance" },
  { title: "Property Insurance", href: "/services/property-insurance" },
  { title: "Surety Bonds", href: "/services/surety-bonds" },
];

export default function MotorInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Motor Insurance</h1>
              <p className="text-xl text-teal-100 mb-8">
                Comprehensive protection for your vehicles on Singapore roads. Drive with confidence knowing you are covered.
              </p>
              <Link
                href="/contact?service=motor-insurance"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            <div className="flex-1 hidden lg:flex justify-center">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                <Car className="w-40 h-40 text-white/50" />
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
              Our motor insurance provides extensive coverage to protect you, your passengers, and your vehicle against various risks on the road.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Needs Motor Insurance?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Motor insurance is mandatory in Singapore for all vehicle owners. Beyond legal compliance, comprehensive coverage protects your financial well-being in case of accidents.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Did You Know?</h3>
              <p className="text-gray-700 mb-4">
                In Singapore, driving without valid motor insurance is a serious offense that can result in fines up to $1,000 and/or imprisonment up to 3 months.
              </p>
              <p className="text-gray-700">
                Make sure your coverage is always up to date with GreatLink Insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get a personalized quote today and discover how affordable comprehensive motor insurance can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=motor-insurance"
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
