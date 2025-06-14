
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CervicalSpineProcedures = () => {
  const procedures = [
    {
      title: "Cervical Disc Replacement",
      description: "Advanced artificial disc replacement preserving neck motion and preventing adjacent level disease",
    },
    {
      title: "Cervical Fusion", 
      description: "Precision cervical fusion procedures for spinal stability and nerve decompression",
    },
    {
      title: "Cervical Laminectomy",
      description: "Minimally invasive cervical laminectomy for spinal stenosis and nerve compression relief",
    }
  ];

  return (
    <>
      <title>Cervical Spine Surgery in Patna | Cervical Disc Replacement India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert cervical spine surgery in Patna by Dr. Gurudeo Kumar. Cervical disc replacement, fusion, laminectomy. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="cervical spine surgery Patna, cervical disc replacement India, cervical fusion Patna, cervical laminectomy, Dr Gurudeo Kumar spine" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cervical Spine Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced cervical spine procedures by Dr. Gurudeo Kumar. Expert disc replacement, fusion, and decompression surgery for neck pain and neurological symptoms.
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
              alt="Cervical spine surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Cervical Spine Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Cervical spine conditions can cause significant neck pain, arm numbness, and neurological symptoms that impact daily life and work productivity. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in advanced cervical spine surgery, offering the latest techniques including motion-preserving disc replacement and minimally invasive procedures for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our cervical spine program emphasizes precision surgery with advanced navigation systems, motion preservation when possible, and minimally invasive techniques to reduce surgical trauma. Dr. Gurudeo Kumar employs the latest artificial disc technologies, advanced fusion techniques, and endoscopic approaches to provide optimal outcomes while minimizing recovery time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Motion Preservation</h3>
                <p className="text-slate-300">
                  Advanced artificial disc replacement technology to maintain natural neck motion and function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive</h3>
                <p className="text-slate-300">
                  State-of-the-art minimally invasive techniques for reduced pain and faster recovery times.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Navigation Systems</h3>
                <p className="text-slate-300">
                  Computer-assisted navigation for precise surgical planning and optimal implant positioning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Premier cervical spine center serving Patna, Bengal, North East India, and Nepal with expert outcomes.
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

export default CervicalSpineProcedures;
