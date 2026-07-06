import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  '110+ UG & PG Programs', 'NAAC A++ Accredited', 'Ranked #1 in Tamil Nadu',
  '500+ Placement Partners', 'Merit Scholarships Available', 'International Exchange Programs',
];

const steps = [
  { num: '01', title: 'Register Online', desc: 'Fill in your application at srmist.edu.in' },
  { num: '02', title: 'Appear for SRMJEEE', desc: 'Take the entrance exam at your nearest centre' },
  { num: '03', title: 'Counselling', desc: 'Check rank, choose your branch & campus' },
  { num: '04', title: 'Confirm Seat', desc: 'Pay fees and confirm your admission' },
];

export default function AdmissionsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="admissions" ref={ref} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-srm-navy via-[#0f2d5c] to-[#0d3060]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-srm-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">Admissions 2026</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Begin Your<br />Journey at SRM
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md">
              Applications are now open for the 2026–27 academic year. Join 25,000+ students from across India and 40+ countries.
            </p>
            <div className="space-y-3 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="flex items-center gap-3 text-white/75 text-sm"
                >
                  <CheckCircle size={15} className="text-srm-gold flex-shrink-0" />
                  {h}
                </motion.div>
              ))}
            </div>
            <a
              href="/admissions"
              className="inline-flex items-center gap-2 bg-srm-gold text-white font-semibold px-7 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 text-sm shadow-lg"
            >
              Apply Now <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4 pt-2"
          >
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-6">How to Apply</p>
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1 }}
                className="flex gap-5 p-5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="text-srm-gold font-black text-2xl leading-none flex-shrink-0">{s.num}</span>
                <div>
                  <h4 className="text-white font-bold text-base">{s.title}</h4>
                  <p className="text-white/50 text-sm mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
