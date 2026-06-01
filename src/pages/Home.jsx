import Navbar from '../components/landing/Navbar';
import DataTicker from '../components/landing/DataTicker';
import HeroSection from '../components/landing/HeroSection';
import TransformationsSection from '../components/landing/TransformationsSection';
import TrainersSection from '../components/landing/TrainersSection';
import EquipmentSection from '../components/landing/EquipmentSection';
import GallerySection from '../components/landing/GallerySection';
import ReviewsSection from '../components/landing/ReviewsSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import CookieBanner from '../components/CookieBanner';

export default function Home() {
  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <Navbar />
      <DataTicker />
      <HeroSection />
      <TransformationsSection />
      <TrainersSection />
      <EquipmentSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </div>
  );
}