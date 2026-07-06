import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="contact" ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">Contact Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: 'Visit Us', detail: 'SRM Nagar, Kattankulathur, Chengalpattu, Tamil Nadu – 603203' },
            { icon: Phone, title: 'Call Us', detail: '+91 44 2745 5555\n1800-102-1525 (Toll Free)' },
            { icon: Mail, title: 'Email Us', detail: 'admissions@srmist.edu.in\ninfo@srmist.edu.in' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-srm-light flex items-center justify-center mb-5">
                <item.icon size={20} className="text-srm-navy" />
              </div>
              <h4 className="font-bold text-srm-navy text-base mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
