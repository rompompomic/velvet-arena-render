import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainSponsorSection from "@/components/MainSponsorSection";
import ServicesSection from "@/components/ServicesSection";
import GiftCardSection from "@/components/GiftCardSection";
import PricesSection from "@/components/PricesSection";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";
import DonationsSection from "@/components/DonationsSection";
import SponsorsSection from "@/components/SponsorsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Sponsor */}
        <MainSponsorSection />
        
        {/* Services/Audience Cards */}
        <ServicesSection />
        
        {/* Gift Card Highlight */}
        <GiftCardSection />
        
        {/* Prices */}
        <PricesSection />
        
        {/* Upcoming Events */}
        <EventsSection />
        
        {/* News Section */}
        <NewsSection />
        
        {/* Donations */}
        <DonationsSection />
        
        {/* Sponsors */}
        <SponsorsSection />
        
        {/* Map */}
        <MapSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
