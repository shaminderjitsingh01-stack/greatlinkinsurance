import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Heart, Shield, CheckCircle, Phone, ArrowLeft, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Employee Benefits Guide | GreatLink Insurance',
  description: 'Comprehensive guide to employee benefits insurance in Singapore. Learn about group health insurance, life insurance, and how to design the perfect benefits package.',
};

export default function EmployeeBenefitsGuidePage() {
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
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Employee Benefits Guide
            </h1>
          </div>
          <p className="text-lg text-teal-100">
            Design the perfect benefits package for your team
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Employee benefits are a crucial part of your compensation package. A well-designed benefits
              program helps attract top talent, improve retention, and boost employee morale. This guide
              covers everything you need to know about employee benefits in Singapore.
            </p>
          </div>

          {/* Types of Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-teal-600" />
              Types of Employee Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Group Health Insurance</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Hospitalization and surgical coverage</li>
                  <li>Outpatient medical benefits</li>
                  <li>Specialist consultations</li>
                  <li>Prescription medications</li>
                  <li>Pre and post-hospitalization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Group Term Life Insurance</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Death benefit for beneficiaries</li>
                  <li>Total permanent disability coverage</li>
                  <li>Accidental death benefit</li>
                  <li>Terminal illness benefit</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Group Personal Accident</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Accidental death benefit</li>
                  <li>Permanent disablement</li>
                  <li>Medical expenses from accidents</li>
                  <li>Weekly indemnity for income loss</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Benefits</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Dental coverage</li>
                  <li>Vision care</li>
                  <li>Maternity benefits</li>
                  <li>Mental health support</li>
                  <li>Wellness programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits for Employers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-teal-600" />
              Benefits for Employers
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Attract Talent', desc: 'Competitive benefits help you recruit the best candidates in a tight labor market.' },
                { title: 'Improve Retention', desc: 'Employees are more likely to stay when they feel valued and protected.' },
                { title: 'Tax Deductible', desc: 'Employee benefit premiums are tax-deductible business expenses.' },
                { title: 'Boost Productivity', desc: 'Healthier employees mean fewer sick days and higher productivity.' },
                { title: 'Company Culture', desc: 'Shows you care about employee wellbeing, building loyalty.' },
                { title: 'Cost Effective', desc: 'Group rates are significantly lower than individual policies.' },
              ].map((item, index) => (
                <div key={index} className="bg-teal-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Choose */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-teal-600" />
              How to Choose the Right Plan
            </h2>

            <div className="space-y-4">
              {[
                { step: 1, title: 'Assess Your Workforce', desc: 'Consider the demographics, needs, and preferences of your employees. Younger teams may prefer different benefits than older ones.' },
                { step: 2, title: 'Set Your Budget', desc: 'Determine how much you can allocate for employee benefits. Consider both immediate costs and long-term value.' },
                { step: 3, title: 'Compare Plans', desc: 'Look at coverage levels, network of providers, claim processes, and exclusions across different insurers.' },
                { step: 4, title: 'Consider Flexibility', desc: 'Look for plans that allow customization for different employee tiers or let employees choose add-ons.' },
                { step: 5, title: 'Review Annually', desc: 'Employee needs change. Review and adjust your benefits package regularly to ensure it remains relevant.' },
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

          {/* Key Considerations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600" />
              Key Considerations
            </h2>

            <ul className="space-y-3">
              {[
                'Minimum group size requirements (typically 5+ employees)',
                'Waiting periods for new employees',
                'Pre-existing condition coverage',
                'Panel of hospitals and clinics',
                'Claims process and turnaround time',
                'Renewal terms and premium adjustments',
                'Portability options if employees leave',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Set Up Employee Benefits?</h2>
            <p className="text-teal-100 mb-6">
              Let us help you design a benefits package that attracts and retains top talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
