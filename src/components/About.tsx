import { motion } from 'motion/react';
import { Sparkles, Target, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Cutting-edge robotics solutions powered by advanced AI and machine learning.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Reliable, maintainable systems designed for industry and research excellence.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'High-performance drones and ground robotics built for demanding applications.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <div className="text-gray-900 px-4 py-1 rounded-full border border-gray-300 bg-gray-100">
                About Us
              </div>
            </div>
            <h2 className="mb-6">
              Engineering Intelligence
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Empowering Innovation Through Applied Robotics and AI
            </p>
            <p className="text-gray-600 mb-8">
              At RovrOne Labs, we focus on building reliable, maintainable systems for industry and research. Our team combines research, engineering, and field experience to deliver comprehensive solutions across the full lifecycle of robotic systems.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758295746012-41650245a9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nJTIwbGFifGVufDF8fHx8MTc2MjU5OTk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="RovrOne Innovation Lab"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-900 rounded-2xl -z-10 opacity-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-700 rounded-2xl -z-10 opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
