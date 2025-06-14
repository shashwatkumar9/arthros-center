
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HandSurgeryProcedures = () => {
  const procedures = [
    {
      title: "Carpal Tunnel Release",
      description: "Minimally invasive carpal tunnel release for nerve compression relief and hand function restoration",
    },
    {
      title: "Trigger Finger Surgery", 
      description: "Precise trigger finger release procedures to restore smooth finger movement and eliminate locking",
    },
    {
      title: "Dupuytren's Surgery",
      description: "Advanced Dupuytren's contracture treatment to restore finger extension and hand function",
    },
    {
      title: "Hand Fracture Repair",
      description: "Expert hand fracture fixation using advanced techniques for optimal healing and function",
    }
  ];

  return (
    <>
      <title>Hand Surgery in Patna | Carpal Tunnel Release India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert hand surgery in Patna by Dr. Gurudeo Kumar. Carpal tunnel release, trigger finger surgery, Dupuytren's treatment, hand fracture repair. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="hand surgery Patna, carpal tunnel release India, trigger finger surgery, Dupuytren's surgery, hand fracture repair, Dr Gurudeo Kumar hand" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hand Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Expert hand surgery procedures by Dr. Gurudeo Kumar. Advanced treatment for carpal tunnel syndrome, trigger finger, Dupuytren's contracture, and hand fractures.
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
              alt="Hand surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Precision Hand Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                The human hand is a remarkable structure requiring precise surgical techniques to restore function and alleviate pain. Hand conditions such as carpal tunnel syndrome, trigger finger, and Dupuytren's contracture can significantly impact daily activities and quality of life. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in comprehensive hand surgery, providing advanced treatment options for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our hand surgery program emphasizes minimally invasive techniques when appropriate, precise surgical planning, and comprehensive rehabilitation protocols to ensure optimal outcomes. Dr. Gurudeo Kumar employs the latest surgical methods, including endoscopic carpal tunnel release, precise trigger finger procedures, and advanced fracture fixation techniques to restore hand function while minimizing recovery time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive</h3>
                <p className="text-slate-300">
                  Advanced minimally invasive techniques for faster recovery and superior cosmetic results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Precision Surgery</h3>
                <p className="text-slate-300">
                  Microsurgical techniques and specialized instruments for optimal functional outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Comprehensive Care</h3>
                <p className="text-slate-300">
                  Complete treatment from diagnosis through surgery to rehabilitation and return to function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Leading hand surgery center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default HandSurgeryProcedures;
