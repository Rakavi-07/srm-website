import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../../data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="hero" className="relative h-[90vh] min-h-[580px] max-h-[860px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        onSlideChange={(s) => setActiveSlide(s.realIndex)}
        className="w-full h-full"
      >
        {HERO_SLIDES.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: activeSlide === idx ? 1.05 : 1 }}
                transition={{ duration: 8, ease: "linear" }}
                src={slide.image}
                alt={slide.title}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-srm-navy/85 via-srm-navy/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-srm-navy/60 via-transparent to-transparent" />

              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                  {/* Left */}
                  <AnimatePresence mode="wait">
                    {activeSlide === idx && (
                      <motion.div
                        key={`slide-${idx}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-white"
                      >
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-srm-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                        >
                          Established 1985 · Tamil Nadu, India
                        </motion.p>
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-5 tracking-tight"
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.45 }}
                          className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-md"
                        >
                          {slide.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.55 }}
                        >
                          <button
                            onClick={() => scrollTo('academics')}
                            className="inline-flex items-center gap-2 bg-srm-gold text-white font-semibold px-7 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg text-sm"
                          >
                            Explore Programs <ArrowRight size={16} />
                          </button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


