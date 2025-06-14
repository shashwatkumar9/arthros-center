import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Knee Surgeries",
      description: "Advanced knee procedures for optimal mobility and function",
      link: "/knee-surgeries",
      procedures: [
        "ACL Reconstruction",
        "Meniscus Repair", 
        "Knee Replacement",
        "Patella Stabilization",
        "Cartilage Restoration"
      ]
    },
    {
      title: "Shoulder & Elbow",
      description: "Comprehensive shoulder and elbow reconstruction services",
      link: "/shoulder-elbow",
      procedures: [
        "Rotator Cuff Repair",
        "Bankart Repair",
        "Tennis Elbow Surgery",
        "SLAP Repair",
        "UCL Reconstruction"
      ]
    },
    {
      title: "Hip & Pelvis",
      description: "Modern hip replacement and arthroscopic solutions",
      link: "/hip-pelvis",
      procedures: [
        "Total Hip Replacement",
        "Hip Arthroscopy",
        "FAI Surgery",
        "Labral Repair",
        "Hip Resurfacing"
      ]
    },
    {
      title: "Spine Surgery",
      description: "Minimally invasive spine surgery and pain management",
      link: "/spine",
      procedures: [
        "Lumbar Fusion",
        "Cervical Fusion",
        "Microdiscectomy",
        "Endoscopic Surgery",
        "Disc Replacement"
      ]
    },
    {
      title: "Sports Medicine",
      description: "Expert care for athletic injuries and performance optimization",
      link: "/sports-medicine",
      procedures: [
        "ACL Injuries Treatment",
        "Sports Physicals",
        "Injury Prevention",
        "Return to Sport Programs",
        "Concussion Management"
      ]
    },
    {
      title: "Hand & Wrist",
      description: "Precision hand and wrist surgery for full functionality",
      link: "/hand-wrist",
      procedures: [
        "Carpal Tunnel Release",
        "Trigger Finger Surgery",
        "Wrist Arthroscopy",
        "Nerve Repair",
        "Hand Fracture Repair"
      ]
    },
    {
      title: "Foot & Ankle",
      description: "Complete foot and ankle treatment for active lifestyles",
      link: "/foot-ankle",
      procedures: [
        "Bunion Surgery",
        "Ankle Arthroscopy",
        "Achilles Repair",
        "Plantar Fasciitis Surgery",
        "Ankle Replacement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive orthopedic care with advanced surgical techniques and compassionate treatment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 overflow-hidden hover:bg-slate-700/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {category.procedures.map((procedure, procIndex) => (
                      <div key={procIndex} className="flex items-center text-sm text-slate-400">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                        {procedure}
                      </div>
                    ))}
                  </div>
                  
                  <Link to={category.link}>
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="bg-slate-700/50 border-slate-600 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Why Choose Arthros Center?</h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Advanced Technology</h4>
                    <p className="text-slate-300">
                      We use the latest minimally invasive techniques and state-of-the-art equipment 
                      for optimal patient outcomes and faster recovery times.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Personalized Care</h4>
                    <p className="text-slate-300">
                      Every treatment plan is tailored to the individual patient's needs, lifestyle, 
                      and recovery goals for the best possible results.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Expert Team</h4>
                    <p className="text-slate-300">
                      Led by Dr. Gurudeo Kumar with international training and 20+ years of experience 
                      in orthopedic surgery and sports medicine.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Comprehensive Support</h4>
                    <p className="text-slate-300">
                      From diagnosis through rehabilitation, we provide complete care and support 
                      throughout your recovery journey.
                    </p>
                  </div>
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

export default Services;
