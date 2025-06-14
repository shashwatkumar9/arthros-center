
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NerveSurgeryProcedures = () => {
  const procedures = [
    {
      title: "Cubital Tunnel Surgery",
      description: "Expert ulnar nerve decompression and transposition for cubital tunnel syndrome relief",
    },
    {
      title: "Nerve Repair", 
      description: "Microsurgical nerve repair techniques for traumatic nerve injuries and restoration of function",
    },
    {
      title: "Nerve Transfer",
      description: "Advanced nerve transfer procedures for severe nerve injuries and functional restoration",
    }
  ];

  return (
    <>
      <title>Nerve Surgery in Patna | Cubital Tunnel Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert nerve surgery in Patna by Dr. Gurudeo Kumar. Cubital tunnel surgery, nerve repair, nerve transfer procedures. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="nerve surgery Patna, cubital tunnel surgery India, nerve repair, nerve transfer, Dr Gurudeo Kumar nerve" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nerve Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced nerve surgery procedures by Dr. Gurudeo Kumar. Expert cubital tunnel surgery, microsurgical nerve repair, and nerve transfer techniques for optimal functional recovery.
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
              alt="Nerve surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Expert Nerve Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Peripheral nerve conditions and injuries require highly specialized surgical expertise to restore function and alleviate symptoms. Nerve compression syndromes like cubital tunnel syndrome and traumatic nerve injuries can cause significant disability if not properly treated. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in advanced nerve surgery, providing microsurgical techniques and innovative procedures for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our nerve surgery program utilizes the latest microsurgical techniques, advanced nerve repair methods, and innovative nerve transfer procedures to maximize functional recovery. Dr. Gurudeo Kumar employs specialized equipment including operative microscopes, microsurgical instruments, and nerve monitoring systems to ensure optimal outcomes in even the most complex nerve reconstruction cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Microsurgical Precision</h3>
                <p className="text-slate-300">
                  Advanced microsurgical techniques with specialized equipment for optimal nerve repair outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Innovative Transfers</h3>
                <p className="text-slate-300">
                  State-of-the-art nerve transfer procedures for severe injuries with functional restoration goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Comprehensive Care</h3>
                <p className="text-slate-300">
                  Complete nerve surgery care from diagnosis through reconstruction to rehabilitation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Leading nerve surgery center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default NerveSurgeryProcedures;
