import type { NavItem, Stat, NewsItem, Event, Program, Testimonial, FAQ } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About', href: '/about',
    children: [
      { label: 'About SRM', href: '/about/srm' },
      { label: 'Vision & Mission', href: '/about/vision' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Accreditations', href: '/about/accreditations' },
      { label: 'Rankings', href: '/about/rankings' },
    ],
  },
  {
    label: 'Academics', href: '/academics',
    children: [
      { label: 'Engineering', href: '/academics/engineering' },
      { label: 'Management', href: '/academics/management' },
      { label: 'Science', href: '/academics/science' },
      { label: 'Arts & Humanities', href: '/academics/arts' },
      { label: 'Law', href: '/academics/law' },
      { label: 'Medicine', href: '/academics/medicine' },
    ],
  },
  {
    label: 'Admissions', href: '/admissions',
    children: [
      { label: 'UG Admissions', href: '/admissions/ug' },
      { label: 'PG Admissions', href: '/admissions/pg' },
      { label: 'International Admissions', href: '/admissions/international' },
      { label: 'Fees Structure', href: '/admissions/fees' },
      { label: 'Scholarships', href: '/admissions/scholarships' },
    ],
  },
  {
    label: 'Campus Life', href: '/campus',
    children: [
      { label: 'Hostel', href: '/campus/hostel' },
      { label: 'Clubs & Committees', href: '/campus/clubs' },
      { label: 'Sports', href: '/campus/sports' },
      { label: 'Events & Festivals', href: '/campus/events' },
      { label: 'Health Center', href: '/campus/health' },
    ],
  },
  { label: 'Placements', href: '/placements' },
  { label: 'Research', href: '/research' },
  { label: 'News & Events', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const STATS: Stat[] = [
  { value: 25000, suffix: '+', label: 'Students', icon: '👨‍🎓' },
  { value: 500, suffix: '+', label: 'Faculty', icon: '👨‍🏫' },
  { value: 110, suffix: '+', label: 'Programs', icon: '🏛️' },
  { value: 500, suffix: '+', label: 'Recruiters', icon: '🌐' },
  { value: 1, suffix: 'st', label: 'Ranked #1', icon: '🏆' },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: 'SRM Ranked Among Top 10 Universities in India',
    date: 'May 20, 2025',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80',
    category: 'Rankings',
  },
  {
    id: 2,
    title: 'Annual Tech Fest "Aarush 2025" Concludes with Grand Success',
    date: 'May 18, 2025',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
    category: 'Events',
  },
  {
    id: 3,
    title: 'MoU Signed with Leading Universities Across the Globe',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
    category: 'International',
  },
  {
    id: 4,
    title: 'SRM Research Team Develops Breakthrough in Renewable Energy',
    date: 'May 10, 2025',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80',
    category: 'Research',
  },
];

export const EVENTS: Event[] = [
  {
    id: 1,
    title: 'International Conference on AI & ML',
    date: 'June 5 – June 7, 2025',
    month: 'JUN',
    day: '05',
    venue: 'University Auditorium',
  },
  {
    id: 2,
    title: 'Scholarship Entrance Test 2025',
    date: 'June 15, 2025',
    month: 'JUN',
    day: '15',
    venue: 'Main Campus',
  },
  {
    id: 3,
    title: 'Annual Sports Meet 2025',
    date: 'June 20 – June 22, 2025',
    month: 'JUN',
    day: '20',
    venue: 'Sports Complex',
  },
  {
    id: 4,
    title: 'Industry–Academia Conclave',
    date: 'July 3, 2025',
    month: 'JUL',
    day: '03',
    venue: 'Convention Centre',
  },
];

export const PROGRAMS: Program[] = [
  { id: 1, name: 'B.Tech Computer Science', department: 'Engineering', duration: '4 Years', icon: '💻', color: 'from-blue-500 to-blue-700' },
  { id: 2, name: 'MBA Business Analytics', department: 'Management', duration: '2 Years', icon: '📊', color: 'from-purple-500 to-purple-700' },
  { id: 3, name: 'MBBS Medicine', department: 'Medical', duration: '5.5 Years', icon: '🏥', color: 'from-red-500 to-red-700' },
  { id: 4, name: 'B.Tech Mechanical', department: 'Engineering', duration: '4 Years', icon: '⚙️', color: 'from-orange-500 to-orange-700' },
  { id: 5, name: 'B.Sc Data Science', department: 'Science', duration: '3 Years', icon: '🔬', color: 'from-green-500 to-green-700' },
  { id: 6, name: 'LLB Law', department: 'Law', duration: '5 Years', icon: '⚖️', color: 'from-indigo-500 to-indigo-700' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Arjun Ramesh',
    role: 'Software Engineer',
    company: 'Google India',
    avatar: 'https://i.pravatar.cc/100?img=11',
    text: 'SRM gave me the foundation to excel in the tech industry. The faculty is world-class, the infrastructure is excellent, and the placement support is unmatched. I am grateful for every opportunity this institution provided.',
  },
  {
    id: 2,
    name: 'Priya Krishnan',
    role: 'Data Scientist',
    company: 'Microsoft',
    avatar: 'https://i.pravatar.cc/100?img=5',
    text: 'The research culture at SRM is phenomenal. I published two IEEE papers during my undergraduate years, which set me apart. The professors here are genuinely invested in student success.',
  },
  {
    id: 3,
    name: 'Karthik Selvam',
    role: 'Product Manager',
    company: 'Amazon',
    avatar: 'https://i.pravatar.cc/100?img=7',
    text: 'Campus life at SRM was an incredible experience. Between the technical fests, cultural events, and startup ecosystem, I grew both professionally and personally. Highly recommend SRM to every aspiring student.',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: 'What are the eligibility criteria for B.Tech admission?',
    answer: 'Candidates must have passed Class 12 with Physics, Chemistry, and Mathematics with a minimum of 60% aggregate marks. Admission is based on SRMJEEE scores or JEE Main scores.',
  },
  {
    id: 2,
    question: 'Does SRM offer scholarships for meritorious students?',
    answer: 'Yes, SRM offers a range of scholarships including merit-based, need-based, and sports scholarships. The SRM Scholarship Test is conducted annually for new admissions.',
  },
  {
    id: 3,
    question: 'What is the placement record of SRM University?',
    answer: 'SRM consistently achieves 90%+ placement rates with 500+ top recruiters. The highest package offered has been 1.2 Crore per annum with average packages of 6–8 LPA.',
  },
  {
    id: 4,
    question: 'Are hostel facilities available on campus?',
    answer: 'Yes, SRM provides separate hostel facilities for boys and girls with 24/7 security, Wi-Fi, mess, and recreation areas. The hostels are located within the campus for easy access.',
  },
  {
    id: 5,
    question: 'How can international students apply to SRM?',
    answer: 'International students can apply through the International Admissions portal. SRM has a dedicated International Relations office to assist students with visas, accommodation, and academic guidance.',
  },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'LEARN. LEAP. LEAD.',
    subtitle: 'BUILDING FUTURES SINCE 1985',
    description: 'Empowering young minds with quality education, cutting-edge research and vibrant campus life.',
    image: '/images/hero/hero-1.webp',
  },
  {
    id: 2,
    title: 'RESEARCH. INNOVATE. EXCEL.',
    subtitle: 'PIONEERING ACADEMIC EXCELLENCE',
    description: 'Join a community of 25,000+ students and 500+ faculty dedicated to transforming the future.',
    image: '/images/hero/hero-2.webp',
  },
  {
    id: 3,
    title: 'DREAM. DISCOVER. DELIVER.',
    subtitle: 'INDIA\'S TOP RANKED UNIVERSITY',
    description: 'From engineering to medicine, management to arts — find your path at SRM.',
    image: '/images/hero/hero-3.webp',
  },
  {
    id: 4,
    title: 'EXPERIENCE CAMPUS LIFE',
    subtitle: 'A VIBRANT ECOSYSTEM',
    description: 'State-of-the-art sports facilities, hostels, and student clubs for holistic development.',
    image: '/images/hero/hero-4.webp',
  },
];

export const QUICK_LINKS = [
  { label: 'Admissions', icon: '🎓', href: '/admissions' },
  { label: 'Academics', icon: '📚', href: '/academics' },
  { label: 'Examination', icon: '📝', href: '/examination' },
  { label: 'Fee Payment', icon: '💳', href: '/fees' },
  { label: 'Student Portal', icon: '👤', href: '/portal' },
  { label: 'Virtual Library', icon: '📖', href: '/library' },
  { label: 'Placement Cell', icon: '💼', href: '/placements' },
  { label: 'Contact Us', icon: '📞', href: '/contact' },
];

export const POPULAR_SEARCHES = ['B.Tech CSE', 'MBA', 'Hostel', 'Scholarships', 'Placements', 'Fees Structure'];

export const GALLERY_IMAGES = [
  '/images/gallery/admin-building.webp',
  '/images/gallery/classroom.webp',
  '/images/gallery/auditorium.webp',
  '/images/gallery/laboratory.webp',
  '/images/gallery/sports-complex.webp',
  '/images/gallery/aerial-campus.webp',
  '/images/gallery/hostel.webp',
  '/images/gallery/library.webp',
];
