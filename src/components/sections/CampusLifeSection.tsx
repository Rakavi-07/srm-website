import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pillars = [
  {
    key: 'Learn',
    headline: 'Learn',
    sub: 'World-class academics, research labs, and digital libraries at your fingertips.',
    image: '/images/campus-life/learn.webp',
    tall: true,
  },
  {
    key: 'Live',
    headline: 'Live',
    sub: 'Safe, vibrant hostels with every comfort — Wi-Fi, mess, recreation, and 24/7 security.',
    image: '/images/campus-life/live.webp',
    tall: false,
  },
  {
    key: 'Enjoy',
    headline: 'Enjoy',
    sub: 'Festivals, sports, clubs, and cultural events that make every day unforgettable.',
    image: '/images/campus-life/enjoy.webp',
    tall: false,
  },
];

export default function CampusLifeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="campus" ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="section-subtitle">Life at SRM</p>
          <h2 className="section-title">Learn, Live &amp; Enjoy</h2>
        </motion.div>

        {/* Layout: left tall image, right two stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left – Learn */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden h-[480px] md:row-span-2 group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img src={pillars[0].image} alt="Learn" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-srm-navy/95 via-srm-navy/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
              <h3 className="text-white font-black text-4xl mb-2">{pillars[0].headline}</h3>
              <p className="text-white/90 text-sm max-w-xs">{pillars[0].sub}</p>
            </div>
          </motion.div>

          {/* Right top – Live */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden h-56 group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <img src={pillars[1].image} alt="Live" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-srm-navy/95 via-srm-navy/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
              <h3 className="text-white font-black text-3xl mb-1">{pillars[1].headline}</h3>
              <p className="text-white/90 text-xs max-w-xs">{pillars[1].sub}</p>
            </div>
          </motion.div>

          {/* Right bottom – Enjoy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden h-56 group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <img src={pillars[2].image} alt="Enjoy" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-srm-navy/95 via-srm-navy/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
              <h3 className="text-white font-black text-3xl mb-1">{pillars[2].headline}</h3>
              <p className="text-white/90 text-xs max-w-xs">{pillars[2].sub}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
