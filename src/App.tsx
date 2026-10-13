import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMarquee } from './components/BrandMarquee';
import { TheCraft } from './components/TheCraft';
import { SignatureServices } from './components/SignatureServices';
import { ComparisonSlider } from './components/ComparisonSlider';
import { TheExperience } from './components/TheExperience';
import { StyleGallery } from './components/StyleGallery';
import { Testimonials } from './components/Testimonials';
import { VisitAndBooking } from './components/VisitAndBooking';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    } else {
      setPreselectedServiceId(null);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative bg-[#101010] text-[#F4F0E8] min-h-screen selection:bg-[#D6B477] selection:text-[#101010]">
      {/* Subtle Film Grain Noise Texture */}
      <div className="grain-overlay" />

      {/* Trailing Luxury Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Opening Animated Monogram Preloader */}
      {!isPreloaded && (
        <Preloader onComplete={() => setIsPreloaded(true)} />
      )}

      {/* Fixed Luxury Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Experience */}
      <main>
        {/* 1. Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Marquee Statements */}
        <BrandMarquee />

        {/* 3. The Craft: Editorial Split Layout */}
        <TheCraft />

        {/* 4. Signature Services (INR Pricing) */}
        <SignatureServices onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* 5. Interactive Before/After Hairstyle Slider */}
        <ComparisonSlider />

        {/* 6. The Experience & Atmosphere */}
        <TheExperience />

        {/* 7. Style Gallery & Immersive Lightbox */}
        <StyleGallery />

        {/* 8. Patron Critique Testimonials */}
        <Testimonials />

        {/* 9. Kolkata Location, Map & Appointment CTA */}
        <VisitAndBooking onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 10. Minimalist Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
};

export default App;
