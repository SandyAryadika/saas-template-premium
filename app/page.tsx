import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import Features from '@/components/sections/Features';
import Solutions from '@/components/sections/Solutions'; 
import DocPreview from '@/components/sections/DocPreview'; 
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Features />
      <Solutions />   
      <DocPreview />  
      <Pricing />
      <Footer />
    </main>
  );
}