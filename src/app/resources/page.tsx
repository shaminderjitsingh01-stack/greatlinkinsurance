import Link from "next/link";
import { FileText, Car, Users, Building2, ClipboardCheck, ArrowRight } from "lucide-react";

const featuredArticle = {
  title: "What to Do in a Car Accident in Singapore",
  description: "A comprehensive step-by-step guide on what to do if you are involved in a road accident. Learn the proper procedures, important contacts, and documentation requirements.",
  href: "/resources/accident-guide",
  icon: Car,
};

const resources = [
  {
    title: "What to Do in an Accident",
    description: "Step-by-step guide on handling road accidents in Singapore, including emergency contacts and documentation tips.",
    href: "/resources/accident-guide",
    icon: Car,
    category: "Guide",
  },
  {
    title: "Understanding Motor Insurance",
    description: "Learn about the different types of motor insurance coverage, NCD, and how to choose the right policy for your vehicle.",
    href: "/resources/motor-insurance-guide",
    icon: FileText,
    category: "Educational",
  },
  {
    title: "Employee Benefits 101",
    description: "A guide for employers on designing competitive benefits packages that attract and retain talent.",
    href: "/resources/employee-benefits-guide",
    icon: Users,
    category: "Educational",
  },
  {
    title: "Business Insurance Checklist",
    description: "Essential insurance coverage checklist for SMEs and businesses operating in Singapore.",
    href: "/resources/business-checklist",
    icon: ClipboardCheck,
    category: "Checklist",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Resources & Guides</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Helpful articles, guides, and checklists to help you understand insurance better and make informed decisions for yourself and your business.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Link
            href={featuredArticle.href}
            className="block bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-8 md:p-12 hover:shadow-lg transition-shadow group"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <featuredArticle.icon className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-teal-600 text-white text-sm font-medium rounded-full mb-4">
                  Essential Guide
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{featuredArticle.description}</p>
                <span className="inline-flex items-center text-teal-600 font-semibold group-hover:gap-3 transition-all">
                  Read the full guide
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  {/* Thumbnail placeholder */}
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <IconComponent className="w-20 h-20 text-gray-400 group-hover:text-teal-500 transition-colors" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-3">
                      {resource.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <span className="inline-flex items-center text-teal-600 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our insurance experts are here to help you understand your coverage needs and find the right solutions for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
