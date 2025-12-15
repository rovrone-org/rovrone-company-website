import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import logo from '../assets/rov-logo.jpg';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = {
    company: [
      { label: 'About', id: 'about' },
      { label: 'Services', id: 'services' },
      { label: 'Products', id: 'products' },
      { label: 'Drone School', id: 'drone-school' }
    ],
    services: [
      { label: 'IT Software & Digital Engineering', id: 'services' },
      { label: 'Drones & Anti-Drone Systems', id: 'services' },
      { label: 'EV & Battery Technologies', id: 'services' },
      { label: 'Robotics & Automation', id: 'services' },
      { label: 'IoT & Smart Systems', id: 'services' },
      { label: 'AgriTech & Smart Farming', id: 'services' },
      { label: 'ICT & Network Infrastructure', id: 'services' },
      { label: 'AR/VR & Simulation Labs', id: 'services' },
      { label: 'VAYONIX™ Green-Tech Solutions', id: 'services' },
      { label: 'Advanced R&D & Turnkey Projects', id: 'services' }
    ],
    support: [
      { label: 'Contact Us', id: 'contact' },
      { label: 'Documentation', id: 'contact' },
      { label: 'Support Portal', id: 'contact' },
      { label: 'FAQ', id: 'contact' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@rovrone.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection('home')}
              className="mb-6 transition-transform duration-300 hover:scale-105"
            >
              <img src={logo} alt="RovrOne Labs" className="h-20 w-auto" />
            </button>
            <p className="text-gray-400 mb-6 max-w-sm">
              Trusted systems for aerial and ground robotics — engineering, manufacturing and training.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">contact@rovrone.com</li>
              <li className="text-gray-400">+91 91115 55664</li>
              <li className="text-gray-400">Bhopal, Madhya Pradesh, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RovrOne Labs. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
