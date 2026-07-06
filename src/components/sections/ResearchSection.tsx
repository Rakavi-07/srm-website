import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Leaf, Microscope, HeartPulse } from 'lucide-react';

const areas = [
  {
    icon: Cpu,
    title: 'Artificial Intelligence & ML',
    desc: 'Deep learning, NLP, computer vision, and autonomous systems powering next-generation solutions.',
    papers: '320+',
    color: 'bg-blue-600',
    iconColor: 'text-blue-600',
  },
  {
    icon: Leaf,
    title: 'Renewable Energy',
    desc: 'Solar, wind, and green hydrogen innovations addressing global energy sustainability challenges.',
    papers: '185+',
    color: 'bg-emerald-600',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Microscope,
    title: 'Nanotechnology',
    desc: 'Pioneering nanomaterial synthesis and advanced composites for next-generation applications.',
    papers: '210+',
    color: 'bg-purple-600',
    iconColor: 'text-purple-600',
  },
  {
    icon: HeartPulse,
    title: 'Biomedical Sciences',
    desc: 'Translational research bridging biology, medicine and engineering for tangible healthcare impact.',
    papers: '270+',
    color: 'bg-red-600',
    iconColor: 'text-red-600',
  },
];

export default function ResearchSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="research" ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="section-subtitle">Innovation Hub</p>
          <h2 className="section-title max-w-xl">Research & Innovation</h2>
          <p className="text-gray-600 mt-4 max-w-lg text-base">
            100+ state-of-the-art laboratories, 5 research parks, and 1,000+ publications annually across disciplines.
          </p>
        </motion.div>

        {/* Summary stats */}
        <div className="flex flex-wrap gap-6 mb-14">
          {[['1,000+', 'Annual Publications'], ['₹500 Cr', 'Research Funding'], ['50+', 'Patents Filed'], ['200+', 'Research Faculty']].map(([val, label]) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-srm-navy">{val}</span>
              <span className="text-gray-600 text-sm">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -5, scale: 1.02 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: inView ? i * 0.1 : 0 }}
              className={`${a.color} rounded-2xl p-6 shadow-lg flex flex-col h-full`}
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm flex-shrink-0 transition-transform`}
              >
                <a.icon size={20} className={a.iconColor} />
              </motion.div>
              <h4 className="font-bold text-white text-lg mb-3 tracking-tight">{a.title}</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">{a.desc}</p>
              <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">{a.papers} Papers</span>
                <span className="text-white/60 text-xs hover:text-white cursor-pointer transition-colors">Explore →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
