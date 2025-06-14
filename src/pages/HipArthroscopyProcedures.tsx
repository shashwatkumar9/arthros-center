
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HipArthroscopyProcedures = () => {
  const procedures = [
    {
      title: "FAI Surgery",
      description: "Femoroacetabular impingement surgery to restore normal hip mechanics and prevent arthritis",
    },
    {
      title: "Labral Repair", 
      description: "Arthroscopic repair of torn hip labrum to restore joint stability and function",
    },
    {
      title: "Hip Impingement Treatment",
      description: "Comprehensive treatment for hip impingement syndromes using minimally invasive techniques",
    }
  ];

  return (
    <>
      <title>Hip Arthroscopy Surgery in Patna | FAI Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert hip arthroscopy in Patna by Dr. Gurudeo Kumar. FAI surgery, labral repair, hip impingement treatment. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="hip arthroscopy Patna, FAI surgery India, labral repair Patna, hip impingement treatment, Dr Gurudeo Kumar hip" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hip Arthroscopy Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced hip arthroscopy procedures by Dr. Gurudeo Kumar. Minimally invasive FAI surgery, labral repair, and hip impingement treatment for young active patients.
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
              alt="Hip arthroscopy surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Expert Hip Arthroscopy at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Hip arthroscopy represents one of the most significant advances in orthopedic surgery, allowing surgeons to diagnose and treat hip conditions through small incisions using specialized cameras and instruments. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in advanced hip arthroscopic procedures, providing minimally invasive treatment options for young active patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our hip arthroscopy program focuses on treating femoroacetabular impingement (FAI), labral tears, and other intra-articular hip pathology that can lead to early arthritis if left untreated. Dr. Gurudeo Kumar employs the latest arthroscopic techniques, specialized instruments, and advanced imaging to provide precise treatment while preserving healthy tissue and promoting faster recovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive</h3>
                <p className="text-slate-300">
                  Advanced arthroscopic techniques with small incisions for reduced pain and faster recovery times.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Young Adult Focus</h3>
                <p className="text-slate-300">
                  Specialized care for active young adults to prevent early arthritis and maintain hip function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Imaging</h3>
                <p className="text-slate-300">
                  State-of-the-art imaging and navigation systems for precise diagnosis and surgical planning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Expertise</h3>
                <p className="text-slate-300">
                  Leading hip arthroscopy center serving Patna, Bengal, North East India, and Nepal with expert care.
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

export default HipArthroscopyProcedures;
