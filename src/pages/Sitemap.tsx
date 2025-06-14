
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Sitemap = () => {
  const mainPages = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact Us", link: "/contact-us" }
  ];

  const servicePages = [
    { name: "Knee Surgeries", link: "/knee-surgeries" },
    { name: "Shoulder & Elbow", link: "/shoulder-elbow" },
    { name: "Hip & Pelvis", link: "/hip-pelvis" },
    { name: "Spine Surgery", link: "/spine" },
    { name: "Sports Medicine", link: "/sports-medicine" },
    { name: "Hand & Wrist", link: "/hand-wrist" },
    { name: "Foot & Ankle", link: "/foot-ankle" }
  ];

  const procedurePages = [
    { name: "ACL Reconstruction", link: "/acl-reconstruction" },
    { name: "Rotator Cuff Repair", link: "/rotator-cuff-repair" },
    { name: "Total Hip Replacement", link: "/total-hip-replacement" },
    { name: "Knee Replacement", link: "/knee-replacement" },
    { name: "Meniscus Repair", link: "/meniscus-repair" },
    { name: "Bankart Repair", link: "/bankart-repair" },
    { name: "Ankle Arthroscopy", link: "/ankle-arthroscopy" },
    { name: "Carpal Tunnel Release", link: "/carpal-tunnel-release" },
    { name: "Bunion Surgery", link: "/bunion-surgery" },
    { name: "Achilles Repair", link: "/achilles-repair" },
    { name: "FAI Surgery", link: "/fai-surgery" },
    { name: "Lumbar Fusion", link: "/lumbar-fusion" },
    { name: "Tennis Elbow Surgery", link: "/tennis-elbow-surgery" },
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

  const legalPages = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms & Conditions", link: "/terms-conditions" },
    { name: "Sitemap", link: "/sitemap" }
  ];

  const SectionCard = ({ title, pages }: { title: string; pages: Array<{ name: string; link: string }> }) => (
    <Card className="bg-slate-700/50 border-slate-600">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {pages.map((page, index) => (
            <Link 
              key={index}
              to={page.link}
              className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              {page.name}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Sitemap</h1>
            <p className="text-xl text-slate-300">
              Navigate through all pages of Arthros Center website
            </p>
          </div>

          <div className="space-y-8">
            <SectionCard title="Main Pages" pages={mainPages} />
            <SectionCard title="Service Categories" pages={servicePages} />
            <SectionCard title="Medical Procedures" pages={procedurePages} />
            <SectionCard title="Legal & Policies" pages={legalPages} />
          </div>

          <div className="text-center mt-16">
            <Card className="bg-slate-700/50 border-slate-600 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Need Help Finding Something?</h3>
                <p className="text-slate-300 mb-6">
                  If you can't find what you're looking for, please don't hesitate to contact us directly.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link 
                    to="/contact-us"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Contact Us
                  </Link>
                  <a 
                    href="tel:+917258065424"
                    className="bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;
