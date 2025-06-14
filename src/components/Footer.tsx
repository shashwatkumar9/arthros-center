
import { Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" }, 
    { name: "Services", link: "/services" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact Us", link: "/contact-us" }
  ];

  const popularProcedures = [
    { name: "ACL Reconstruction in India", link: "/acl-reconstruction" },
    { name: "Rotator Cuff Repair in India", link: "/rotator-cuff-repair" },
    { name: "Total Hip Replacement in India", link: "/total-hip-replacement" },
    { name: "Knee Replacement in India", link: "/knee-replacement" },
    { name: "Meniscus Repair in India", link: "/meniscus-repair" },
    { name: "Shoulder Arthroscopy in India", link: "/bankart-repair" },
    { name: "Ankle Arthroscopy in India", link: "/ankle-arthroscopy" },
    { name: "Carpal Tunnel Release in India", link: "/carpal-tunnel-release" },
    { name: "Bunion Surgery in India", link: "/bunion-surgery" },
    { name: "Achilles Repair in India", link: "/achilles-repair" },
    { name: "Hip Arthroscopy in India", link: "/fai-surgery" },
    { name: "Lumbar Fusion in India", link: "/lumbar-fusion" }
  ];

  const additionalProcedures = [
    { name: "Tennis Elbow Surgery in India", link: "/tennis-elbow-surgery" },
    { name: "Bankart Repair in India", link: "/bankart-repair" },
    { name: "Jones Fracture in India", link: "/jones-fracture" },
    { name: "Turf Toe Treatment in India", link: "/turf-toe-treatment" },
    { name: "Ankle Fusion in India", link: "/ankle-fusion" },
    { name: "Plantar Fasciitis Surgery in India", link: "/plantar-fasciitis-surgery" },
    { name: "Hammertoe Correction in India", link: "/hammertoe-correction" },
    { name: "Trigger Finger Surgery in India", link: "/trigger-finger-surgery" },
    { name: "SLAP Repair in India", link: "/slap-repair" },
    { name: "Cervical Fusion in India", link: "/cervical-fusion" },
    { name: "Microdiscectomy in India", link: "/microdiscectomy" },
    { name: "Patella Stabilization in India", link: "/patella-stabilization" }
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
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white cursor-not-allowed opacity-50">f</div>
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white cursor-not-allowed opacity-50">i</div>
              <a 
                href="https://www.youtube.com/channel/UCqoHlC6or-t1QJRfWYi4GtQ/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="hover:text-cyan-400 transition-colors">{link.name}</Link>
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

          {/* Popular Procedures - Column 2 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">&nbsp;</h4>
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
              <span>© 2025 Arthros Center. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link>
              <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
