
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HipPelvis = () => {
  const hipReplacementProcedures = [
    {
      title: "Total Hip Replacement",
      description: "Complete hip joint replacement with modern implants",
      slug: "total-hip-replacement"
    },
    {
      title: "Hip Resurfacing",
      description: "Bone-conserving alternative to total hip replacement",
      slug: "hip-resurfacing"
    },
    {
      title: "Revision Hip Surgery",
      description: "Complex revision surgery for failed hip replacements",
      slug: "revision-hip-surgery"
    }
  ];

  const hipArthroscopyProcedures = [
    {
      title: "FAI Surgery",
      description: "Femoroacetabular impingement treatment via arthroscopy",
      slug: "fai-surgery"
    },
    {
      title: "Labral Repair",
      description: "Minimally invasive hip labral tear repair",
      slug: "labral-repair"
    },
    {
      title: "Hip Impingement Treatment",
      description: "Comprehensive treatment for hip impingement syndrome",
      slug: "hip-impingement-treatment"
    }
  ];

  const pelvisProcedures = [
    {
      title: "Pelvic Fracture Repair",
      description: "Advanced fixation techniques for complex pelvic fractures",
      slug: "pelvic-fracture-repair"
    },
    {
      title: "Sacroiliac Joint Treatment",
      description: "SI joint fusion and stabilization procedures",
      slug: "sacroiliac-joint-treatment"
    }
  ];

  return (
    <>
      <title>Best Hip & Pelvis Surgery in Patna, India | Hip Replacement | Expert Orthopedic Care</title>
      <meta name="description" content="Leading hip and pelvis surgery center in Patna, India. Expert hip replacement, hip arthroscopy, and pelvic surgery with advanced techniques and excellent outcomes." />
      <meta name="keywords" content="hip replacement Patna, hip surgery India, hip arthroscopy Patna, pelvis surgery Bihar, orthopedic surgeon Patna, hip specialist India" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Hip & Pelvis Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive hip and pelvis surgery center offering cutting-edge treatments from hip replacement 
              to minimally invasive arthroscopy. Serving patients from Bihar, Bengal, North East India, and Nepal 
              with world-class orthopedic care.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          {/* Main Content */}
          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Leading Hip & Pelvis Treatment Center in Eastern India</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <p className="mb-4">
                  Our hip and pelvis surgery center in Patna stands as the premier destination for advanced orthopedic 
                  care in Eastern India. We specialize in both traditional joint replacement and cutting-edge minimally 
                  invasive techniques for optimal patient outcomes.
                </p>
                <p className="mb-4">
                  From routine hip replacements to complex revision surgeries, our team combines extensive experience 
                  with the latest surgical innovations. We serve patients from across Bihar, West Bengal, Jharkhand, 
                  and neighboring regions.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Our comprehensive approach includes detailed pre-operative planning, precise surgical execution using 
                  modern implants and techniques, and structured rehabilitation protocols for fastest recovery and 
                  best long-term results.
                </p>
                <p>
                  Whether you need hip arthroscopy for young active patients or complex pelvic reconstruction, 
                  our center delivers international-standard care with the convenience of local accessibility.
                </p>
              </div>
            </div>
          </div>

          {/* Hip Replacement Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Hip Replacement Surgery</h2>
              <Link to="/hip-replacement-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Hip Replacement Options
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Modern hip replacement techniques using advanced implants for long-lasting results and rapid recovery.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {hipReplacementProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${procedure.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hip Arthroscopy Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Hip Arthroscopy</h2>
              <Link to="/hip-arthroscopy-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Arthroscopy Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Minimally invasive hip arthroscopy for young active patients with hip impingement and labral tears.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {hipArthroscopyProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${procedure.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pelvis Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Pelvic Surgery</h2>
              <Link to="/pelvis-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Pelvic Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Specialized treatment for complex pelvic conditions including fractures and sacroiliac joint disorders.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {pelvisProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${procedure.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-slate-800/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Hip & Pelvis Center</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Modern Implants</h3>
                <p className="text-slate-300 text-sm">
                  Latest generation hip implants with proven long-term durability and excellent biocompatibility.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Minimally Invasive</h3>
                <p className="text-slate-300 text-sm">
                  Advanced arthroscopic techniques for faster recovery and minimal tissue damage.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Complex Cases</h3>
                <p className="text-slate-300 text-sm">
                  Expertise in handling complex revisions and challenging pelvic reconstructions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Rapid Recovery</h3>
                <p className="text-slate-300 text-sm">
                  Structured rehabilitation protocols for quickest return to normal activities.
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
