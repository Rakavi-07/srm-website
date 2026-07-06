import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, GraduationCap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Academics', target: 'academics' },
  { label: 'Admissions', target: 'admissions' },
  { label: 'Campus Life', target: 'campus' },
  { label: 'Placements', target: 'placements' },
  { label: 'Research', target: 'research' },
  { label: 'News', target: 'news' },
  { label: 'Contact', target: 'contact' },
];

const SEARCH_MAP: Record<string, string> = {
  academics: 'academics',
  programs: 'academics',
  engineering: 'academics',
  management: 'academics',
  courses: 'academics',
  admissions: 'admissions',
  apply: 'admissions',
  scholarships: 'admissions',
  fees: 'admissions',
  hostel: 'campus',
  'campus life': 'campus',
  sports: 'campus',
  clubs: 'campus',
  placements: 'placements',
  jobs: 'placements',
  recruiters: 'placements',
  research: 'research',
  innovation: 'research',
  news: 'news',
  events: 'news',
  contact: 'contact',
};

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (val: string) => {
    setQuery(val);
    if (!val.trim()) { setResults([]); return; }
    const lower = val.toLowerCase();
    const matches = Object.keys(SEARCH_MAP).filter(k => k.includes(lower));
    setResults([...new Set(matches)].slice(0, 5));
  };

  const handleResultClick = (key: string) => {
    scrollTo(SEARCH_MAP[key]);
    setSearchOpen(false);
    setQuery('');
    setResults([]);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-srm-navy text-white text-xs py-2.5 px-4 text-center">
        <span className="text-srm-gold mr-2">●</span>
        SRMJEEE 2026 Applications Open
      </div>

      {/* Main Navbar */}
      <motion.nav
        animate={scrolled ? { boxShadow: '0 4px 24px rgba(0,0,0,0.10)' } : { boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-10 h-10 bg-srm-navy rounded-lg flex items-center justify-center">
              <GraduationCap className="text-srm-gold w-6 h-6" />
            </div>
            <div className="hidden sm:block">
              <div className="text-srm-navy font-black text-xl leading-none tracking-wide">SRM</div>
              <div className="text-srm-gold text-[8px] tracking-widest uppercase leading-none mt-1">Learn. Leap. Lead.</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, target }) => (
              <button
                key={label}
                onClick={() => scrollTo(target)}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-srm-navy rounded-md hover:bg-srm-light transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(s => !s)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-srm-navy hover:bg-srm-light transition-colors"
            >
              <Search size={17} />
            </button>
            <button
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-srm-navy hover:bg-srm-light transition-colors"
              onClick={() => setMobileOpen(s => !s)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-100"
            >
              <div className="max-w-xl mx-auto px-4 py-3 relative">
                <div className="relative">
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={e => handleSearch(e.target.value)}
                    placeholder="Search academics, admissions, hostel…"
                    className="w-full border border-gray-200 rounded-full px-5 py-2.5 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-srm-gold"
                  />
                  <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                {results.length > 0 && (
                  <div className="absolute left-4 right-4 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                    {results.map(r => (
                      <button
                        key={r}
                        onClick={() => handleResultClick(r)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-srm-light hover:text-srm-navy capitalize transition-colors"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
              <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                <span className="font-bold text-srm-navy">Menu</span>
                <button onClick={() => setMobileOpen(false)}><X size={20} /></button>
              </div>
              <div className="p-4 space-y-1">
                {NAV_LINKS.map(({ label, target }) => (
                  <button
                    key={label}
                    onClick={() => { scrollTo(target); setMobileOpen(false); }}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-srm-light hover:text-srm-navy rounded-xl transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
