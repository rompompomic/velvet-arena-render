import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GiftCardSection from "@/components/GiftCardSection";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";
import SponsorsSection from "@/components/SponsorsSection";
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
        
        {/* Services/Audience Cards */}
        <ServicesSection />
        
        {/* Gift Card Highlight */}
        <GiftCardSection />
        
        {/* Upcoming Events */}
        <EventsSection />
        
        {/* News Section */}
        <NewsSection />
        
        {/* Sponsors */}
        <SponsorsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
