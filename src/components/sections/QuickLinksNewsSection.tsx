import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Tag } from 'lucide-react';
import { NEWS_ITEMS, EVENTS } from '../../data';

export default function NewsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="news" ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Latest News */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subtitle">Latest Updates</p>
            <h2 className="section-title text-2xl mb-10">News & Announcements</h2>

            <div className="space-y-6">
              {NEWS_ITEMS.slice(0, 3).map((news, i) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Tag size={10} className="text-srm-gold" />
                      <span className="text-srm-gold text-[10px] font-semibold uppercase tracking-wider">{news.category}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-srm-navy line-clamp-2 leading-snug transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 text-xs mt-2 flex items-center gap-1">
                      <Calendar size={10} /> {news.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="section-subtitle">What's Coming</p>
            <h2 className="section-title text-2xl mb-10">Upcoming Events</h2>

            <div className="space-y-4">
              {EVENTS.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex gap-5 p-4 bg-white rounded-2xl border border-gray-100"
                >
                  <div className="w-14 h-14 bg-srm-navy text-white rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-bold opacity-60 uppercase">{event.month}</span>
                    <span className="text-2xl font-black leading-none">{event.day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">{event.title}</h4>
                    <p className="text-gray-600 text-xs mt-1">{event.date}</p>
                    <p className="text-srm-gold text-xs font-medium mt-0.5">{event.venue}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
