
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HipReplacementProcedures = () => {
  const procedures = [
    {
      title: "Total Hip Replacement",
      description: "Complete hip joint replacement with modern implants for lasting pain relief and mobility",
      route: "/total-hip-replacement"
    },
    {
      title: "Hip Resurfacing", 
      description: "Bone-conserving alternative to total hip replacement for younger, active patients",
      route: "/hip-resurfacing"
    },
    {
      title: "Revision Hip Surgery",
      description: "Complex revision surgery for failed hip replacements using specialized techniques",
      route: "/revision-hip-surgery"
    }
  ];

  return (
    <>
      <title>Hip Replacement Surgery in Patna | Hip Replacement Procedures India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert hip replacement surgery in Patna by Dr. Gurudeo Kumar. Total hip replacement, hip resurfacing, revision surgery. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="hip replacement surgery Patna, total hip replacement India, hip resurfacing, Dr Gurudeo Kumar hip" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hip Replacement Procedures in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced hip replacement procedures by Dr. Gurudeo Kumar. From total hip replacement to complex revisions using latest implants and techniques.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Appointment
            </Button>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/243a83c3-ea4b-4413-a11e-c9de37592930.png" 
              alt="Hip replacement surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {procedures.map((procedure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{procedure.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base">
                    {procedure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <Link to={procedure.route}>
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

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Expert Hip Replacement at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Hip replacement surgery has revolutionized the treatment of severe hip arthritis and injury, providing patients with dramatic pain relief and restored mobility. At Arthros Center in Patna, Dr. Gurudeo Kumar performs advanced hip replacement procedures using the latest surgical techniques and modern implant technology, serving patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our comprehensive hip replacement program includes detailed pre-operative planning, personalized surgical approach selection, and structured rehabilitation protocols. Whether you need a primary total hip replacement, bone-conserving hip resurfacing, or complex revision surgery, our center delivers world-class outcomes with the convenience of local accessibility in Eastern India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Modern Implants</h3>
                <p className="text-slate-300">
                  Latest generation hip implants with proven long-term durability and excellent biocompatibility for lasting results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive Techniques</h3>
                <p className="text-slate-300">
                  Advanced surgical approaches that minimize tissue damage and accelerate recovery time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Complex Revisions</h3>
                <p className="text-slate-300">
                  Specialized expertise in challenging revision cases with bone defects and failed implants.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Rapid Recovery</h3>
                <p className="text-slate-300">
                  Enhanced recovery protocols for faster return to daily activities and improved quality of life.
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

export default HipReplacementProcedures;
