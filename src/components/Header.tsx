
import { Search, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Header = () => {
  const kneeServices = [
    { category: "ACL Procedures", items: ["ACL Reconstruction", "ACL Repair", "Revision ACL Surgery", "ACL with Meniscus Repair"] },
    { category: "PCL & Multi-ligament", items: ["PCL Reconstruction", "MCL Reconstruction", "Multi-ligament Reconstruction", "Posterolateral Corner Repair"] },
    { category: "Other Knee Procedures", items: ["Meniscus Repair", "Knee Replacement", "Patella Stabilization", "Cartilage Restoration"] }
  ];

  const shoulderServices = [
    { category: "Rotator Cuff", items: ["Rotator Cuff Repair", "Massive Rotator Cuff Repair", "Rotator Cuff Reconstruction"] },
    { category: "Shoulder Instability", items: ["Bankart Repair", "Latarjet Procedure", "SLAP Repair"] },
    { category: "Elbow Procedures", items: ["Tennis Elbow Surgery", "Golfer's Elbow Treatment", "Elbow Arthroscopy", "UCL Reconstruction"] }
  ];

  const hipServices = [
    { category: "Hip Replacement", items: ["Total Hip Replacement", "Hip Resurfacing", "Revision Hip Surgery"] },
    { category: "Hip Arthroscopy", items: ["FAI Surgery", "Labral Repair", "Hip Impingement Treatment"] },
    { category: "Pelvis Procedures", items: ["Pelvic Fracture Repair", "Sacroiliac Joint Treatment"] }
  ];

  const spineServices = [
    { category: "Cervical Spine", items: ["Cervical Disc Replacement", "Cervical Fusion", "Cervical Laminectomy"] },
    { category: "Lumbar Spine", items: ["Lumbar Fusion", "Disc Replacement", "Microdiscectomy", "Spinal Stenosis Surgery"] },
    { category: "Minimally Invasive", items: ["Endoscopic Spine Surgery", "Percutaneous Procedures"] }
  ];

  const sportsServices = [
    { category: "Athletic Injuries", items: ["ACL Injuries", "Meniscus Tears", "Shoulder Dislocations", "Ankle Sprains"] },
    { category: "Performance", items: ["Return to Sport Programs", "Injury Prevention", "Sports Physicals"] },
    { category: "Specialized Care", items: ["Concussion Management", "Overuse Injuries", "Youth Sports Medicine"] }
  ];

  const handServices = [
    { category: "Hand Surgery", items: ["Carpal Tunnel Release", "Trigger Finger Surgery", "Dupuytren's Surgery", "Hand Fracture Repair"] },
    { category: "Wrist Surgery", items: ["Wrist Arthroscopy", "TFCC Repair", "Wrist Fracture Surgery", "Ganglion Cyst Removal"] },
    { category: "Nerve Surgery", items: ["Cubital Tunnel Surgery", "Nerve Repair", "Nerve Transfer"] }
  ];

  const footServices = [
    { category: "Foot Surgery", items: ["Bunion Surgery", "Hammertoe Correction", "Plantar Fasciitis Surgery", "Achilles Repair"] },
    { category: "Ankle Surgery", items: ["Ankle Arthroscopy", "Ankle Replacement", "Ankle Fusion", "Ligament Reconstruction"] },
    { category: "Sports Injuries", items: ["Ankle Sprains", "Jones Fracture", "Turf Toe Treatment"] }
  ];

  const renderHoverMenu = (title: string, services: { category: string; items: string[] }[]) => (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="hover:text-cyan-400 transition-colors flex items-center space-x-1 bg-transparent border-none text-white text-sm cursor-pointer px-3 py-2 rounded-md hover:bg-slate-600/50">
        <span>{title}</span>
        <span className="text-xs">▼</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-[800px] bg-white border border-gray-200 shadow-2xl z-50 p-0 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-blue-100 text-sm">Specialized procedures and treatments</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-slate-800 font-semibold text-base mb-3 text-blue-700 border-b border-blue-100 pb-2">
                  {service.category}
                </h4>
                <div className="space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className="block w-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 text-left text-sm py-2 px-3 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => console.log(`Selected: ${item}`)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-slate-300 text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>gurudeok@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>7258065424</span>
            </div>
            <span>251 A Patliputra Colony, Patna</span>
          </div>
          <div className="flex space-x-3">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">f</div>
            <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs">t</div>
            <div className="w-6 h-6 bg-pink-600 rounded flex items-center justify-center text-white text-xs">i</div>
            <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center text-white text-xs">in</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-slate-800/90 backdrop-blur-sm text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="text-2xl font-bold">Arthros Center</div>
          
          <div className="flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Input 
                placeholder="Search procedures, conditions..." 
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Doctors</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Appointment
            </Button>
          </nav>
        </div>
      </header>

      {/* Services Sub-menu */}
      <div className="bg-slate-700 text-white py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm">
            {renderHoverMenu("Knee Surgeries", kneeServices)}
            {renderHoverMenu("Shoulder & Elbow", shoulderServices)}
            {renderHoverMenu("Hip & Pelvis", hipServices)}
            {renderHoverMenu("Spine", spineServices)}
            {renderHoverMenu("Sports Medicine", sportsServices)}
            {renderHoverMenu("Hand & Wrist", handServices)}
            {renderHoverMenu("Foot & Ankle", footServices)}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
