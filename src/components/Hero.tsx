import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import heroAerial from '../assets/images/hero-aerial.jpg';
import heroAerialSm from '../assets/images/hero-aerial-sm.jpg';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            id="hero-company-name"
            className="max-w-5xl mx-auto mb-6 font-bold leading-none tracking-tight text-gray-900"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 8rem)' }}
          >
            RovrOne Labs
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gray-900 text-white px-6 py-2 rounded-full">
              Engineering Intelligence Through Innovation
            </div>
          </motion.div>

          <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-lg sm:text-xl">
            Trusted systems for aerial and ground robotics — engineering, manufacturing and training.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 flex items-center gap-2"
            >
              Get a Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="group bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-black transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Learn More
            </button>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="relative mt-16 mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5"
          >
            <img
              src={heroAerial}
              srcSet={`${heroAerialSm} 1024w, ${heroAerial} 1920w`}
              sizes="(max-width: 768px) 100vw, 1024px"
              alt="Aerial robotics drone in flight — RovrOne Labs UAV"
              fetchPriority="high"
              decoding="async"
              className="w-full h-[280px] sm:h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Floating Elements (skipped when user prefers reduced motion) */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-10 w-16 h-16 bg-gray-400/10 rounded-full blur-2xl"
              aria-hidden="true"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-1/4 right-20 w-24 h-24 bg-gray-500/10 rounded-full blur-2xl"
              aria-hidden="true"
            />
          </>
        )}
      </div>

      {/* Animated Drone Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="80" height="48" viewBox="0 0 80 48" className="text-gray-600">
            {/* Diagonal arms */}
            <line x1="40" y1="24" x2="12" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="24" x2="68" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="24" x2="12" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="24" x2="68" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Body */}
            <rect x="30" y="18" width="20" height="14" rx="3" fill="currentColor" />
            {/* Camera lens */}
            <circle cx="40" cy="36" r="2.2" fill="currentColor" opacity="0.55" />
            {/* Spinning rotor blades */}
            {[
              { cx: 12, cy: 10 },
              { cx: 68, cy: 10 },
              { cx: 12, cy: 38 },
              { cx: 68, cy: 38 },
            ].map((r, i) => (
              <motion.ellipse
                key={i}
                cx={r.cx}
                cy={r.cy}
                rx="9"
                ry="1.6"
                fill="currentColor"
                opacity="0.55"
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 0.35, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </svg>
        </motion.div>
        {/* Drifting ground shadow */}
        <motion.div
          className="w-10 h-1 bg-gray-400/40 rounded-full blur-sm"
          animate={prefersReducedMotion ? undefined : { scaleX: [1, 0.7, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
