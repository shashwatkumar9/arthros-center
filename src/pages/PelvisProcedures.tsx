
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PelvisProcedures = () => {
  const procedures = [
    {
      title: "Pelvic Fracture Repair",
      description: "Complex pelvic fracture fixation using advanced techniques for optimal healing and stability",
    },
    {
      title: "Sacroiliac Joint Treatment", 
      description: "Comprehensive treatment for sacroiliac joint dysfunction and pain management",
    }
  ];

  return (
    <>
      <title>Pelvic Surgery in Patna | Pelvic Fracture Repair India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert pelvic surgery in Patna by Dr. Gurudeo Kumar. Pelvic fracture repair, sacroiliac joint treatment. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="pelvic surgery Patna, pelvic fracture repair India, sacroiliac joint treatment, Dr Gurudeo Kumar pelvis" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pelvic Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced pelvic surgery procedures by Dr. Gurudeo Kumar. Expert treatment for pelvic fractures, sacroiliac joint dysfunction, and complex pelvic conditions.
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
              alt="Pelvic surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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
            <h2 className="text-3xl font-bold text-white mb-6">Expert Pelvic Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Pelvic injuries and conditions require specialized expertise due to the complex anatomy and critical structures involved. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive pelvic surgery services, treating everything from traumatic pelvic fractures to chronic sacroiliac joint dysfunction for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our pelvic surgery program combines advanced surgical techniques with multidisciplinary care to address the unique challenges of pelvic pathology. Dr. Gurudeo Kumar employs minimally invasive approaches when appropriate, advanced fixation techniques for complex fractures, and innovative treatments for chronic pelvic pain conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Complex Trauma</h3>
                <p className="text-slate-300">
                  Expert management of complex pelvic fractures with advanced fixation techniques and optimal outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Chronic Pain Management</h3>
                <p className="text-slate-300">
                  Comprehensive treatment for chronic pelvic pain conditions including sacroiliac joint dysfunction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Multidisciplinary Care</h3>
                <p className="text-slate-300">
                  Collaborative approach with multiple specialists for comprehensive pelvic condition management.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Leadership</h3>
                <p className="text-slate-300">
                  Leading pelvic surgery center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default PelvisProcedures;
