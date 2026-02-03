'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car,
  Users,
  Building2,
  Plane,
  Wrench,
  Shield,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Building,
  User,
  Briefcase,
  Factory,
  Store,
  Truck,
  Heart,
  DollarSign,
  Clock,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';

// Quiz steps configuration
const quizSteps = [
  {
    id: 'customer-type',
    question: "Let's find the perfect coverage for you!",
    subtitle: 'First, tell us about yourself',
    type: 'single',
    options: [
      { id: 'business', label: 'Business Owner', icon: Briefcase, description: 'Looking for corporate insurance solutions' },
      { id: 'individual', label: 'Individual', icon: User, description: 'Personal insurance needs' },
      { id: 'hr-manager', label: 'HR Manager', icon: Users, description: 'Employee benefits for my company' },
    ],
  },
  {
    id: 'business-type',
    question: 'What type of business do you run?',
    subtitle: 'This helps us recommend the right coverage',
    type: 'single',
    showIf: (answers: Record<string, string | string[]>) => answers['customer-type'] === 'business' || answers['customer-type'] === 'hr-manager',
    options: [
      { id: 'sme', label: 'SME / Startup', icon: Store, description: 'Less than 50 employees' },
      { id: 'mid-size', label: 'Mid-size Company', icon: Building, description: '50-200 employees' },
      { id: 'enterprise', label: 'Large Enterprise', icon: Factory, description: 'More than 200 employees' },
      { id: 'logistics', label: 'Logistics / Transport', icon: Truck, description: 'Fleet and cargo operations' },
    ],
  },
  {
    id: 'insurance-needs',
    question: 'What insurance do you need?',
    subtitle: 'Select all that apply',
    type: 'multiple',
    options: [
      { id: 'motor', label: 'Motor Insurance', icon: Car, description: 'Vehicles and fleet coverage' },
      { id: 'employee', label: 'Employee Benefits', icon: Heart, description: 'Health, dental, life insurance' },
      { id: 'property', label: 'Property Insurance', icon: Building2, description: 'Office, warehouse, equipment' },
      { id: 'travel', label: 'Travel Insurance', icon: Plane, description: 'Business travel coverage' },
      { id: 'engineering', label: 'Engineering / CAR', icon: Wrench, description: 'Construction and machinery' },
      { id: 'surety', label: 'Surety Bonds', icon: Shield, description: 'Performance and bid bonds' },
    ],
  },
  {
    id: 'priority',
    question: "What's most important to you?",
    subtitle: 'This helps us tailor our recommendations',
    type: 'single',
    options: [
      { id: 'cost', label: 'Best Price', icon: DollarSign, description: 'Looking for competitive rates' },
      { id: 'coverage', label: 'Comprehensive Coverage', icon: Shield, description: 'Maximum protection' },
      { id: 'speed', label: 'Quick Processing', icon: Clock, description: 'Need coverage ASAP' },
      { id: 'claims', label: 'Easy Claims', icon: CheckCircle, description: 'Hassle-free claims process' },
    ],
  },
  {
    id: 'timeline',
    question: 'When do you need coverage?',
    subtitle: 'We can expedite urgent requests',
    type: 'single',
    options: [
      { id: 'urgent', label: 'Within 1 week', icon: AlertTriangle, description: 'Urgent requirement' },
      { id: 'soon', label: '1-4 weeks', icon: Clock, description: 'Planning ahead' },
      { id: 'exploring', label: 'Just exploring', icon: Sparkles, description: 'Comparing options' },
    ],
  },
];

const fadeVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Filter steps based on conditions
  const activeSteps = quizSteps.filter(
    (step) => !step.showIf || step.showIf(answers)
  );

  const currentQuizStep = activeSteps[currentStep];
  const progress = ((currentStep + 1) / (activeSteps.length + 1)) * 100;

  const handleOptionSelect = (optionId: string) => {
    if (currentQuizStep.type === 'multiple') {
      const currentAnswers = (answers[currentQuizStep.id] as string[]) || [];
      if (currentAnswers.includes(optionId)) {
        setAnswers({
          ...answers,
          [currentQuizStep.id]: currentAnswers.filter((id) => id !== optionId),
        });
      } else {
        setAnswers({
          ...answers,
          [currentQuizStep.id]: [...currentAnswers, optionId],
        });
      }
    } else {
      setAnswers({ ...answers, [currentQuizStep.id]: optionId });
      // Auto-advance for single select after a brief delay
      setTimeout(() => {
        if (currentStep < activeSteps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setShowContactForm(true);
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentStep < activeSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowContactForm(true);
    }
  };

  const handleBack = () => {
    if (showContactForm) {
      setShowContactForm(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsComplete(true);
  };

  const isOptionSelected = (optionId: string) => {
    const answer = answers[currentQuizStep?.id];
    if (Array.isArray(answer)) {
      return answer.includes(optionId);
    }
    return answer === optionId;
  };

  const canProceed = () => {
    if (!currentQuizStep) return false;
    const answer = answers[currentQuizStep.id];
    if (currentQuizStep.type === 'multiple') {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  // Get recommendations based on answers
  const getRecommendations = () => {
    const needs = answers['insurance-needs'] as string[] || [];
    const recommendations = [];

    if (needs.includes('motor')) recommendations.push('Motor Fleet Insurance');
    if (needs.includes('employee')) recommendations.push('Group Health & Benefits');
    if (needs.includes('property')) recommendations.push('Commercial Property Insurance');
    if (needs.includes('travel')) recommendations.push('Corporate Travel Insurance');
    if (needs.includes('engineering')) recommendations.push('Contractor All Risks (CAR)');
    if (needs.includes('surety')) recommendations.push('Performance & Bid Bonds');

    return recommendations.length > 0 ? recommendations : ['Customized Insurance Package'];
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-lg w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Thank You, {contactInfo.name.split(' ')[0]}!
          </h2>

          <p className="text-gray-600 mb-6">
            We&apos;ve received your insurance inquiry. Our specialists will analyze your needs and contact you within 24 hours with personalized recommendations.
          </p>

          <div className="bg-teal-50 rounded-xl p-4 mb-6 text-left">
            <h3 className="font-semibold text-teal-800 mb-2">Based on your answers, we recommend:</h3>
            <ul className="space-y-1">
              {getRecommendations().map((rec, i) => (
                <li key={i} className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="w-4 h-4" />
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Return to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 py-8 md:py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              {showContactForm ? 'Final Step' : `Step ${currentStep + 1} of ${activeSteps.length + 1}`}
            </span>
            <span className="text-sm font-medium text-teal-600">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${showContactForm ? 100 : progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {!showContactForm ? (
              <motion.div
                key={currentQuizStep?.id}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="p-6 md:p-10"
              >
                {/* Question */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {currentQuizStep?.question}
                  </h1>
                  <p className="text-gray-600">{currentQuizStep?.subtitle}</p>
                </div>

                {/* Options */}
                <div className={`grid gap-4 ${
                  currentQuizStep?.options.length > 4
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2'
                }`}>
                  {currentQuizStep?.options.map((option) => {
                    const Icon = option.icon;
                    const selected = isOptionSelected(option.id);

                    return (
                      <motion.button
                        key={option.id}
                        onClick={() => handleOptionSelect(option.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex flex-col items-center p-5 rounded-xl border-2 transition-all duration-200 text-center ${
                          selected
                            ? 'border-teal-500 bg-teal-50 shadow-md'
                            : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                        }`}
                      >
                        {selected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3"
                          >
                            <CheckCircle className="w-5 h-5 text-teal-600" />
                          </motion.div>
                        )}
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 ${
                          selected ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className={`font-semibold mb-1 ${selected ? 'text-teal-700' : 'text-gray-900'}`}>
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Navigation for multiple select */}
                {currentQuizStep?.type === 'multiple' && (
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-colors ${
                        currentStep === 0
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                        canProceed()
                          ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-xl'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Continue
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Back button for single select */}
                {currentQuizStep?.type === 'single' && currentStep > 0 && (
                  <div className="mt-8">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="contact-form"
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="p-6 md:p-10"
              >
                {/* Contact Form Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Almost there!
                  </h1>
                  <p className="text-gray-600">
                    Enter your details and we&apos;ll send you a personalized quote
                  </p>
                </div>

                {/* Summary of selections */}
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold text-teal-800 mb-2">Your Selections:</h3>
                  <div className="flex flex-wrap gap-2">
                    {(answers['insurance-needs'] as string[] || []).map((need) => {
                      const option = quizSteps
                        .find((s) => s.id === 'insurance-needs')
                        ?.options.find((o) => o.id === need);
                      return (
                        <span
                          key={need}
                          className="px-3 py-1 bg-white rounded-full text-sm font-medium text-teal-700 shadow-sm"
                        >
                          {option?.label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={contactInfo.company}
                        onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="ABC Company Pte Ltd"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="+65 9123 4567"
                      />
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Get My Quote
                          <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-600" />
            <span>Your data is secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-600" />
            <span>Response within 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-600" />
            <span>No obligation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
