
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HipPelvis = () => {
  const procedures = [
    {
      title: "Total Hip Replacement",
      description: "Advanced total hip replacement surgery in Patna using modern implants",
      slug: "total-hip-replacement"
    },
    {
      title: "Hip Resurfacing",
      description: "Hip resurfacing procedure for younger active patients",
      slug: "hip-resurfacing"
    },
    {
      title: "Revision Hip Surgery",
      description: "Complex revision hip surgery for failed implants",
      slug: "revision-hip-surgery"
    },
    {
      title: "FAI Surgery",
      description: "Femoroacetabular impingement surgery for hip pain",
      slug: "fai-surgery"
    },
    {
      title: "Labral Repair",
      description: "Arthroscopic hip labral repair for torn cartilage",
      slug: "labral-repair"
    },
    {
      title: "Hip Impingement Treatment",
      description: "Comprehensive treatment for hip impingement syndrome",
      slug: "hip-impingement-treatment"
    },
    {
      title: "Pelvic Fracture Repair",
      description: "Expert repair of complex pelvic fractures",
      slug: "pelvic-fracture-repair"
    },
    {
      title: "Sacroiliac Joint Treatment",
      description: "Advanced treatment for sacroiliac joint dysfunction",
      slug: "sacroiliac-joint-treatment"
    }
  ];

  return (
    <>
      <title>Hip & Pelvis Surgery in Patna, India | Hip Replacement | Arthros Center</title>
      <meta name="description" content="Expert hip and pelvis surgery in Patna, India. Hip replacement, hip arthroscopy, pelvic surgery by experienced orthopedic surgeons." />
      <meta name="keywords" content="hip surgery Patna, hip replacement India, hip arthroscopy Patna, pelvis surgery India, orthopedic surgeon Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hip & Pelvis Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced hip and pelvis surgery including hip replacement, hip arthroscopy, and pelvic reconstruction 
              by expert orthopedic surgeons in Patna.
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
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Hip & Pelvis Care</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Modern Implants</h3>
                <p className="text-slate-300">
                  Latest generation hip implants for longer lasting results and better function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive</h3>
                <p className="text-slate-300">
                  Minimally invasive surgical techniques for reduced pain and faster recovery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Young Adult Hip</h3>
                <p className="text-slate-300">
                  Specialized procedures for young adults with hip problems and arthritis.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Complex Cases</h3>
                <p className="text-slate-300">
                  Expertise in complex hip and pelvis reconstructions and revisions.
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

export default HipPelvis;
