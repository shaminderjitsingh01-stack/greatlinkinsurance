'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Car, Building2, FileText, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: 'General Questions',
    icon: <HelpCircle className="w-6 h-6" />,
    items: [
      {
        question: 'What is GreatLink Insurance Agency?',
        answer: 'GreatLink Insurance Agency Pte Ltd is a trusted insurance brokerage in Singapore. We apply our experiences and expertise via linking our customers to reputable insurers, helping them understand and protecting them from various risks, giving them a safety net to move forward with their life and businesses with peace of mind.',
      },
      {
        question: 'Are you licensed by MAS?',
        answer: 'Yes, GreatLink Insurance Agency is fully licensed and regulated by the Monetary Authority of Singapore (MAS). We adhere to strict compliance standards and ethical practices to ensure the highest level of service and protection for our clients.',
      },
      {
        question: 'What industries do you specialize in?',
        answer: 'Our key clients are from sectors of construction engineering, logistics, and motor trade industry. These sectors demand fast, reliable and value for money insurance quotes. We strive to be the leader in performing our core competencies.',
      },
      {
        question: 'How do I get a quote?',
        answer: 'Getting a quote is easy! You can use our interactive quote tool on our website, contact us through our contact form, call our hotline at +65 6047 0353, or send us a WhatsApp message at +65 9111 6707. Our team will get back to you with a personalized quote within 24 hours.',
      },
    ],
  },
  {
    title: 'Motor Insurance',
    icon: <Car className="w-6 h-6" />,
    items: [
      {
        question: 'What does motor insurance cover?',
        answer: 'Motor insurance in Singapore typically covers third-party liability, own damage (comprehensive plans), personal accident benefits, and medical expenses. Additional coverage options include windscreen protection, 24-hour roadside assistance, and coverage for named drivers. The exact coverage depends on your chosen plan.',
      },
      {
        question: 'Is motor insurance mandatory in Singapore?',
        answer: 'Yes, motor insurance is mandatory in Singapore. At minimum, all vehicle owners must have third-party liability coverage as required by law. This covers damages or injuries caused to other people and their property. However, we recommend comprehensive coverage for better protection.',
      },
      {
        question: 'How do I file a motor insurance claim?',
        answer: 'To file a motor insurance claim: 1) Report the accident to the police within 24 hours if required. 2) Take photos of the damage and scene. 3) Exchange information with other parties involved. 4) Contact us immediately with the details. 5) Submit all required documents including the police report, photos, and repair estimates. Our team will guide you through the entire process.',
      },
      {
        question: 'What affects my motor insurance premium?',
        answer: 'Several factors affect your premium: your age and driving experience, vehicle make and model, claim history, No Claim Discount (NCD), type of coverage chosen, and any additional riders. Young drivers and high-performance vehicles typically have higher premiums. Maintaining a clean driving record helps reduce costs over time.',
      },
    ],
  },
  {
    title: 'Corporate Insurance',
    icon: <Building2 className="w-6 h-6" />,
    items: [
      {
        question: 'What is employee benefits insurance?',
        answer: 'Employee benefits insurance is a package of insurance coverages provided by employers to their employees. This typically includes group health insurance, group term life insurance, group personal accident coverage, and sometimes dental and outpatient benefits. It helps attract and retain talent while ensuring employee welfare.',
      },
      {
        question: 'Do small businesses need insurance?',
        answer: 'Absolutely. Small businesses face various risks including property damage, liability claims, employee injuries, and business interruption. Essential coverages for small businesses include Public Liability, Professional Indemnity, Property Insurance, and Work Injury Compensation. The right insurance protects your business assets and ensures continuity.',
      },
      {
        question: 'How much coverage do I need?',
        answer: 'The amount of coverage depends on several factors: your industry type, number of employees, business assets value, annual revenue, and specific risk exposures. We recommend conducting a thorough risk assessment with our advisors who can help identify potential gaps and recommend appropriate coverage limits.',
      },
    ],
  },
  {
    title: 'Claims',
    icon: <FileText className="w-6 h-6" />,
    items: [
      {
        question: 'How do I file a claim?',
        answer: 'Filing a claim is straightforward: 1) Contact us via phone, email, or WhatsApp to report the incident. 2) Provide all relevant details and documentation. 3) Our claims team will review your case and guide you through required steps. 4) Submit any additional documents requested. 5) Track your claim status through regular updates from our team.',
      },
      {
        question: 'How long does claim processing take?',
        answer: 'Claim processing time varies depending on the type and complexity of the claim. Simple claims like motor windscreen repairs may be processed within 3-5 working days. More complex claims involving investigations or medical assessments may take 2-4 weeks or longer. We keep you informed throughout the process.',
      },
      {
        question: 'What documents do I need?',
        answer: 'Required documents typically include: completed claim form, policy documents, original receipts/invoices, photos of damage, police report (if applicable), medical reports (for health claims), repair estimates, and any correspondence related to the incident. Specific requirements vary by claim type, and our team will provide a detailed checklist.',
      },
    ],
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 px-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-inset rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900 pr-8">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-teal-600" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSectionComponent({ section, sectionIndex }: { section: FAQSection; sectionIndex: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-teal-100 text-teal-600">{section.icon}</div>
        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {section.items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
              Find answers to common questions about our insurance services, policies, and claims process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((section, index) => (
            <FAQSectionComponent key={index} section={section} sectionIndex={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="p-3 rounded-full bg-teal-100 w-fit mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our friendly team is here to help. Contact us and we will get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/6591116707"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
