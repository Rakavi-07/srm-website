import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CATEGORIES = [
  { name: 'Engineering & Technology', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80', icon: '⚙️' },
  { name: 'Medicine', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80', icon: '🏥' },
  { name: 'Dentistry', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80', icon: '🦷' },
  { name: 'Management', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80', icon: '📊' },
  { name: 'Law', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80', icon: '⚖️' },
  { name: 'Architecture', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80', icon: '🏛️' },
  { name: 'Science & Humanities', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80', icon: '🔬' },
  { name: 'Agriculture Sciences', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=80', icon: '🌾' },
  { name: 'Pharmacy', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=80', icon: '💊' },
  { name: 'Nursing', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80', icon: '🩺' },
  { name: 'Public Health', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80', icon: '🏨' },
  { name: 'Physiotherapy', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80', icon: '🤸' },
  { name: 'Occupational Therapy', image: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?w=500&q=80', icon: '🧠' },
  { name: 'Online Education', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&q=80', icon: '💻' },
  { name: 'Distance Education', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80', icon: '📚' },
];

export default function ProgramsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="academics" ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-subtitle">Academic Excellence</p>
          <h2 className="section-title max-w-2xl">
            Explore Diverse Programs for Every Career
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 h-44 shadow-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-srm-navy/80 via-srm-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 flex items-end gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-base leading-tight">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
