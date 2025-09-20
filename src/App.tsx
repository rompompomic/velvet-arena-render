import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Pakalpojumi from "./pages/Pakalpojumi";
import NotFound from "./pages/NotFound";
import JasanasTrenini from "./pages/JasanasTrenini";
import ZirguUzturesana from "./pages/ZirguUzturesana";
import LaukumuIre from "./pages/LaukumuIre";
import Ekskursijas from "./pages/Ekskursijas";
import KorporativiepasakumI from "./pages/KorporativiepasakumI";
import CitiPakalpojumi from "./pages/CitiPakalpojumi";
import Cenas from "./pages/Cenas";
import Jaunumi from "./pages/Jaunumi";
import WinterPreparation from "./pages/WinterPreparation";
import StudentSuccess from "./pages/StudentSuccess";
import KidsPrograms from "./pages/KidsPrograms";
import Galerija from "./pages/Galerija";
import EventGallery from "./pages/EventGallery";
import EventAlbumDetail from "./pages/EventAlbumDetail";
import RidingSchoolGallery from "./pages/RidingSchoolGallery";
import RidingSchoolAlbumDetail from "./pages/RidingSchoolAlbumDetail";
import Pasakumi from "./pages/Pasakumi";
import EventDetail from "./pages/EventDetail";
import ParMums from "./pages/ParMums";
import Kontakti from "./pages/Kontakti";
import LietosanasNoteikumi from "./pages/LietosanasNoteikumi";
import PrivatumaPolitika from "./pages/PrivatumaPolitika";
import DavanuKartes from "./pages/DavanuKartes";
import Checkout from "./pages/Checkout";
import PaldiesParPirkumu from "./pages/PaldiesParPirkumu";
import Ziedojumi from "./pages/Ziedojumi";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/lv/" replace />} />
          <Route path="/lv/pakalpojumi/" element={<Pakalpojumi />} />
          <Route path="/lv/pakalpojumi/jasanas-trenini/" element={<JasanasTrenini />} />
          <Route path="/lv/pakalpojumi/zirgu-uzturesana/" element={<ZirguUzturesana />} />
          <Route path="/lv/pakalpojumi/laukumu-ire/" element={<LaukumuIre />} />
          <Route path="/lv/pakalpojumi/ekskursijas/" element={<Ekskursijas />} />
          <Route path="/lv/pakalpojumi/korporativie-pasakumi/" element={<KorporativiepasakumI />} />
          <Route path="/lv/pakalpojumi/citi-pakalpojumi/" element={<CitiPakalpojumi />} />
          <Route path="/lv/cenas/" element={<Cenas />} />
          <Route path="/lv/jaunumi/" element={<Jaunumi />} />
          <Route path="/lv/jaunumi/winter-preparation" element={<WinterPreparation />} />
          <Route path="/lv/jaunumi/student-success" element={<StudentSuccess />} />
          <Route path="/lv/jaunumi/kids-programs" element={<KidsPrograms />} />
          <Route path="/lv/galerija/" element={<Galerija />} />
          <Route path="/lv/galerija/pasakumi/" element={<EventGallery />} />
          <Route path="/lv/galerija/pasakumi/:id/" element={<EventAlbumDetail />} />
          <Route path="/lv/galerija/jauno-jatnieku-skola/" element={<RidingSchoolGallery />} />
          <Route path="/lv/galerija/jauno-jatnieku-skola/:id/" element={<RidingSchoolAlbumDetail />} />
          <Route path="/lv/pasakumi/" element={<Pasakumi />} />
          <Route path="/lv/pasakumi/:event/" element={<EventDetail />} />
          <Route path="/lv/par-mums/" element={<ParMums />} />
          <Route path="/lv/kontakti/" element={<Kontakti />} />
          <Route path="/lv/lietosanas-noteikumi/" element={<LietosanasNoteikumi />} />
          <Route path="/lv/privatuma-politika/" element={<PrivatumaPolitika />} />
          <Route path="/lv/davanu-kartes/" element={<DavanuKartes />} />
          <Route path="/lv/checkout/" element={<Checkout />} />
          <Route path="/lv/paldies-par-pirkumu/" element={<PaldiesParPirkumu />} />
          <Route path="/lv/ziedojumi/" element={<Ziedojumi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
