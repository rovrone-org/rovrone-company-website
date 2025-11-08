import { motion } from 'motion/react';
import { Layers, Cloud, FileText, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Layers,
      title: 'Drone Manufacturing',
      subtitle: 'Design and build custom drones.',
      description: 'End-to-end design and manufacturing of UAVs for commercial and research applications.',
      features: [
        'Custom drone design',
        'Prototype development',
        'Production manufacturing',
        'Quality assurance testing'
      ]
    },
    {
      icon: Cloud,
      title: 'DaaS (Drone as a Service)',
      subtitle: 'Operational drone services.',
      description: 'Managed drone operations, data capture, and analytics for clients.',
      features: [
        'Drone fleet management',
        'Data capture & processing',
        'Real-time analytics',
        'Compliance & safety'
      ]
    }
  ];

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

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="text-gray-900 px-4 py-1 rounded-full border border-gray-300 bg-gray-100">
              Our Services
            </div>
          </div>
          <h2 className="mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine research, engineering and field experience to deliver solutions across the full lifecycle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <service.icon className="text-gray-900 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1">{service.title}</h3>
                  <p className="text-gray-500">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 flex items-center justify-center gap-2"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </button>
                <button className="px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-black transition-all duration-300 flex items-center gap-2 text-gray-700 hover:text-black">
                  <FileText size={18} />
                  Brochure
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
