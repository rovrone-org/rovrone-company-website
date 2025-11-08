import { motion } from 'motion/react';
import { Cpu, Radio, Camera, Battery } from 'lucide-react';

export function Products() {
  const products = [
    {
      icon: Radio,
      name: 'Aerial Survey Drone',
      category: 'Commercial UAV',
      description: 'High-precision mapping and surveying drone with advanced GPS and sensors.',
      specs: ['Flight time: 45 min', 'Range: 10 km', 'Payload: 2 kg']
    },
    {
      icon: Camera,
      name: 'Vision System',
      category: 'AI Camera Module',
      description: 'Intelligent vision system with real-time object detection and tracking.',
      specs: ['4K resolution', 'AI processing', '360° coverage']
    },
    {
      icon: Cpu,
      name: 'Control Module',
      category: 'Flight Controller',
      description: 'Advanced flight controller with autonomous navigation capabilities.',
      specs: ['Auto-pilot', 'Obstacle avoidance', 'RTK GPS']
    },
    {
      icon: Battery,
      name: 'Power System',
      category: 'Battery Pack',
      description: 'High-capacity lithium battery with intelligent power management.',
      specs: ['6S LiPo', 'Smart BMS', 'Fast charge']
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
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
              Products
            </div>
          </div>
          <h2 className="mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-leading drones and robotics components engineered for performance and reliability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
                <product.icon className="text-gray-900 group-hover:text-white transition-colors duration-300" size={28} />
              </div>

              <div className="mb-2">
                <div className="text-sm text-gray-600 mb-1">{product.category}</div>
                <h3>{product.name}</h3>
              </div>

              <p className="text-gray-600 mb-4 text-sm">
                {product.description}
              </p>

              <div className="space-y-2">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    {spec}
                  </div>
                ))}
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gray-900/5 rounded-bl-full -z-10 group-hover:bg-gray-900/10 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1668883738061-e46019b0b9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzYyNTU1Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Drone Technology"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-white mb-2">Advanced Aerial Systems</h3>
              <p className="text-white/90 max-w-2xl">
                Our drones are equipped with state-of-the-art sensors, AI capabilities, and autonomous flight systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
