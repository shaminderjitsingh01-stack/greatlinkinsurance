import { Metadata } from 'next';
import Link from 'next/link';
import { ClipboardList, CheckCircle, Shield, Building2, Users, Car, Wrench, Phone, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Insurance Checklist | GreatLink Insurance',
  description: 'Complete checklist of insurance coverage every Singapore business needs. Ensure your business is fully protected with this comprehensive guide.',
};

export default function BusinessChecklistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center text-teal-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Business Insurance Checklist
            </h1>
          </div>
          <p className="text-lg text-teal-100">
            Essential coverage every Singapore business needs
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Running a business comes with risks. This comprehensive checklist helps you identify
              the insurance coverage you need to protect your business, employees, and assets.
              Use this guide to review your current coverage and identify any gaps.
            </p>
          </div>

          {/* Essential Coverage */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-teal-600" />
              Essential Coverage for All Businesses
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Work Injury Compensation (WIC)',
                  desc: 'Mandatory for all employees. Covers medical expenses, permanent incapacity, and death benefits for work-related injuries.',
                  mandatory: true,
                },
                {
                  title: 'Public Liability Insurance',
                  desc: 'Protects against claims from third parties for bodily injury or property damage occurring at your premises or due to your operations.',
                  mandatory: false,
                },
                {
                  title: 'Professional Indemnity Insurance',
                  desc: 'Essential for service providers. Covers claims arising from professional negligence, errors, or omissions.',
                  mandatory: false,
                },
                {
                  title: 'Property / Fire Insurance',
                  desc: 'Protects your business premises, equipment, inventory, and contents against fire, theft, and natural disasters.',
                  mandatory: false,
                },
                {
                  title: 'Business Interruption Insurance',
                  desc: 'Covers loss of income and ongoing expenses if your business is disrupted due to an insured event.',
                  mandatory: false,
                },
              ].map((item, index) => (
                <div key={index} className={`p-5 rounded-xl ${item.mandatory ? 'bg-red-50 border-2 border-red-200' : 'bg-gray-50'}`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle className={`w-6 h-6 flex-shrink-0 ${item.mandatory ? 'text-red-500' : 'text-teal-600'}`} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.mandatory && (
                          <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">Mandatory</span>
                        )}
                      </div>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry-Specific Coverage */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-teal-600" />
              Industry-Specific Coverage
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Construction & Engineering</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Contractor All Risks (CAR)',
                    'Erection All Risks (EAR)',
                    'Performance Bonds',
                    'Machinery Breakdown',
                    'Third Party Liability',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Logistics & Transport</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Commercial Vehicle Insurance',
                    'Goods in Transit',
                    'Marine Cargo Insurance',
                    'Warehouse Coverage',
                    'Fleet Insurance',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Retail & F&B</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Shop Insurance Package',
                    'Product Liability',
                    'Food Contamination',
                    'Cash in Premises',
                    'Plate Glass Coverage',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Professional Services</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Professional Indemnity',
                    'Directors & Officers Liability',
                    'Cyber Liability',
                    'Employment Practices Liability',
                    'Fidelity Guarantee',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Employee Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-teal-600" />
              Employee Benefits Checklist
            </h2>

            <div className="bg-teal-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Group Hospitalization & Surgical',
                  'Outpatient Medical Benefits',
                  'Group Term Life Insurance',
                  'Group Personal Accident',
                  'Dental Coverage',
                  'Maternity Benefits',
                  'Mental Health Coverage',
                  'Annual Health Screening',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <div className="w-5 h-5 border-2 border-teal-600 rounded flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-teal-600 rounded-sm opacity-0 hover:opacity-100 transition-opacity" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Assessment */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Assessment Questions</h2>
            <div className="space-y-4">
              {[
                'Do you have employees? → Work Injury Compensation is mandatory',
                'Do customers or public visit your premises? → Consider Public Liability',
                'Do you provide professional advice or services? → Consider Professional Indemnity',
                'Do you own or lease business premises? → Consider Property/Fire Insurance',
                'Do you have company vehicles? → Motor Insurance is mandatory',
                'Do you handle customer data? → Consider Cyber Liability',
                'Are you involved in construction/projects? → Consider CAR/Surety Bonds',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Not Sure What Coverage You Need?</h2>
            <p className="text-teal-100 mb-6">
              Let our experts conduct a free risk assessment for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get a Free Assessment
              </Link>
              <a
                href="tel:+6560470353"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
