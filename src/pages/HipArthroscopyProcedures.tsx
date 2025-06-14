
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HipArthroscopyProcedures = () => {
  const procedures = [
    {
      title: "FAI Surgery",
      description: "Femoroacetabular impingement treatment via advanced arthroscopic techniques",
      route: "/fai-surgery"
    },
    {
      title: "Labral Repair", 
      description: "Minimally invasive hip labral tear repair to restore joint stability",
      route: "/labral-repair"
    },
    {
      title: "Hip Impingement Treatment",
      description: "Comprehensive treatment for hip impingement syndrome and related conditions",
      route: "/hip-impingement-treatment"
    }
  ];

  return (
    <>
      <title>Hip Arthroscopy Surgery in Patna | Hip Arthroscopy Procedures India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert hip arthroscopy surgery in Patna by Dr. Gurudeo Kumar. FAI surgery, labral repair, hip impingement treatment. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="hip arthroscopy surgery Patna, FAI surgery India, labral repair, Dr Gurudeo Kumar hip arthroscopy" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hip Arthroscopy Procedures in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced hip arthroscopy procedures by Dr. Gurudeo Kumar. Minimally invasive treatment for young, active patients with hip problems.
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
                  <Link to={procedure.route}>
                    <Button 
                      variant="outline" 
                      className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Hip Arthroscopy at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Hip arthroscopy represents a revolutionary advancement in hip surgery, allowing for minimally invasive treatment of various hip conditions that previously required large open procedures. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in advanced arthroscopic techniques to treat hip impingement, labral tears, and other conditions in young, active patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Using state-of-the-art arthroscopic equipment and specialized techniques, we can precisely address hip pathology through small incisions, resulting in faster recovery, less pain, and earlier return to activities. Our comprehensive approach includes thorough evaluation, advanced imaging, and personalized treatment plans to ensure optimal outcomes for each patient.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive</h3>
                <p className="text-slate-300">
                  Small incisions with specialized instruments for precise treatment with minimal tissue damage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Faster Recovery</h3>
                <p className="text-slate-300">
                  Reduced recovery time compared to open surgery, allowing quicker return to sports and activities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Young Athlete Focus</h3>
                <p className="text-slate-300">
                  Specialized care for young, active patients wanting to maintain high activity levels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Technology</h3>
                <p className="text-slate-300">
                  High-definition arthroscopic systems for superior visualization and precision treatment.
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
