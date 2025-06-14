
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MinimallyInvasiveSpineProcedures = () => {
  const procedures = [
    {
      title: "Endoscopic Spine Surgery",
      description: "Ultra-minimally invasive endoscopic techniques for spine surgery with tiny incisions",
    },
    {
      title: "Percutaneous Procedures", 
      description: "Minimally invasive percutaneous spine procedures for pain relief and structural correction",
    }
  ];

  return (
    <>
      <title>Minimally Invasive Spine Surgery in Patna | Endoscopic Spine Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert minimally invasive spine surgery in Patna by Dr. Gurudeo Kumar. Endoscopic spine surgery, percutaneous procedures. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="minimally invasive spine surgery Patna, endoscopic spine surgery India, percutaneous spine procedures, Dr Gurudeo Kumar spine" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Minimally Invasive Spine Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Revolutionary minimally invasive spine procedures by Dr. Gurudeo Kumar. Advanced endoscopic surgery and percutaneous techniques for faster recovery and optimal outcomes.
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
              alt="Minimally invasive spine surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Revolutionary Minimally Invasive Spine Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Minimally invasive spine surgery represents the future of spinal care, offering patients the benefits of advanced surgical treatment with dramatically reduced recovery times and surgical trauma. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in cutting-edge minimally invasive spine procedures, including endoscopic surgery and percutaneous techniques for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our minimally invasive spine program utilizes the latest technological advances, including high-definition endoscopes, advanced imaging guidance, and specialized instruments that allow for precise surgical treatment through incisions smaller than traditional approaches. Dr. Gurudeo Kumar's expertise in these advanced techniques enables patients to achieve excellent outcomes with less pain, shorter hospital stays, and faster return to normal activities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ultra-Minimally Invasive</h3>
                <p className="text-slate-300">
                  Revolutionary endoscopic techniques with incisions smaller than 1cm for optimal cosmetic results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Faster Recovery</h3>
                <p className="text-slate-300">
                  Dramatically reduced recovery times with same-day or overnight hospital stays for many procedures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Technology</h3>
                <p className="text-slate-300">
                  State-of-the-art endoscopic equipment and imaging guidance for precise surgical treatment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Pioneer</h3>
                <p className="text-slate-300">
                  Leading minimally invasive spine center serving Patna, Bengal, North East India, and Nepal.
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

export default MinimallyInvasiveSpineProcedures;
