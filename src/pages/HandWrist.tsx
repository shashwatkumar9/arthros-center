
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HandWrist = () => {
  const procedures = [
    {
      title: "Carpal Tunnel Release",
      description: "Minimally invasive carpal tunnel release surgery in Patna",
      slug: "carpal-tunnel-release"
    },
    {
      title: "Trigger Finger Surgery",
      description: "Expert trigger finger release procedures for hand function",
      slug: "trigger-finger-surgery"
    },
    {
      title: "Dupuytren's Surgery",
      description: "Advanced treatment for Dupuytren's contracture",
      slug: "dupuytrens-surgery"
    },
    {
      title: "Hand Fracture Repair",
      description: "Precise repair of hand and finger fractures",
      slug: "hand-fracture-repair"
    },
    {
      title: "Wrist Arthroscopy",
      description: "Minimally invasive wrist arthroscopy procedures",
      slug: "wrist-arthroscopy"
    },
    {
      title: "TFCC Repair",
      description: "Triangular fibrocartilage complex repair surgery",
      slug: "tfcc-repair"
    },
    {
      title: "Wrist Fracture Surgery",
      description: "Expert treatment for wrist and forearm fractures",
      slug: "wrist-fracture-surgery"
    },
    {
      title: "Ganglion Cyst Removal",
      description: "Surgical removal of ganglion cysts",
      slug: "ganglion-cyst-removal"
    },
    {
      title: "Cubital Tunnel Surgery",
      description: "Ulnar nerve decompression for cubital tunnel syndrome",
      slug: "cubital-tunnel-surgery"
    },
    {
      title: "Nerve Repair",
      description: "Microsurgical nerve repair and reconstruction",
      slug: "nerve-repair"
    },
    {
      title: "Nerve Transfer",
      description: "Advanced nerve transfer procedures for paralysis",
      slug: "nerve-transfer"
    }
  ];

  return (
    <>
      <title>Hand & Wrist Surgery in Patna, India | Carpal Tunnel Treatment | Arthros Center</title>
      <meta name="description" content="Expert hand and wrist surgery in Patna, India. Carpal tunnel release, trigger finger surgery, wrist arthroscopy by experienced hand surgeons." />
      <meta name="keywords" content="hand surgery Patna, carpal tunnel treatment India, wrist surgery Patna, trigger finger surgery India, hand surgeon Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hand & Wrist Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Specialized hand and wrist surgery including carpal tunnel release, trigger finger surgery, 
              and microsurgical procedures by expert hand surgeons in Patna.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {procedures.map((procedure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{procedure.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {procedure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Precision Hand & Wrist Care</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Microsurgery</h3>
                <p className="text-slate-300">
                  Advanced microsurgical techniques for nerve and vessel reconstruction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive</h3>
                <p className="text-slate-300">
                  Endoscopic and arthroscopic procedures for faster recovery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Functional Restoration</h3>
                <p className="text-slate-300">
                  Focus on restoring full hand and wrist function for daily activities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Specialized Care</h3>
                <p className="text-slate-300">
                  Dedicated hand surgery specialists with extensive training and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default HandWrist;
