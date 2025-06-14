
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FootSurgeryProcedures = () => {
  const procedures = [
    {
      title: "Bunion Surgery",
      description: "Advanced bunion correction techniques for pain relief and improved foot function",
    },
    {
      title: "Hammertoe Correction", 
      description: "Precise hammertoe correction procedures to restore normal toe alignment and function",
    },
    {
      title: "Plantar Fasciitis Surgery",
      description: "Specialized plantar fasciitis surgery for chronic heel pain relief and improved mobility",
    },
    {
      title: "Achilles Repair",
      description: "Expert Achilles tendon repair for acute ruptures and chronic tendon problems",
    }
  ];

  return (
    <>
      <title>Foot Surgery in Patna | Bunion Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert foot surgery in Patna by Dr. Gurudeo Kumar. Bunion surgery, hammertoe correction, plantar fasciitis surgery, Achilles repair. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="foot surgery Patna, bunion surgery India, hammertoe correction, plantar fasciitis surgery, Achilles repair, Dr Gurudeo Kumar foot" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Foot Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced foot surgery procedures by Dr. Gurudeo Kumar. Expert bunion correction, hammertoe surgery, plantar fasciitis treatment, and Achilles tendon repair.
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
              alt="Foot surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Foot Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Foot conditions can significantly impact mobility, quality of life, and daily activities. From painful bunions and hammertoes to chronic plantar fasciitis and Achilles tendon problems, these conditions require specialized surgical expertise for optimal outcomes. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive foot surgery services, utilizing advanced techniques and modern approaches for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our foot surgery program emphasizes minimally invasive techniques when appropriate, precise surgical planning, and comprehensive rehabilitation protocols. Dr. Gurudeo Kumar employs the latest surgical methods including minimally invasive bunion correction, advanced hammertoe procedures, and innovative Achilles repair techniques to restore foot function while minimizing recovery time and maximizing patient satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive Options</h3>
                <p className="text-slate-300">
                  Advanced minimally invasive techniques for faster recovery and superior cosmetic results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Precision Correction</h3>
                <p className="text-slate-300">
                  Precise surgical techniques for optimal alignment and long-lasting functional outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Comprehensive Care</h3>
                <p className="text-slate-300">
                  Complete foot surgery care from diagnosis through surgery to rehabilitation and recovery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Leading foot surgery center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default FootSurgeryProcedures;
