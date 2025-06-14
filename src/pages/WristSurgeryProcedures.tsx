
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WristSurgeryProcedures = () => {
  const procedures = [
    {
      title: "Wrist Arthroscopy",
      description: "Minimally invasive wrist arthroscopy for diagnosis and treatment of wrist joint conditions",
    },
    {
      title: "TFCC Repair", 
      description: "Triangular fibrocartilage complex repair for wrist stability and pain relief",
    },
    {
      title: "Wrist Fracture Surgery",
      description: "Advanced wrist fracture fixation using modern techniques for optimal healing",
    },
    {
      title: "Ganglion Cyst Removal",
      description: "Expert ganglion cyst removal with minimal recurrence and optimal cosmetic results",
    }
  ];

  return (
    <>
      <title>Wrist Surgery in Patna | Wrist Arthroscopy India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert wrist surgery in Patna by Dr. Gurudeo Kumar. Wrist arthroscopy, TFCC repair, wrist fracture surgery, ganglion cyst removal. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="wrist surgery Patna, wrist arthroscopy India, TFCC repair, wrist fracture surgery, ganglion cyst removal, Dr Gurudeo Kumar wrist" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Wrist Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced wrist surgery procedures by Dr. Gurudeo Kumar. Expert arthroscopy, TFCC repair, fracture fixation, and ganglion cyst treatment for optimal wrist function.
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
              alt="Wrist surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Wrist Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                The wrist is a complex joint system that requires specialized expertise for optimal surgical outcomes. Wrist conditions including TFCC tears, fractures, and chronic pain can significantly impact hand function and daily activities. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive wrist surgery services, utilizing advanced arthroscopic techniques and modern surgical approaches for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our wrist surgery program combines minimally invasive arthroscopic procedures with precise open surgical techniques when necessary. Dr. Gurudeo Kumar employs the latest diagnostic arthroscopy methods, advanced TFCC repair techniques, and modern fracture fixation approaches to restore wrist function while minimizing surgical trauma and recovery time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Arthroscopic Excellence</h3>
                <p className="text-slate-300">
                  Advanced wrist arthroscopy for precise diagnosis and minimally invasive treatment options.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Complex Repairs</h3>
                <p className="text-slate-300">
                  Specialized techniques for TFCC and ligament repairs to restore wrist stability and function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Modern Fixation</h3>
                <p className="text-slate-300">
                  Latest fracture fixation techniques with advanced implants for optimal healing outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Leadership</h3>
                <p className="text-slate-300">
                  Leading wrist surgery center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default WristSurgeryProcedures;
