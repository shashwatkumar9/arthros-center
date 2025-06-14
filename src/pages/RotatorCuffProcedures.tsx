
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const RotatorCuffProcedures = () => {
  const procedures = [
    {
      title: "Rotator Cuff Repair",
      description: "Arthroscopic rotator cuff repair for torn tendons using advanced minimally invasive techniques",
      slug: "/rotator-cuff-repair"
    },
    {
      title: "Massive Rotator Cuff Repair", 
      description: "Complex repair techniques for large rotator cuff tears with specialized reconstruction methods",
      slug: "/massive-rotator-cuff-repair"
    },
    {
      title: "Rotator Cuff Reconstruction",
      description: "Advanced reconstruction for irreparable rotator cuff tears using tendon transfers and grafts",
      slug: "/rotator-cuff-reconstruction"
    }
  ];

  return (
    <>
      <title>Rotator Cuff Surgery in Patna | Rotator Cuff Repair India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert rotator cuff surgery in Patna by Dr. Gurudeo Kumar. Advanced repair, reconstruction techniques for torn rotator cuff. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="rotator cuff repair Patna, rotator cuff surgery India, massive rotator cuff repair, rotator cuff reconstruction, Dr Gurudeo Kumar shoulder" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Rotator Cuff Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced rotator cuff surgery procedures by Dr. Gurudeo Kumar and his team. Expert repair, reconstruction, and treatment for all types of rotator cuff injuries.
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
              alt="Rotator cuff surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
                  <Link to={procedure.slug} className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    >
                      View Procedure Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rotator Cuff Information Section */}
          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Expert Rotator Cuff Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                The rotator cuff is a group of four muscles and tendons that surround the shoulder joint, providing stability and enabling a wide range of motion. Rotator cuff injuries are among the most common shoulder problems, affecting millions of people worldwide, particularly those involved in overhead activities or as a result of age-related degeneration. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in comprehensive rotator cuff surgery, offering advanced treatment options for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our rotator cuff surgery program encompasses the full spectrum of procedures, from minimally invasive arthroscopic repairs to complex reconstructions for massive tears. Dr. Gurudeo Kumar employs the latest surgical techniques, including double-row repair methods, biological augmentation, and tendon transfer procedures when necessary. This comprehensive approach ensures that each patient receives the most appropriate treatment for their specific condition, maximizing the chances of successful healing and return to normal function.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Arthroscopic Excellence</h3>
                <p className="text-slate-300">
                  State-of-the-art arthroscopic techniques for minimally invasive rotator cuff repair with faster recovery and superior outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Complex Reconstructions</h3>
                <p className="text-slate-300">
                  Advanced techniques for massive tears including tendon transfers, biological grafts, and innovative reconstruction methods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Personalized Treatment</h3>
                <p className="text-slate-300">
                  Individual treatment plans based on tear size, patient age, activity level, and tissue quality for optimal healing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Leadership</h3>
                <p className="text-slate-300">
                  Leading rotator cuff surgery center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default RotatorCuffProcedures;
