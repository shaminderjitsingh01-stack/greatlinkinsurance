import Link from "next/link";
import { Plane, Check, Globe, Clock, Heart, FileText, Phone } from "lucide-react";

const coverageItems = [
  "Trip cancellation and curtailment",
  "Medical expenses and emergency evacuation",
  "Personal accident coverage",
  "Baggage loss, theft, and delay",
  "Flight delay and missed connections",
  "Personal liability coverage",
  "Travel document loss",
  "24/7 worldwide emergency assistance",
];

const benefits = [
  { title: "Worldwide Coverage", description: "Protection in over 180 countries across the globe" },
  { title: "24/7 Assistance", description: "Round-the-clock emergency support wherever you are" },
  { title: "Cashless Medical Care", description: "Direct billing at partner hospitals worldwide" },
  { title: "Instant Policy", description: "Get covered in minutes with our digital application" },
  { title: "Family Plans", description: "Affordable coverage for the whole family" },
  { title: "Annual Multi-Trip", description: "Save more with yearly coverage for frequent travelers" },
];

const whoNeeds = [
  "Business travelers with frequent overseas trips",
  "Leisure travelers and families on vacation",
  "Students studying abroad",
  "Adventure sports enthusiasts",
  "Seniors traveling for leisure or medical treatment",
  "Corporate travel programs",
];

const relatedServices = [
  { title: "Motor Insurance", href: "/services/motor-insurance" },
  { title: "Employee Benefits", href: "/services/employee-benefits" },
  { title: "Property Insurance", href: "/services/property-insurance" },
];

export default function TravelInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Insurance</h1>
              <p className="text-xl text-teal-100 mb-8">
                Travel with peace of mind knowing you are protected against unexpected events wherever your journey takes you.
              </p>
              <Link
                href="/contact?service=travel-insurance"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            <div className="flex-1 hidden lg:flex justify-center">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                <Plane className="w-40 h-40 text-white/50" />
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
              Our travel insurance provides comprehensive protection from the moment you leave home until you return, covering medical emergencies, trip disruptions, and more.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Needs Travel Insurance?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Anyone traveling outside Singapore should have travel insurance. Medical costs abroad can be extremely high, and trip disruptions can result in significant financial losses.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Travel Insurance Matters</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Medical treatment in the US can cost $10,000+ per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Flight delays can disrupt connections and bookings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Emergency evacuation can cost $50,000 or more</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get covered before your trip and travel with confidence. Our instant online application makes it easy to get protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=travel-insurance"
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
