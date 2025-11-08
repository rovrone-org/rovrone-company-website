import { motion } from 'motion/react';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

export function DroneSchool() {
  const courses = [
    {
      title: 'Beginner Pilot Training',
      duration: '2 weeks',
      level: 'Beginner',
      description: 'Learn the fundamentals of drone operation and safety.'
    },
    {
      title: 'Commercial Certification',
      duration: '4 weeks',
      level: 'Intermediate',
      description: 'Get certified for commercial drone operations.'
    },
    {
      title: 'Advanced Robotics',
      duration: '6 weeks',
      level: 'Advanced',
      description: 'Master autonomous systems and AI integration.'
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience.'
    },
    {
      icon: Users,
      title: 'Hands-On Training',
      description: 'Practice with real drones in controlled environments.'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Get certified and recognized in the drone industry.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'From basics to advanced techniques, we cover it all.'
    }
  ];

  return (
    <section id="drone-school" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
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
              Education
            </div>
          </div>
          <h2 className="mb-4">
            RovrOne Drone School
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional drone training programs designed to elevate your skills and advance your career.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-black"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm">
                  {course.level}
                </span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>

              <h3 className="mb-4 group-hover:text-black transition-colors">
                {course.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {course.description}
              </p>

              <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-black/30">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-white mb-4">
            Ready to Take Flight?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of certified drone pilots who started their journey with RovrOne Drone School.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
            View Course Schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
}
