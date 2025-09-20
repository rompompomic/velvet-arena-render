import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pakalpojumi from "./pages/Pakalpojumi";
import NotFound from "./pages/NotFound";
import JasanasTrenini from "./pages/JasanasTrenini";
import ZirguUzturesana from "./pages/ZirguUzturesana";
import LaukumuIre from "./pages/LaukumuIre";
import Ekskursijas from "./pages/Ekskursijas";
import KorporativiepasakumI from "./pages/KorporativiepasakumI";
import CitiPakalpojumi from "./pages/CitiPakalpojumi";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lv/pakalpojumi/" element={<Pakalpojumi />} />
          <Route path="/lv/pakalpojumi/jasanas-trenini/" element={<JasanasTrenini />} />
          <Route path="/lv/pakalpojumi/zirgu-uzturesana/" element={<ZirguUzturesana />} />
          <Route path="/lv/pakalpojumi/laukumu-ire/" element={<LaukumuIre />} />
          <Route path="/lv/pakalpojumi/ekskursijas/" element={<Ekskursijas />} />
          <Route path="/lv/pakalpojumi/korporativie-pasakumi/" element={<KorporativiepasakumI />} />
          <Route path="/lv/pakalpojumi/citi-pakalpojumi/" element={<CitiPakalpojumi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
