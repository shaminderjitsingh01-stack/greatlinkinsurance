import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GreatLink Insurance',
  description: 'Privacy Policy and Personal Data Protection Act (PDPA) compliance information for GreatLink Insurance Agency Pte Ltd.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-teal-100">
            Personal Data Protection Act (PDPA) Compliance
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg prose-teal">
          <p className="text-gray-600 mb-8">
            Last updated: February 2025
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            GreatLink Insurance Agency Pte Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your personal data in accordance with the Personal Data Protection Act 2012 (&quot;PDPA&quot;) of Singapore. This Privacy Policy explains how we collect, use, disclose, and protect your personal data.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Personal Data We Collect</h2>
          <p className="text-gray-600 mb-4">We may collect the following types of personal data:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Name, NRIC/FIN, date of birth, gender, and nationality</li>
            <li>Contact information including address, email, and phone numbers</li>
            <li>Employment information and income details</li>
            <li>Insurance policy details and claims history</li>
            <li>Health and medical information (for health insurance purposes)</li>
            <li>Financial information (for premium payments)</li>
            <li>Vehicle registration and driving history (for motor insurance)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Purposes for Collection, Use, and Disclosure</h2>
          <p className="text-gray-600 mb-4">We collect, use, and disclose your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Processing insurance applications and policy renewals</li>
            <li>Administering and managing insurance policies</li>
            <li>Processing and settling claims</li>
            <li>Communicating with you regarding your policies</li>
            <li>Providing customer service and support</li>
            <li>Complying with legal and regulatory requirements</li>
            <li>Sending marketing communications (with your consent)</li>
            <li>Improving our products and services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Disclosure to Third Parties</h2>
          <p className="text-gray-600 mb-4">
            We may disclose your personal data to the following third parties for the purposes stated above:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Insurance companies and underwriters</li>
            <li>Reinsurance companies</li>
            <li>Claims adjusters and investigators</li>
            <li>Healthcare providers and medical professionals</li>
            <li>Regulatory authorities (e.g., MAS, GIA)</li>
            <li>Service providers who assist in our operations</li>
            <li>Legal advisors and auditors</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Consent</h2>
          <p className="text-gray-600 mb-4">
            By providing your personal data to us, you consent to the collection, use, and disclosure of your personal data as described in this Privacy Policy. You may withdraw your consent at any time by contacting our Data Protection Officer. However, please note that withdrawal of consent may affect our ability to provide services to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Access and Correction</h2>
          <p className="text-gray-600 mb-4">
            You have the right to request access to and correction of your personal data held by us. To make such a request, please contact our Data Protection Officer. We may charge a reasonable fee for processing your request.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Protection of Personal Data</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate security measures to protect your personal data against unauthorized access, collection, use, disclosure, or similar risks. These include physical, electronic, and procedural safeguards.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Retention of Personal Data</h2>
          <p className="text-gray-600 mb-4">
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. When personal data is no longer needed, we will dispose of it in a secure manner.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Cookies and Website Usage</h2>
          <p className="text-gray-600 mb-4">
            Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us improve our website and provide better services. You can choose to disable cookies in your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or wish to make a data access or correction request, please contact our Data Protection Officer:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-2"><strong>GreatLink Insurance Agency Pte Ltd</strong></p>
            <p className="text-gray-600 mb-1">8 Burn Road, #14-08, Trivex</p>
            <p className="text-gray-600 mb-1">Singapore 369977</p>
            <p className="text-gray-600 mb-1">Email: contact@greatlinkinsurance.com</p>
            <p className="text-gray-600">Phone: +65 6047 0353</p>
          </div>
        </div>
      </section>
    </div>
  );
}
