
import { Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About Us", 
    "Services",
    "Our Doctors",
    "Testimonials",
    "Contact Us"
  ];

  const popularProcedures = [
    { name: "ACL Reconstruction", link: "/acl-reconstruction" },
    { name: "Rotator Cuff Repair", link: "/rotator-cuff-repair" },
    { name: "Total Hip Replacement", link: "/total-hip-replacement" },
    { name: "Knee Replacement", link: "/knee-replacement" },
    { name: "Meniscus Repair", link: "/meniscus-repair" },
    { name: "Shoulder Arthroscopy", link: "/bankart-repair" },
    { name: "Ankle Arthroscopy", link: "/ankle-arthroscopy" },
    { name: "Carpal Tunnel Release", link: "/carpal-tunnel-release" },
    { name: "Bunion Surgery", link: "/bunion-surgery" },
    { name: "Achilles Repair", link: "/achilles-repair" },
    { name: "Hip Arthroscopy", link: "/fai-surgery" },
    { name: "Lumbar Fusion", link: "/lumbar-fusion" }
  ];

  const additionalProcedures = [
    { name: "Tennis Elbow Surgery", link: "/tennis-elbow-surgery" },
    { name: "Bankart Repair", link: "/bankart-repair" },
    { name: "Jones Fracture", link: "/jones-fracture" },
    { name: "Turf Toe Treatment", link: "/turf-toe-treatment" },
    { name: "Ankle Fusion", link: "/ankle-fusion" },
    { name: "Plantar Fasciitis Surgery", link: "/plantar-fasciitis-surgery" },
    { name: "Hammertoe Correction", link: "/hammertoe-correction" },
    { name: "Trigger Finger Surgery", link: "/trigger-finger-surgery" },
    { name: "SLAP Repair", link: "/slap-repair" },
    { name: "Cervical Fusion", link: "/cervical-fusion" },
    { name: "Microdiscectomy", link: "/microdiscectomy" },
    { name: "Patella Stabilization", link: "/patella-stabilization" }
  ];

  const handleSendEmail = () => {
    window.location.href = "mailto:gurudeok@gmail.com";
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Arthros Center</h3>
            <p className="mb-6 leading-relaxed">
              Advanced orthopedic care for everyone! 
              Specialized treatments and personalized care for 
              every orthopedic condition.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">f</div>
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white">i</div>
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Procedures - Column 1 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Popular Procedures</h4>
            <ul className="space-y-3">
              {popularProcedures.map((procedure, index) => (
                <li key={index}>
                  <Link 
                    to={procedure.link} 
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {procedure.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Procedures - Column 2 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">More Procedures</h4>
            <ul className="space-y-3">
              {additionalProcedures.map((procedure, index) => (
                <li key={index}>
                  <Link 
                    to={procedure.link} 
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {procedure.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400">📍</span>
                <span>251 A Patliputra Colony, Patna, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📞</span>
                <span>+91 7258065424</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✉️</span>
                <div className="flex items-center space-x-2">
                  <span>gurudeok@gmail.com</span>
                  <Button 
                    size="sm" 
                    onClick={handleSendEmail}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 py-1 h-auto"
                  >
                    <Mail size={16} />
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">🕒</span>
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex justify-between items-center text-sm">
            <div>
              <span>© 2023 Arthros Center. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
