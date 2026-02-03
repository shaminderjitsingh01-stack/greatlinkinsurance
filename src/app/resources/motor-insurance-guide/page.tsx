import { Metadata } from 'next';
import Link from 'next/link';
import { Car, Shield, FileText, AlertTriangle, CheckCircle, Phone, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Motor Insurance Guide | GreatLink Insurance',
  description: 'Complete guide to motor insurance in Singapore. Learn about coverage types, premiums, NCD, claims process, and how to choose the right policy for your vehicle.',
};

export default function MotorInsuranceGuidePage() {
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
              <Car className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Motor Insurance Guide
            </h1>
          </div>
          <p className="text-lg text-teal-100">
            Everything you need to know about motor insurance in Singapore
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Motor insurance is mandatory for all vehicle owners in Singapore. This comprehensive guide
              will help you understand the different types of coverage, how premiums are calculated, and
              what to do in case of an accident.
            </p>
          </div>

          {/* Types of Coverage */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-teal-600" />
              Types of Motor Insurance Coverage
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Third Party Only (TPO)</h3>
                <p className="text-gray-600 mb-4">
                  The minimum legal requirement in Singapore. Covers damage or injury caused to
                  other people and their property, but not your own vehicle.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Bodily injury to third parties</li>
                  <li>Property damage to third parties</li>
                  <li>Legal costs for defending claims</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Third Party, Fire & Theft (TPFT)</h3>
                <p className="text-gray-600 mb-4">
                  Includes all TPO coverage plus protection against fire damage and vehicle theft.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>All TPO coverage</li>
                  <li>Fire damage to your vehicle</li>
                  <li>Theft of your vehicle</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Comprehensive Coverage</h3>
                  <span className="px-2 py-1 bg-teal-600 text-white text-xs rounded-full">Recommended</span>
                </div>
                <p className="text-gray-600 mb-4">
                  The most complete protection for your vehicle. Covers your own vehicle damage
                  in addition to all TPFT coverage.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>All TPFT coverage</li>
                  <li>Accidental damage to your own vehicle</li>
                  <li>Personal accident benefits</li>
                  <li>Medical expenses</li>
                  <li>Optional add-ons (windscreen, NCD protector, etc.)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Understanding NCD */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-teal-600" />
              Understanding No Claim Discount (NCD)
            </h2>

            <p className="text-gray-600 mb-6">
              NCD is a discount on your premium for every year you don&apos;t make a claim. The longer you
              go without claims, the higher your discount.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="px-4 py-3 text-left">Claim-Free Years</th>
                    <th className="px-4 py-3 text-left">NCD Discount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white"><td className="px-4 py-3">1 year</td><td className="px-4 py-3">10%</td></tr>
                  <tr className="bg-gray-50"><td className="px-4 py-3">2 years</td><td className="px-4 py-3">20%</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">3 years</td><td className="px-4 py-3">30%</td></tr>
                  <tr className="bg-gray-50"><td className="px-4 py-3">4 years</td><td className="px-4 py-3">40%</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">5+ years</td><td className="px-4 py-3">50%</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* What to Do in an Accident */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-teal-600" />
              What to Do in an Accident
            </h2>

            <div className="space-y-4">
              {[
                { step: 1, title: 'Ensure Safety First', desc: 'Check for injuries. If anyone is hurt, call 995 for emergency medical services immediately.' },
                { step: 2, title: 'Move Vehicles if Possible', desc: 'If the accident is minor and vehicles are movable, move them to the side to avoid obstructing traffic.' },
                { step: 3, title: 'Exchange Information', desc: 'Get the other party\'s name, NRIC, contact number, vehicle number, and insurance details.' },
                { step: 4, title: 'Document the Scene', desc: 'Take photos of all vehicles involved, damage, road conditions, and any relevant signage.' },
                { step: 5, title: 'Report to Police if Required', desc: 'Report within 24 hours if there are injuries, hit-and-run, government property damage, or foreign vehicles involved.' },
                { step: 6, title: 'Notify Your Insurer', desc: 'Report the accident to your insurance company within 24 hours. We can help you with the claims process.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600" />
              Tips for Lower Premiums
            </h2>

            <ul className="space-y-3">
              {[
                'Maintain your NCD by driving safely and avoiding claims for minor damages',
                'Install approved anti-theft devices in your vehicle',
                'Consider a higher excess to lower your premium',
                'Compare quotes from multiple insurers',
                'Bundle your motor insurance with other policies',
                'Name experienced drivers with good records on your policy',
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help with Motor Insurance?</h2>
            <p className="text-teal-100 mb-6">
              Our experts can help you find the best coverage at competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get a Quote
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
