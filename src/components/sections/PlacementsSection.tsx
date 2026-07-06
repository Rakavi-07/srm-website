import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { value: 92, suffix: '%', label: 'Placement Rate' },
  { value: 500, suffix: '+', label: 'Top Recruiters' },
  { value: 44, suffix: 'LPA', label: 'Highest Package' },
  { value: 8, suffix: 'LPA', label: 'Average Package' },
];

const recruiters = [
  'Google', 'Microsoft', 'Amazon', 'Wipro', 'Infosys',
  'TCS', 'Cognizant', 'Accenture', 'IBM', 'Deloitte',
  'Goldman Sachs', 'JP Morgan', 'Adobe', 'Oracle', 'Zoho',
  'HCL', 'Capgemini', 'L&T', 'Samsung', 'Cisco',
];

export default function PlacementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="placements" ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="section-subtitle">Career Success</p>
          <h2 className="section-title max-w-xl">Placements & Industry Connect</h2>
          <p className="text-gray-600 mt-4 max-w-lg text-base">
            Our dedicated Placement Cell ensures every student is industry-ready with 500+ top companies visiting campus every year.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-gradient-to-br from-srm-navy to-srm-blue rounded-2xl p-7 text-center shadow-lg"
            >
              <div className="text-4xl font-black text-white">
                {inView ? <CountUp end={s.value} duration={2.5} delay={i * 0.1} /> : 0}
                <span className="text-srm-gold">{s.suffix}</span>
              </div>
              <p className="text-white/80 text-sm mt-2 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recruiters */}
        <div>
          <p className="text-gray-600 text-xs uppercase tracking-widest font-medium mb-6">Our Recruiting Partners</p>
          <div className="relative overflow-hidden">
            <div className="flex gap-3" style={{ animation: 'marquee 22s linear infinite', width: 'max-content' }}>
              {[...recruiters, ...recruiters].map((r, i) => (
                <div
                  key={i}
                  className="px-5 py-2.5 bg-srm-gray rounded-xl text-gray-600 font-semibold text-sm flex-shrink-0 border border-transparent hover:border-srm-gold hover:text-srm-navy transition-colors"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
      </div>
    </section>
  );
}
