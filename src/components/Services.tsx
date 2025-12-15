import { motion } from 'motion/react';
import { Layers, Cloud, FileText, ArrowRight, Code2, ShieldCheck, BatteryCharging, Bot, Rss, Leaf, Network, MonitorSmartphone, Droplets, FlaskConical } from 'lucide-react';

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
    },
    {
      icon: Code2,
      title: 'IT Software & Digital Engineering',
      subtitle: 'Custom web, mobile, and enterprise platforms.',
      description: 'Custom web, mobile, and enterprise platforms with cloud-native architecture, AI-driven automation, and secure system integration.',
      features: [
        'Cloud-native architecture',
        'AI-driven automation',
        'Secure system integration',
        'Web, mobile & enterprise platforms'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Drones & Anti-Drone Systems',
      subtitle: 'UAVs & counter-UAS solutions.',
      description: 'Indigenous UAV manufacturing, Drone-as-a-Service (DaaS), and advanced counter-UAS solutions for surveillance and critical infrastructure protection.',
      features: [
        'Indigenous UAV manufacturing',
        'Drone-as-a-Service (DaaS)',
        'Counter-UAS solutions',
        'Surveillance & infrastructure protection'
      ]
    },
    {
      icon: BatteryCharging,
      title: 'EV & Battery Technologies',
      subtitle: 'Electric mobility & energy storage.',
      description: 'Electric mobility solutions, lithium-ion battery systems, and smart energy storage with EV charging infrastructure deployment.',
      features: [
        'Electric mobility solutions',
        'Lithium-ion battery systems',
        'Smart energy storage',
        'EV charging infrastructure'
      ]
    },
    {
      icon: Bot,
      title: 'Robotics & Automation',
      subtitle: 'Industrial & intelligent automation.',
      description: 'Industrial robotics, autonomous mobile robots (AMR/AGV), and intelligent automation for logistics, manufacturing, and security operations.',
      features: [
        'Industrial robotics',
        'Autonomous mobile robots (AMR/AGV)',
        'Intelligent automation',
        'Logistics & security operations'
      ]
    },
    {
      icon: Rss,
      title: 'IoT & Smart Systems',
      subtitle: 'Real-time monitoring & automation.',
      description: 'End-to-end IoT solutions enabling real-time monitoring, predictive analytics, and automation for industries and smart cities.',
      features: [
        'End-to-end IoT solutions',
        'Real-time monitoring',
        'Predictive analytics',
        'Industrial & smart city automation'
      ]
    },
    {
      icon: Leaf,
      title: 'AgriTech & Smart Farming',
      subtitle: 'Precision agriculture & analytics.',
      description: 'Precision agriculture solutions using IoT sensors, smart irrigation, and drone-based analytics to improve productivity and resource efficiency.',
      features: [
        'IoT sensors for agriculture',
        'Smart irrigation',
        'Drone-based analytics',
        'Productivity & resource efficiency'
      ]
    },
    {
      icon: Network,
      title: 'ICT & Network Infrastructure',
      subtitle: 'Turnkey ICT & data networks.',
      description: 'Turnkey ICT solutions including data centers, OFC networks, WAN/LAN/Wi-Fi, surveillance systems, and command & control centers for Government and PSU projects.',
      features: [
        'Data centers & OFC networks',
        'WAN/LAN/Wi-Fi',
        'Surveillance systems',
        'Command & control centers'
      ]
    },
    {
      icon: MonitorSmartphone,
      title: 'AR/VR & Simulation Labs',
      subtitle: 'AR/VR labs & simulation environments.',
      description: 'Design and deployment of AR/VR labs for education, skill development, industrial training, and simulation-based learning environments.',
      features: [
        'AR/VR lab design',
        'Simulation-based learning',
        'Industrial training',
        'Education & skill development'
      ]
    },
    {
      icon: Droplets,
      title: 'VAYONIX™ Green-Tech Solutions',
      subtitle: 'Algae-based bioreactors & ESG.',
      description: 'Algae-based liquid bioreactors for urban air purification, ESG compliance, and sustainable smart infrastructure.',
      features: [
        'Algae-based bioreactors',
        'Urban air purification',
        'ESG compliance',
        'Sustainable smart infrastructure'
      ]
    },
    {
      icon: FlaskConical,
      title: 'Advanced R&D & Turnkey Projects',
      subtitle: 'Innovation-led R&D & EPC.',
      description: 'Innovation-led R&D, AI-driven systems, EPC execution, and end-to-end program management for complex technology initiatives.',
      features: [
        'Innovation-led R&D',
        'AI-driven systems',
        'EPC execution',
        'Program management'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
