import Link from "next/link";
import { AlertTriangle, Phone, Camera, FileText, CheckCircle, Info, ArrowLeft } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Ensure Safety First",
    description: "Check yourself and passengers for injuries. If anyone is hurt, call for an ambulance immediately. Turn on your hazard lights and set up a warning triangle if available.",
    tips: [
      "Do not move injured persons unless there is immediate danger",
      "If the accident is minor and vehicles are obstructing traffic, move them to the side",
      "Stay calm and avoid confrontation with other parties",
    ],
  },
  {
    number: 2,
    title: "Call for Help if Needed",
    description: "For accidents involving injuries, fatalities, damage to government property, or if the other party is uncooperative, you must call the police.",
    tips: [
      "Police: 999",
      "Ambulance: 995",
      "Non-emergency police: 1800-255-0000",
    ],
  },
  {
    number: 3,
    title: "Document the Scene",
    description: "Take comprehensive photos and notes of the accident scene. This evidence is crucial for your insurance claim.",
    tips: [
      "Photograph all vehicles involved from multiple angles",
      "Capture the license plates clearly",
      "Take wide shots showing the overall accident scene",
      "Photograph skid marks, debris, and road conditions",
      "Note the time, date, weather, and lighting conditions",
    ],
  },
  {
    number: 4,
    title: "Exchange Information",
    description: "Collect details from all parties involved in the accident. Be cooperative but do not admit fault.",
    tips: [
      "Driver names and NRIC/passport numbers",
      "Contact numbers",
      "Vehicle registration numbers",
      "Insurance company names and policy numbers",
      "Names and contacts of witnesses",
    ],
  },
  {
    number: 5,
    title: "Report to Your Insurer",
    description: "Notify your insurance company within 24 hours of the accident. Most insurers have 24/7 hotlines for accident reporting.",
    tips: [
      "Call your insurer's accident hotline immediately",
      "Provide all documentation and photos collected",
      "Follow their instructions for repairs and claims",
      "Keep copies of all documents submitted",
    ],
  },
  {
    number: 6,
    title: "File a Police Report (if required)",
    description: "You must file a police report within 24 hours if required by law or your insurance policy.",
    tips: [
      "Report online at www.police.gov.sg for non-injury accidents",
      "Visit a police station for accidents involving injuries",
      "Obtain a copy of the report for your insurer",
    ],
  },
];

const importantNumbers = [
  { name: "Police Emergency", number: "999" },
  { name: "Ambulance / Fire", number: "995" },
  { name: "Non-Emergency Police", number: "1800-255-0000" },
  { name: "LTA (Road incidents)", number: "1800-225-5582" },
  { name: "Traffic Police Hotline", number: "6547-0000" },
];

const documentationChecklist = [
  "Photos of all vehicles involved (damage and license plates)",
  "Wide-angle photos of the accident scene",
  "Photos of road conditions, traffic signs, and signals",
  "Names and NRIC of all drivers involved",
  "Contact details of all parties",
  "Insurance details of all parties",
  "Witness names and contact information",
  "Police report number (if applicable)",
  "Time, date, and location of accident",
  "Weather and road conditions",
];

const warnings = [
  {
    title: "Never Admit Fault",
    description: "Do not apologize or admit liability at the scene. Let the insurers and authorities determine fault based on evidence.",
  },
  {
    title: "Do Not Sign Blank Documents",
    description: "Never sign any blank forms or documents. Read everything carefully before signing.",
  },
  {
    title: "Beware of Touts",
    description: "Do not engage with unlicensed tow truck operators or workshop touts at the scene. Use your insurer's authorized providers.",
  },
  {
    title: "Report Within 24 Hours",
    description: "Failure to report to your insurer within 24 hours may affect your claim. Report even for minor accidents.",
  },
];

export default function AccidentGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center text-teal-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Essential Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What to Do in a Car Accident in Singapore</h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            A comprehensive step-by-step guide to help you handle road accidents properly, protect your rights, and ensure a smooth insurance claim process.
          </p>
        </div>
      </section>

      {/* Important Numbers - Sticky on mobile */}
      <section className="bg-red-50 border-b border-red-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-5 h-5 text-red-600" />
            <h2 className="text-lg font-bold text-gray-900">Emergency Numbers</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {importantNumbers.map((item) => (
              <div key={item.name} className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-gray-600 text-sm">{item.name}:</span>
                <span className="ml-2 font-bold text-red-600">{item.number}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Step-by-Step Guide</h2>
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-8 h-8 text-teal-600" />
            <h2 className="text-3xl font-bold text-gray-900">Documentation Checklist</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Proper documentation is essential for a successful insurance claim. Use this checklist to ensure you capture all necessary information.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentationChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 border-2 border-teal-600 rounded flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warnings */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl font-bold text-gray-900">Important Warnings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {warnings.map((warning, index) => (
              <div key={index} className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{warning.title}</h3>
                <p className="text-gray-700">{warning.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Info className="w-8 h-8 text-teal-600" />
            <h2 className="text-3xl font-bold text-gray-900">Additional Tips</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keep Your Documents Ready</h3>
              <p className="text-gray-700">
                Always carry your driving license, vehicle registration, and insurance documents in your vehicle. Consider keeping a printed copy of your insurer&apos;s emergency hotline in your car.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Install a Dashcam</h3>
              <p className="text-gray-700">
                A dashcam provides valuable video evidence that can help establish fault and support your insurance claim. Consider installing one that records both front and rear views.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Know Your Policy</h3>
              <p className="text-gray-700">
                Familiarize yourself with your motor insurance policy coverage, exclusions, and claims procedures before an accident happens. Understanding your coverage helps you make informed decisions at the scene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help with a Claim?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            If you have been involved in an accident and need assistance with your insurance claim, our team is here to help guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Contact Us for Claims Assistance
            </Link>
            <Link
              href="/services/motor-insurance"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn About Motor Insurance
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Resources */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Resources
          </Link>
        </div>
      </section>
    </div>
  );
}
