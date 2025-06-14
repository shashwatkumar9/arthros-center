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
import ACLProcedures from "./pages/ACLProcedures";
import ACLReconstruction from "./pages/ACLReconstruction";
import ACLRepair from "./pages/ACLRepair";
import RevisionACLSurgery from "./pages/RevisionACLSurgery";
import ACLWithMeniscusRepair from "./pages/ACLWithMeniscusRepair";
import PCLMultiLigament from "./pages/PCLMultiLigament";
import PCLReconstruction from "./pages/PCLReconstruction";
import MCLReconstruction from "./pages/MCLReconstruction";
import MultiLigamentReconstruction from "./pages/MultiLigamentReconstruction";
import PosterolateralCornerRepair from "./pages/PosterolateralCornerRepair";
import OtherKneeProcedures from "./pages/OtherKneeProcedures";
import MeniscusRepair from "./pages/MeniscusRepair";
import KneeReplacement from "./pages/KneeReplacement";
import PatellaStabilization from "./pages/PatellaStabilization";
import CartilageRestoration from "./pages/CartilageRestoration";

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
          
          {/* ACL Procedures */}
          <Route path="/acl-procedures" element={<ACLProcedures />} />
          <Route path="/acl-reconstruction" element={<ACLReconstruction />} />
          <Route path="/acl-repair" element={<ACLRepair />} />
          <Route path="/revision-acl-surgery" element={<RevisionACLSurgery />} />
          <Route path="/acl-with-meniscus-repair" element={<ACLWithMeniscusRepair />} />
          
          {/* PCL & Multi-ligament */}
          <Route path="/pcl-multi-ligament" element={<PCLMultiLigament />} />
          <Route path="/pcl-reconstruction" element={<PCLReconstruction />} />
          <Route path="/mcl-reconstruction" element={<MCLReconstruction />} />
          <Route path="/multi-ligament-reconstruction" element={<MultiLigamentReconstruction />} />
          <Route path="/posterolateral-corner-repair" element={<PosterolateralCornerRepair />} />
          
          {/* Other Knee Procedures */}
          <Route path="/other-knee-procedures" element={<OtherKneeProcedures />} />
          <Route path="/meniscus-repair" element={<MeniscusRepair />} />
          <Route path="/knee-replacement" element={<KneeReplacement />} />
          <Route path="/patella-stabilization" element={<PatellaStabilization />} />
          <Route path="/cartilage-restoration" element={<CartilageRestoration />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
