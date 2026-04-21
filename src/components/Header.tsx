'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';

const services = [
  { name: 'Motor Insurance', href: '/services/motor-insurance' },
  { name: 'Employee Benefits', href: '/services/employee-benefits' },
  { name: 'Property Insurance', href: '/services/property-insurance' },
  { name: 'Domestic Maid Insurance', href: '/services/domestic-maid' },
  { name: 'Engineering Insurance', href: '/services/engineering-insurance' },
  { name: 'Surety Bonds', href: '/services/surety-bonds' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="GreatLink Insurance Logo"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-sm lg:text-base font-bold text-gray-800 leading-tight block">
                GREATLINK INSURANCE
              </span>
              <span className="text-xs lg:text-sm font-semibold text-teal-600 leading-tight block">
                AGENCY PTE LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-teal-50"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                        isServicesOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="py-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-teal-50"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="https://calendly.com/greatlinkinsurance"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2.5 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-200"
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              Book a Meeting
            </a>
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition-all duration-200"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium rounded-lg transition-colors"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isServicesOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="pl-4 py-1">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2.5 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTAs */}
            <a
              href="https://calendly.com/greatlinkinsurance"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden mt-2 mx-4 px-5 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg text-center flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="w-4 h-4" />
              Book a Meeting
            </a>
            <Link
              href="/quote"
              className="sm:hidden mt-2 mx-4 px-5 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
