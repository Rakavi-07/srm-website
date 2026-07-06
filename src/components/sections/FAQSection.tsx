// Gallery Section (replaces FAQ)
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GALLERY_IMAGES } from '../../data';

export default function GallerySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="section-subtitle">Campus Glimpse</p>
          <h2 className="section-title">Life at SRM in Pictures</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-row-dense">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07 }}
              className={`rounded-2xl overflow-hidden ${
                [0, 5].includes(i) ? 'md:col-span-2 md:row-span-2' : 
                [3, 4, 7].includes(i) ? 'md:col-span-2 md:row-span-1' : 
                'md:col-span-1 md:row-span-1'
              }`}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
