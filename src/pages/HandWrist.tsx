
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HandWrist = () => {
  const handSurgeryProcedures = [
    {
      title: "Carpal Tunnel Release",
      description: "Minimally invasive treatment for carpal tunnel syndrome",
      slug: "carpal-tunnel-release"
    },
    {
      title: "Trigger Finger Surgery",
      description: "Surgical release for trigger finger and thumb",
      slug: "trigger-finger-surgery"
    },
    {
      title: "Dupuytren's Surgery",
      description: "Treatment for Dupuytren's contracture and fasciectomy",
      slug: "dupuytrens-surgery"
    },
    {
      title: "Hand Fracture Repair",
      description: "Advanced fixation techniques for hand fractures",
      slug: "hand-fracture-repair"
    }
  ];

  const wristSurgeryProcedures = [
    {
      title: "Wrist Arthroscopy",
      description: "Minimally invasive wrist joint surgery",
      slug: "wrist-arthroscopy"
    },
    {
      title: "TFCC Repair",
      description: "Triangular fibrocartilage complex repair",
      slug: "tfcc-repair"
    },
    {
      title: "Wrist Fracture Surgery",
      description: "Advanced treatment for complex wrist fractures",
      slug: "wrist-fracture-surgery"
    },
    {
      title: "Ganglion Cyst Removal",
      description: "Surgical excision of ganglion cysts",
      slug: "ganglion-cyst-removal"
    }
  ];

  const nerveSurgeryProcedures = [
    {
      title: "Cubital Tunnel Surgery",
      description: "Ulnar nerve decompression and transposition",
      slug: "cubital-tunnel-surgery"
    },
    {
      title: "Nerve Repair",
      description: "Microsurgical nerve repair and reconstruction",
      slug: "nerve-repair"
    },
    {
      title: "Nerve Transfer",
      description: "Advanced nerve transfer procedures",
      slug: "nerve-transfer"
    }
  ];

  return (
    <>
      <title>Best Hand & Wrist Surgery in Patna, India | Carpal Tunnel Release | Expert Hand Surgery</title>
      <meta name="description" content="Leading hand and wrist surgery center in Patna, India. Expert carpal tunnel release, trigger finger surgery, wrist arthroscopy with advanced microsurgical techniques." />
      <meta name="keywords" content="hand surgery Patna, wrist surgery India, carpal tunnel release Patna, trigger finger surgery Bihar, hand surgeon Patna, microsurgery India" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Hand & Wrist Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive hand and wrist surgery center offering precision microsurgical treatments from carpal 
              tunnel release to complex reconstructions. Serving patients from Bihar, Bengal, North East India, 
              and Nepal with world-class hand surgery care.
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
            <h2 className="text-3xl font-bold text-white mb-6">Premier Hand & Wrist Surgery Center in Eastern India</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <p className="mb-4">
                  Our hand and wrist surgery center in Patna represents the pinnacle of microsurgical expertise in 
                  Eastern India. We specialize in both minimally invasive and complex reconstructive procedures 
                  that restore full hand and wrist function.
                </p>
                <p className="mb-4">
                  From common conditions like carpal tunnel syndrome to complex nerve repairs, our team combines 
                  advanced microsurgical techniques with years of specialized training. We serve patients from 
                  across Bihar, West Bengal, and neighboring regions.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Our state-of-the-art facility includes specialized microsurgical equipment and advanced imaging 
                  systems for precise diagnosis and treatment. We focus on both functional restoration and 
                  cosmetic outcomes for optimal patient satisfaction.
                </p>
                <p>
                  Whether you need arthroscopic wrist surgery or complex tendon reconstruction, our center delivers 
                  internationally recognized hand surgery expertise with the personal care you deserve.
                </p>
              </div>
            </div>
          </div>

          {/* Hand Surgery Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Hand Surgery</h2>
              <Link to="/hand-surgery-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Hand Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Precision hand surgery using advanced microsurgical techniques for optimal functional outcomes.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {handSurgeryProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{procedure.title}</CardTitle>
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

          {/* Wrist Surgery Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Wrist Surgery</h2>
              <Link to="/wrist-surgery-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Wrist Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Advanced wrist surgery including arthroscopy and complex fracture repair with excellent outcomes.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wristSurgeryProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{procedure.title}</CardTitle>
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

          {/* Nerve Surgery Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Nerve Surgery</h2>
              <Link to="/nerve-surgery-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Nerve Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Specialized microsurgical nerve repair and reconstruction for complex nerve injuries.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {nerveSurgeryProcedures.map((procedure, index) => (
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Hand & Wrist Center</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Microsurgical Expertise</h3>
                <p className="text-slate-300 text-sm">
                  Advanced microsurgical techniques for precise nerve and vessel repair with excellent outcomes.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Minimally Invasive</h3>
                <p className="text-slate-300 text-sm">
                  Endoscopic and arthroscopic techniques for reduced scarring and faster recovery.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Functional Focus</h3>
                <p className="text-slate-300 text-sm">
                  Treatment plans designed to restore full hand and wrist function for daily activities.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Specialized Therapy</h3>
                <p className="text-slate-300 text-sm">
                  Dedicated hand therapy programs for optimal recovery and function restoration.
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
