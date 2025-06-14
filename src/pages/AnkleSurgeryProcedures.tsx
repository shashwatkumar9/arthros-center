
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AnkleSurgeryProcedures = () => {
  const procedures = [
    {
      title: "Ankle Arthroscopy",
      description: "Minimally invasive ankle arthroscopy for diagnosis and treatment of ankle joint conditions",
    },
    {
      title: "Ankle Replacement", 
      description: "Advanced total ankle replacement for severe arthritis and joint preservation",
    },
    {
      title: "Ankle Fusion",
      description: "Expert ankle fusion procedures for severe arthritis and joint stability",
    },
    {
      title: "Ligament Reconstruction",
      description: "Comprehensive ankle ligament reconstruction for chronic instability and injuries",
    }
  ];

  return (
    <>
      <title>Ankle Surgery in Patna | Ankle Arthroscopy India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert ankle surgery in Patna by Dr. Gurudeo Kumar. Ankle arthroscopy, ankle replacement, ankle fusion, ligament reconstruction. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="ankle surgery Patna, ankle arthroscopy India, ankle replacement, ankle fusion, ligament reconstruction, Dr Gurudeo Kumar ankle" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ankle Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced ankle surgery procedures by Dr. Gurudeo Kumar. Expert arthroscopy, ankle replacement, fusion, and ligament reconstruction for optimal ankle function.
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
              alt="Ankle surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {procedures.map((procedure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{procedure.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base">
                    {procedure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Expert Ankle Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Ankle conditions ranging from arthritis and chronic instability to complex fractures require specialized surgical expertise for optimal outcomes. The ankle joint's complex anatomy and weight-bearing function demand precise surgical techniques and comprehensive treatment approaches. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in advanced ankle surgery, providing state-of-the-art treatment options for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our ankle surgery program combines minimally invasive arthroscopic techniques with advanced reconstructive procedures to address the full spectrum of ankle pathology. Dr. Gurudeo Kumar employs the latest surgical methods including arthroscopic debridement, total ankle replacement technology, precision fusion techniques, and innovative ligament reconstruction approaches to restore ankle function and alleviate pain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Arthroscopic Excellence</h3>
                <p className="text-slate-300">
                  Advanced ankle arthroscopy for precise diagnosis and minimally invasive treatment options.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Joint Preservation</h3>
                <p className="text-slate-300">
                  Modern ankle replacement technology to preserve natural ankle motion when appropriate.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Instability Solutions</h3>
                <p className="text-slate-300">
                  Comprehensive ligament reconstruction techniques for chronic ankle instability and injuries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Leadership</h3>
                <p className="text-slate-300">
                  Premier ankle surgery center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default AnkleSurgeryProcedures;
