import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const STATS = [
  { value: 25000, suffix: '+', label: 'Students', icon: '👨‍🎓' },
  { value: 500, suffix: '+', label: 'Faculty', icon: '👨‍🏫' },
  { value: 110, suffix: '+', label: 'Programs', icon: '🏛️' },
  { value: 500, suffix: '+', label: 'Recruiters', icon: '🌐' },
  { value: 40, suffix: '+', label: 'Countries', icon: '🏆' },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="bg-srm-navy py-8 border-b border-srm-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 divide-x divide-white/20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center gap-3 px-6 py-5 first:pl-0 last:pr-0"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-black text-white leading-none">
                  {inView ? <CountUp end={stat.value} duration={2.5} delay={i * 0.08} separator="," /> : '0'}
                  <span className="text-srm-gold">{stat.suffix}</span>
                </div>
                <div className="text-white/70 text-xs font-medium mt-0.5">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
