import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import ProgramsSection from './components/sections/ProgramsSection';
import AdmissionsSection from './components/sections/AdmissionsSection';
import PlacementsSection from './components/sections/PlacementsSection';
import ResearchSection from './components/sections/ResearchSection';
import CampusLifeSection from './components/sections/CampusLifeSection';
import RankingsSection from './components/sections/TestimonialsSection';
import NewsSection from './components/sections/QuickLinksNewsSection';
import GallerySection from './components/sections/FAQSection';
import ContactCTASection from './components/sections/ContactCTASection';
import ChatbotButton from './components/ui/ChatbotButton';

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <NewsSection />
        <ProgramsSection />
        <AdmissionsSection />
        <PlacementsSection />
        <ResearchSection />
        <RankingsSection />
        <CampusLifeSection />
        <GallerySection />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
