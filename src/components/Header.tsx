import { Search, Phone, Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SearchCommand from "./SearchCommand";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Header = () => {
  const kneeServices = [
    { 
      category: "ACL Procedures", 
      route: "/acl-procedures",
      items: [
        { name: "ACL Reconstruction", route: "/acl-reconstruction" },
        { name: "ACL Repair", route: "/acl-repair" },
        { name: "Revision ACL Surgery", route: "/revision-acl-surgery" },
        { name: "ACL with Meniscus Repair", route: "/acl-with-meniscus-repair" }
      ]
    },
    { 
      category: "PCL & Multi-ligament", 
      route: "/pcl-multi-ligament",
      items: [
        { name: "PCL Reconstruction", route: "/pcl-reconstruction" },
        { name: "MCL Reconstruction", route: "/mcl-reconstruction" },
        { name: "Multi-ligament Reconstruction", route: "/multi-ligament-reconstruction" },
        { name: "Posterolateral Corner Repair", route: "/posterolateral-corner-repair" }
      ]
    },
    { 
      category: "Other Knee Procedures", 
      route: "/other-knee-procedures",
      items: [
        { name: "Meniscus Repair", route: "/meniscus-repair" },
        { name: "Knee Replacement", route: "/knee-replacement" },
        { name: "Patella Stabilization", route: "/patella-stabilization" },
        { name: "Cartilage Restoration", route: "/cartilage-restoration" }
      ]
    }
  ];

  const shoulderServices = [
    { 
      category: "Rotator Cuff", 
      route: "/rotator-cuff-procedures",
      items: [
        { name: "Rotator Cuff Repair", route: "/rotator-cuff-repair" },
        { name: "Massive Rotator Cuff Repair", route: "/massive-rotator-cuff-repair" },
        { name: "Rotator Cuff Reconstruction", route: "/rotator-cuff-reconstruction" }
      ]
    },
    { 
      category: "Shoulder Instability", 
      route: "/shoulder-instability-procedures",
      items: [
        { name: "Bankart Repair", route: "/bankart-repair" },
        { name: "Latarjet Procedure", route: "/latarjet-procedure" },
        { name: "SLAP Repair", route: "/slap-repair" }
      ]
    },
    { 
      category: "Elbow Procedures", 
      route: "/elbow-procedures",
      items: [
        { name: "Tennis Elbow Surgery", route: "/tennis-elbow-surgery" },
        { name: "Golfer's Elbow Treatment", route: "/golfers-elbow-treatment" },
        { name: "Elbow Arthroscopy", route: "/elbow-arthroscopy" },
        { name: "UCL Reconstruction", route: "/ucl-reconstruction" }
      ]
    }
  ];

  const hipServices = [
    { 
      category: "Hip Replacement", 
      route: "/hip-replacement-procedures",
      items: [
        { name: "Total Hip Replacement", route: "/total-hip-replacement" },
        { name: "Hip Resurfacing", route: "/hip-resurfacing" },
        { name: "Revision Hip Surgery", route: "/revision-hip-surgery" }
      ]
    },
    { 
      category: "Hip Arthroscopy", 
      route: "/hip-arthroscopy-procedures",
      items: [
        { name: "FAI Surgery", route: "/fai-surgery" },
        { name: "Labral Repair", route: "/labral-repair" },
        { name: "Hip Impingement Treatment", route: "/hip-impingement-treatment" }
      ]
    },
    { 
      category: "Pelvis Procedures", 
      route: "/pelvis-procedures",
      items: [
        { name: "Pelvic Fracture Repair", route: "/pelvic-fracture-repair" },
        { name: "Sacroiliac Joint Treatment", route: "/sacroiliac-joint-treatment" }
      ]
    }
  ];

  const spineServices = [
    { 
      category: "Cervical Spine", 
      route: "/cervical-spine-procedures",
      items: [
        { name: "Cervical Disc Replacement", route: "/cervical-disc-replacement" },
        { name: "Cervical Fusion", route: "/cervical-fusion" },
        { name: "Cervical Laminectomy", route: "/cervical-laminectomy" }
      ]
    },
    { 
      category: "Lumbar Spine", 
      route: "/lumbar-spine-procedures",
      items: [
        { name: "Lumbar Fusion", route: "/lumbar-fusion" },
        { name: "Disc Replacement", route: "/disc-replacement" },
        { name: "Microdiscectomy", route: "/microdiscectomy" },
        { name: "Spinal Stenosis Surgery", route: "/spinal-stenosis-surgery" }
      ]
    },
    { 
      category: "Minimally Invasive", 
      route: "/minimally-invasive-spine-procedures",
      items: [
        { name: "Endoscopic Spine Surgery", route: "/endoscopic-spine-surgery" },
        { name: "Percutaneous Procedures", route: "/percutaneous-procedures" }
      ]
    }
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

  const getDescription = (title: string) => {
    const descriptions = {
      "Knee Surgeries": "Advanced knee procedures for optimal mobility and function",
      "Shoulder & Elbow": "Comprehensive shoulder and elbow reconstruction services", 
      "Hip & Pelvis": "Modern hip replacement and arthroscopic solutions",
      "Spine": "Minimally invasive spine surgery and pain management",
      "Sports Medicine": "Expert care for athletic injuries and performance optimization",
      "Hand & Wrist": "Precision hand and wrist surgery for full functionality",
      "Foot & Ankle": "Complete foot and ankle treatment for active lifestyles"
    };
    return descriptions[title] || "Specialized procedures and treatments";
  };

  const renderKneeHoverMenu = (title: string, services: typeof kneeServices, linkPath: string) => (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="hover:text-cyan-400 transition-colors flex items-center space-x-1 bg-transparent border-none text-white text-sm cursor-pointer px-3 py-2 rounded-md hover:bg-slate-600/50">
        <span>{title}</span>
        <span className="text-xs">▼</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-[800px] bg-white border border-gray-200 shadow-2xl z-50 p-0 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-blue-100 text-sm">{getDescription(title)}</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <Link to={service.route} className="block">
                  <h4 className="text-slate-800 font-semibold text-base mb-3 text-blue-700 border-b border-blue-100 pb-2 hover:text-blue-900 transition-colors">
                    {service.category}
                  </h4>
                </Link>
                <div className="space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.route}
                      className="block w-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 text-left text-sm py-2 px-3 rounded-md transition-all duration-200 hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );

  const renderShoulderHoverMenu = (title: string, services: typeof shoulderServices, linkPath: string) => (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="hover:text-cyan-400 transition-colors flex items-center space-x-1 bg-transparent border-none text-white text-sm cursor-pointer px-3 py-2 rounded-md hover:bg-slate-600/50">
        <span>{title}</span>
        <span className="text-xs">▼</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-[800px] bg-white border border-gray-200 shadow-2xl z-50 p-0 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-blue-100 text-sm">{getDescription(title)}</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <Link to={service.route} className="block">
                  <h4 className="text-slate-800 font-semibold text-base mb-3 text-blue-700 border-b border-blue-100 pb-2 hover:text-blue-900 transition-colors">
                    {service.category}
                  </h4>
                </Link>
                <div className="space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.route}
                      className="block w-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 text-left text-sm py-2 px-3 rounded-md transition-all duration-200 hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );

  const renderHipHoverMenu = (title: string, services: typeof hipServices, linkPath: string) => (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="hover:text-cyan-400 transition-colors flex items-center space-x-1 bg-transparent border-none text-white text-sm cursor-pointer px-3 py-2 rounded-md hover:bg-slate-600/50">
        <span>{title}</span>
        <span className="text-xs">▼</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-[800px] bg-white border border-gray-200 shadow-2xl z-50 p-0 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-blue-100 text-sm">{getDescription(title)}</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <Link to={service.route} className="block">
                  <h4 className="text-slate-800 font-semibold text-base mb-3 text-blue-700 border-b border-blue-100 pb-2 hover:text-blue-900 transition-colors">
                    {service.category}
                  </h4>
                </Link>
                <div className="space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.route}
                      className="block w-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 text-left text-sm py-2 px-3 rounded-md transition-all duration-200 hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );

  const renderSpineHoverMenu = (title: string, services: typeof spineServices, linkPath: string) => (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="hover:text-cyan-400 transition-colors flex items-center space-x-1 bg-transparent border-none text-white text-sm cursor-pointer px-3 py-2 rounded-md hover:bg-slate-600/50">
        <span>{title}</span>
        <span className="text-xs">▼</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-[800px] bg-white border border-gray-200 shadow-2xl z-50 p-0 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-blue-100 text-sm">{getDescription(title)}</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <Link to={service.route} className="block">
                  <h4 className="text-slate-800 font-semibold text-base mb-3 text-blue-700 border-b border-blue-100 pb-2 hover:text-blue-900 transition-colors">
                    {service.category}
                  </h4>
                </Link>
                <div className="space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.route}
                      className="block w-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 text-left text-sm py-2 px-3 rounded-md transition-all duration-200 hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );

  const renderHoverMenu = (title: string, services: { category: string; items: string[] }[], linkPath: string) => (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="hover:text-cyan-400 transition-colors flex items-center space-x-1 bg-transparent border-none text-white text-sm cursor-pointer px-3 py-2 rounded-md hover:bg-slate-600/50">
        <span>{title}</span>
        <span className="text-xs">▼</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-[800px] bg-white border border-gray-200 shadow-2xl z-50 p-0 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-blue-100 text-sm">{getDescription(title)}</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <Link to={linkPath} className="block">
                  <h4 className="text-slate-800 font-semibold text-base mb-3 text-blue-700 border-b border-blue-100 pb-2 hover:text-blue-900 transition-colors">
                    {service.category}
                  </h4>
                </Link>
                <div className="space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                      className="block w-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 text-left text-sm py-2 px-3 rounded-md transition-all duration-200 hover:translate-x-1"
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
            <div className="w-6 h-6 bg-pink-600 rounded flex items-center justify-center text-white text-xs">i</div>
            <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white text-xs">
              <Youtube className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-slate-800/90 backdrop-blur-sm text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors">
            Arthros Center
          </Link>
          
          <div className="flex items-center space-x-4 flex-1 max-w-md mx-8">
            <SearchCommand />
          </div>

          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <a href="#" className="hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Doctors</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Appointment
            </Button>
          </nav>
        </div>
      </header>

      {/* Services Sub-menu */}
      <div className="bg-slate-700 text-white py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm">
            <Link to="/knee-surgeries" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md hover:bg-slate-600/50">
              {renderKneeHoverMenu("Knee Surgeries", kneeServices, "/knee-surgeries")}
            </Link>
            <Link to="/shoulder-elbow" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md hover:bg-slate-600/50">
              {renderShoulderHoverMenu("Shoulder & Elbow", shoulderServices, "/shoulder-elbow")}
            </Link>
            <Link to="/hip-pelvis" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md hover:bg-slate-600/50">
              {renderHipHoverMenu("Hip & Pelvis", hipServices, "/hip-pelvis")}
            </Link>
            <Link to="/spine" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md hover:bg-slate-600/50">
              {renderSpineHoverMenu("Spine", spineServices, "/spine")}
            </Link>
            <Link to="/sports-medicine" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md hover:bg-slate-600/50">
              {renderHoverMenu("Sports Medicine", sportsServices, "/sports-medicine")}
            </Link>
            <Link to="/hand-wrist" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md hover:bg-slate-600/50">
              {renderHoverMenu("Hand & Wrist", handServices, "/hand-wrist")}
            </Link>
            <Link to="/foot-ankle" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md hover:bg-slate-600/50">
              {renderHoverMenu("Foot & Ankle", footServices, "/foot-ankle")}
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
