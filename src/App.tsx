
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
import RotatorCuffRepair from "./pages/RotatorCuffRepair";
import MassiveRotatorCuffRepair from "./pages/MassiveRotatorCuffRepair";
import RotatorCuffReconstruction from "./pages/RotatorCuffReconstruction";
import BankartRepair from "./pages/BankartRepair";
import LatarjetProcedure from "./pages/LatarjetProcedure";
import SLAPRepair from "./pages/SLAPRepair";
import TennisElbowSurgery from "./pages/TennisElbowSurgery";
import GolfersElbowTreatment from "./pages/GolfersElbowTreatment";
import ElbowArthroscopy from "./pages/ElbowArthroscopy";
import UCLReconstruction from "./pages/UCLReconstruction";
import RotatorCuffProcedures from "./pages/RotatorCuffProcedures";
import ShoulderInstabilityProcedures from "./pages/ShoulderInstabilityProcedures";
import ElbowProcedures from "./pages/ElbowProcedures";
import HipReplacementProcedures from "./pages/HipReplacementProcedures";
import HipArthroscopyProcedures from "./pages/HipArthroscopyProcedures";
import PelvisProcedures from "./pages/PelvisProcedures";
import CervicalSpineProcedures from "./pages/CervicalSpineProcedures";
import LumbarSpineProcedures from "./pages/LumbarSpineProcedures";
import MinimallyInvasiveSpineProcedures from "./pages/MinimallyInvasiveSpineProcedures";
import AthleticInjuriesProcedures from "./pages/AthleticInjuriesProcedures";
import PerformanceProcedures from "./pages/PerformanceProcedures";
import SpecializedCareProcedures from "./pages/SpecializedCareProcedures";
import HandSurgeryProcedures from "./pages/HandSurgeryProcedures";
import WristSurgeryProcedures from "./pages/WristSurgeryProcedures";
import NerveSurgeryProcedures from "./pages/NerveSurgeryProcedures";
import FootSurgeryProcedures from "./pages/FootSurgeryProcedures";
import AnkleSurgeryProcedures from "./pages/AnkleSurgeryProcedures";
import SportsInjuriesProcedures from "./pages/SportsInjuriesProcedures";
import TotalHipReplacement from "./pages/TotalHipReplacement";
import HipResurfacing from "./pages/HipResurfacing";
import RevisionHipSurgery from "./pages/RevisionHipSurgery";
import FAISurgery from "./pages/FAISurgery";
import LabralRepair from "./pages/LabralRepair";
import HipImpingementTreatment from "./pages/HipImpingementTreatment";
import PelvicFractureRepair from "./pages/PelvicFractureRepair";
import SacroiliacJointTreatment from "./pages/SacroiliacJointTreatment";
import CervicalDiscReplacement from "./pages/CervicalDiscReplacement";
import CervicalFusion from "./pages/CervicalFusion";
import CervicalLaminectomy from "./pages/CervicalLaminectomy";
import LumbarFusion from "./pages/LumbarFusion";
import DiscReplacement from "./pages/DiscReplacement";
import Microdiscectomy from "./pages/Microdiscectomy";
import SpinalStenosisSurgery from "./pages/SpinalStenosisSurgery";
import EndoscopicSpineSurgery from "./pages/EndoscopicSpineSurgery";
import PercutaneousProcedures from "./pages/PercutaneousProcedures";
import ACLInjuries from "./pages/ACLInjuries";
import MeniscusTears from "./pages/MeniscusTears";
import ShoulderDislocations from "./pages/ShoulderDislocations";
import AnkleSprains from "./pages/AnkleSprains";
import ReturnToSportPrograms from "./pages/ReturnToSportPrograms";

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
          
          {/* Shoulder & Elbow Procedures */}
          <Route path="/rotator-cuff-repair" element={<RotatorCuffRepair />} />
          <Route path="/massive-rotator-cuff-repair" element={<MassiveRotatorCuffRepair />} />
          <Route path="/rotator-cuff-reconstruction" element={<RotatorCuffReconstruction />} />
          <Route path="/bankart-repair" element={<BankartRepair />} />
          <Route path="/latarjet-procedure" element={<LatarjetProcedure />} />
          <Route path="/slap-repair" element={<SLAPRepair />} />
          <Route path="/tennis-elbow-surgery" element={<TennisElbowSurgery />} />
          <Route path="/golfers-elbow-treatment" element={<GolfersElbowTreatment />} />
          <Route path="/elbow-arthroscopy" element={<ElbowArthroscopy />} />
          <Route path="/ucl-reconstruction" element={<UCLReconstruction />} />
          
          {/* Shoulder & Elbow Category Pages */}
          <Route path="/rotator-cuff-procedures" element={<RotatorCuffProcedures />} />
          <Route path="/shoulder-instability-procedures" element={<ShoulderInstabilityProcedures />} />
          <Route path="/elbow-procedures" element={<ElbowProcedures />} />
          
          {/* Hip & Pelvis Procedures */}
          <Route path="/total-hip-replacement" element={<TotalHipReplacement />} />
          <Route path="/hip-resurfacing" element={<HipResurfacing />} />
          <Route path="/revision-hip-surgery" element={<RevisionHipSurgery />} />
          <Route path="/fai-surgery" element={<FAISurgery />} />
          <Route path="/labral-repair" element={<LabralRepair />} />
          <Route path="/hip-impingement-treatment" element={<HipImpingementTreatment />} />
          <Route path="/pelvic-fracture-repair" element={<PelvicFractureRepair />} />
          <Route path="/sacroiliac-joint-treatment" element={<SacroiliacJointTreatment />} />
          
          {/* Hip & Pelvis Category Pages */}
          <Route path="/hip-replacement-procedures" element={<HipReplacementProcedures />} />
          <Route path="/hip-arthroscopy-procedures" element={<HipArthroscopyProcedures />} />
          <Route path="/pelvis-procedures" element={<PelvisProcedures />} />
          
          {/* Spine Procedures */}
          <Route path="/cervical-disc-replacement" element={<CervicalDiscReplacement />} />
          <Route path="/cervical-fusion" element={<CervicalFusion />} />
          <Route path="/cervical-laminectomy" element={<CervicalLaminectomy />} />
          <Route path="/lumbar-fusion" element={<LumbarFusion />} />
          <Route path="/disc-replacement" element={<DiscReplacement />} />
          <Route path="/microdiscectomy" element={<Microdiscectomy />} />
          <Route path="/spinal-stenosis-surgery" element={<SpinalStenosisSurgery />} />
          <Route path="/endoscopic-spine-surgery" element={<EndoscopicSpineSurgery />} />
          <Route path="/percutaneous-procedures" element={<PercutaneousProcedures />} />
          
          {/* Spine Category Pages */}
          <Route path="/cervical-spine-procedures" element={<CervicalSpineProcedures />} />
          <Route path="/lumbar-spine-procedures" element={<LumbarSpineProcedures />} />
          <Route path="/minimally-invasive-spine-procedures" element={<MinimallyInvasiveSpineProcedures />} />
          
          {/* Sports Medicine Procedures */}
          <Route path="/acl-injuries" element={<ACLInjuries />} />
          <Route path="/meniscus-tears" element={<MeniscusTears />} />
          <Route path="/shoulder-dislocations" element={<ShoulderDislocations />} />
          <Route path="/ankle-sprains" element={<AnkleSprains />} />
          <Route path="/return-to-sport-programs" element={<ReturnToSportPrograms />} />
          
          {/* Sports Medicine Category Pages */}
          <Route path="/athletic-injuries-procedures" element={<AthleticInjuriesProcedures />} />
          <Route path="/performance-procedures" element={<PerformanceProcedures />} />
          <Route path="/specialized-care-procedures" element={<SpecializedCareProcedures />} />
          
          {/* Hand & Wrist Category Pages */}
          <Route path="/hand-surgery-procedures" element={<HandSurgeryProcedures />} />
          <Route path="/wrist-surgery-procedures" element={<WristSurgeryProcedures />} />
          <Route path="/nerve-surgery-procedures" element={<NerveSurgeryProcedures />} />
          
          {/* Foot & Ankle Category Pages */}
          <Route path="/foot-surgery-procedures" element={<FootSurgeryProcedures />} />
          <Route path="/ankle-surgery-procedures" element={<AnkleSurgeryProcedures />} />
          <Route path="/sports-injuries-procedures" element={<SportsInjuriesProcedures />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
