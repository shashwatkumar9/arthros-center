
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KneeSurgeries from "./pages/KneeSurgeries";
import ShoulderElbow from "./pages/ShoulderElbow";
import HipPelvis from "./pages/HipPelvis";
import SpineSurgery from "./pages/SpineSurgery";
import SportsMedicine from "./pages/SportsMedicine";
import HandWrist from "./pages/HandWrist";
import FootAnkle from "./pages/FootAnkle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/knee-surgeries" element={<KneeSurgeries />} />
          <Route path="/shoulder-elbow" element={<ShoulderElbow />} />
          <Route path="/hip-pelvis" element={<HipPelvis />} />
          <Route path="/spine" element={<SpineSurgery />} />
          <Route path="/sports-medicine" element={<SportsMedicine />} />
          <Route path="/hand-wrist" element={<HandWrist />} />
          <Route path="/foot-ankle" element={<FootAnkle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
