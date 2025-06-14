
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LumbarSpineProcedures = () => {
  const procedures = [
    {
      title: "Lumbar Fusion",
      description: "Advanced lumbar fusion techniques for spinal stability and pain relief using modern implants",
    },
    {
      title: "Disc Replacement", 
      description: "Artificial lumbar disc replacement preserving spine motion and preventing adjacent level disease",
    },
    {
      title: "Microdiscectomy",
      description: "Minimally invasive microdiscectomy for herniated disc removal and nerve decompression",
    },
    {
      title: "Spinal Stenosis Surgery",
      description: "Comprehensive decompression surgery for spinal stenosis and neurogenic claudication relief",
    }
  ];

  return (
    <>
      <title>Lumbar Spine Surgery in Patna | Lumbar Fusion India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert lumbar spine surgery in Patna by Dr. Gurudeo Kumar. Lumbar fusion, disc replacement, microdiscectomy, stenosis surgery. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="lumbar spine surgery Patna, lumbar fusion India, microdiscectomy Patna, spinal stenosis surgery, Dr Gurudeo Kumar spine" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lumbar Spine Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced lumbar spine procedures by Dr. Gurudeo Kumar. Expert fusion, disc replacement, microdiscectomy, and stenosis surgery for lower back pain relief.
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
              alt="Lumbar spine surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Expert Lumbar Spine Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Lower back pain is one of the most common medical conditions affecting people worldwide, often requiring specialized surgical intervention when conservative treatment fails. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in comprehensive lumbar spine surgery, offering advanced procedures from minimally invasive microdiscectomy to complex spinal reconstruction for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our lumbar spine program combines cutting-edge surgical techniques with personalized treatment plans tailored to each patient's specific condition and lifestyle goals. Dr. Gurudeo Kumar employs the latest minimally invasive approaches, advanced imaging guidance, and modern implant technologies to achieve optimal outcomes while minimizing surgical trauma and recovery time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive Excellence</h3>
                <p className="text-slate-300">
                  Advanced minimally invasive techniques for faster recovery and reduced surgical trauma.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Motion Preservation</h3>
                <p className="text-slate-300">
                  Artificial disc replacement technology to maintain natural spine motion when appropriate.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Navigation</h3>
                <p className="text-slate-300">
                  Computer-assisted surgical navigation for precise implant placement and optimal outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Leadership</h3>
                <p className="text-slate-300">
                  Premier lumbar spine center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default LumbarSpineProcedures;
