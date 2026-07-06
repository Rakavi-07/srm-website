import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const footerSections = [
  {
    title: 'About Us',
    links: ['About SRM', 'Vision & Mission', 'Leadership', 'Accreditations', 'Rankings'],
  },
  {
    title: 'Academics',
    links: ['Engineering', 'Management', 'Science', 'Arts & Humanities', 'Law', 'Medicine'],
  },
  {
    title: 'Admissions',
    links: ['UG Admissions', 'PG Admissions', 'International Admissions', 'Fees Structure', 'Scholarships'],
  },
  {
    title: 'Campus Life',
    links: ['Hostel', 'Clubs & Committees', 'Sports', 'Events & Festivals', 'Health Center'],
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-srm-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <GraduationCap className="text-srm-gold w-7 h-7" />
              </div>
              <div>
                <div className="text-white font-black text-2xl leading-none">SRM</div>
                <div className="text-white/60 text-[10px] tracking-widest uppercase">University</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              SRM University is committed to excellence in teaching, research, and innovation, shaping world-class professionals since 1985.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-srm-gold border border-white/10 flex items-center justify-center transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map(section => (
            <div key={section.title}>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/60 text-sm hover:text-srm-gold transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-srm-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">SRM University, Kattankulathur, Chennai, Tamil Nadu – 603203</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-srm-gold flex-shrink-0" />
                <a href="tel:+914427455555" className="text-white/60 text-sm hover:text-srm-gold transition-colors">+91 44 2745 5555</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-srm-gold flex-shrink-0" />
                <a href="mailto:info@srmist.edu.in" className="text-white/60 text-sm hover:text-srm-gold transition-colors">info@srmist.edu.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">© 2025 SRM University. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms & Conditions', 'Sitemap'].map(link => (
              <a key={link} href="#" className="text-white/50 text-xs hover:text-srm-gold transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
