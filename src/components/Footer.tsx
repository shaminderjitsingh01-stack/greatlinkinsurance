'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const services = [
  { name: 'Motor Insurance', href: '/services/motor-insurance' },
  { name: 'Employee Benefits', href: '/services/employee-benefits' },
  { name: 'Property Insurance', href: '/services/property-insurance' },
  { name: 'Travel Insurance', href: '/services/travel-insurance' },
  { name: 'Engineering Insurance', href: '/services/engineering-insurance' },
  { name: 'Surety Bonds', href: '/services/surety-bonds' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about#team' },
  { name: 'Resources', href: '/resources' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/greatlinkinsurance' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/greatlinkinsurance' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/greatlinkinsurance' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="GreatLink Insurance Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-sm font-bold text-white leading-tight block">
                  GREATLINK INSURANCE
                </span>
                <span className="text-xs font-semibold text-teal-400 leading-tight block">
                  AGENCY PTE LTD
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              GreatLink Insurance is a trusted insurance broker in Singapore,
              providing comprehensive insurance solutions for individuals and
              businesses.
            </p>
            <p className="text-gray-500 text-sm">
              Singapore
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="https://shaminder.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-xs hover:text-teal-400 transition-colors mt-4 inline-block"
            >
              Made by shaminder.sg
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  8 Burn Road, #14-08<br />
                  Trivex, Singapore 369977
                </span>
              </li>
              <li>
                <a
                  href="tel:+6560470353"
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  +65 6047 0353
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@greatlinkinsurance.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  contact@greatlinkinsurance.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6591116707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-teal-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: +65 9111 6707
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center lg:text-left">
              &copy; {currentYear} GreatLink Insurance Pte Ltd. All rights reserved.
            </p>
            <div className="text-gray-500 text-xs text-center lg:text-right max-w-2xl">
              <p>
                GreatLink Insurance Agency Pte Ltd is a registered insurance broker regulated by
                the Monetary Authority of Singapore (MAS). Insurance products are underwritten
                by our partner insurers. Terms and conditions apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
