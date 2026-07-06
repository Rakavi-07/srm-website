import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const rankings = [
  { label: 'NAAC', value: 'A++', desc: 'Highest Grade', badge: '⭐' },
  { label: 'NIRF', value: '#13', desc: 'Engineering Rank', badge: '🏆' },
  { label: 'QS World', value: '651–700', desc: 'Global Ranking', badge: '🌐' },
  { label: 'NBA', value: 'Accredited', desc: 'Multiple Programs', badge: '✅' },
  { label: 'Times HE', value: 'Top 100', desc: 'Asia Ranking', badge: '📊' },
];

export default function RankingsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="section-subtitle">Recognition</p>
          <h2 className="section-title">Rankings &amp; Accreditations</h2>
          <p className="text-gray-600 mt-4 max-w-lg text-base">
            Recognized and accredited by the world's most prestigious academic and professional bodies.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {rankings.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-srm-gray/80 border border-srm-navy/5 rounded-full pl-2 pr-6 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                {r.badge}
              </div>
              <div>
                <div className="text-srm-navy font-black text-sm leading-tight flex items-center gap-2">
                  {r.label} <span className="text-srm-gold">{r.value}</span>
                </div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold">{r.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
