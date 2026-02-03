import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | GreatLink Insurance',
  description: 'Terms and conditions for using GreatLink Insurance Agency Pte Ltd services and website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-teal-100">
            Terms and Conditions for Our Services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg prose-teal">
          <p className="text-gray-600 mb-8">
            Last updated: February 2025
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using the services provided by GreatLink Insurance Agency Pte Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Our Services</h2>
          <p className="text-gray-600 mb-4">
            GreatLink Insurance Agency Pte Ltd is a licensed insurance broker in Singapore. We provide:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Insurance broking and advisory services</li>
            <li>Assistance with insurance policy placement</li>
            <li>Claims management and support</li>
            <li>Insurance portfolio review and recommendations</li>
            <li>Risk assessment and management advice</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Role as Insurance Broker</h2>
          <p className="text-gray-600 mb-4">
            As an insurance broker, we act as an intermediary between you (the client) and insurance companies. We do not guarantee the issuance of any insurance policy, nor do we guarantee any specific coverage terms or premium rates. All insurance policies are subject to the terms and conditions set by the respective insurance companies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Client Responsibilities</h2>
          <p className="text-gray-600 mb-4">As a client, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Provide accurate and complete information for insurance applications</li>
            <li>Disclose all material facts that may affect the insurance policy</li>
            <li>Pay premiums and fees on time</li>
            <li>Notify us promptly of any changes that may affect your coverage</li>
            <li>Read and understand your policy documents</li>
            <li>Report claims in accordance with policy requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Duty of Disclosure</h2>
          <p className="text-gray-600 mb-4">
            You have a duty to disclose all material facts to the insurance company when applying for insurance or making claims. Failure to disclose material facts may result in the insurance company voiding your policy or rejecting your claims. We are not responsible for any consequences arising from your failure to disclose material facts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Fees and Payments</h2>
          <p className="text-gray-600 mb-4">
            Our fees are typically paid by way of commission from insurance companies. In some cases, we may charge additional service fees which will be disclosed to you in advance. All premium payments must be made directly to us or the insurance company as specified. We are not responsible for any loss arising from late or non-payment of premiums.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claims arising from our services shall not exceed the total fees paid by you to us in the 12 months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content on our website, including text, graphics, logos, and images, is the property of GreatLink Insurance Agency Pte Ltd or our licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Website Use</h2>
          <p className="text-gray-600 mb-4">
            You agree to use our website only for lawful purposes. You shall not use our website to transmit any harmful, offensive, or illegal content, or to attempt to gain unauthorized access to our systems.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Third-Party Links</h2>
          <p className="text-gray-600 mb-4">
            Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of these websites. Your use of third-party websites is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Termination</h2>
          <p className="text-gray-600 mb-4">
            Either party may terminate our services by providing written notice. Upon termination, you remain responsible for any outstanding fees or premiums. Termination does not affect any rights or obligations that accrued prior to termination.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
          <p className="text-gray-600 mb-4">
            These Terms of Service are governed by the laws of the Republic of Singapore. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms of Service, please contact us:
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
