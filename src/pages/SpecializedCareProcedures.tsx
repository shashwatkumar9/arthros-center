
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SpecializedCareProcedures = () => {
  const procedures = [
    {
      title: "Concussion Management",
      description: "Comprehensive concussion evaluation, treatment, and return to play protocols for athletes",
    },
    {
      title: "Overuse Injuries", 
      description: "Expert treatment and prevention of overuse injuries in competitive and recreational athletes",
    },
    {
      title: "Youth Sports Medicine",
      description: "Specialized care for young athletes with focus on growth, development, and injury prevention",
    }
  ];

  return (
    <>
      <title>Specialized Sports Medicine in Patna | Concussion Management India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert specialized sports medicine in Patna by Dr. Gurudeo Kumar. Concussion management, overuse injuries, youth sports medicine. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="specialized sports medicine Patna, concussion management India, overuse injuries treatment, youth sports medicine, Dr Gurudeo Kumar specialized" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Specialized Sports Medicine in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced specialized sports medicine by Dr. Gurudeo Kumar. Expert concussion management, overuse injury treatment, and comprehensive youth sports medicine programs.
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
              alt="Specialized sports medicine consultation by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Specialized Sports Medicine Expertise at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Modern sports medicine extends beyond traditional injury treatment to encompass specialized areas including concussion management, overuse injury prevention, and age-specific care for young athletes. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive specialized sports medicine services, addressing the unique needs of athletes across all age groups and competition levels from India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our specialized care programs utilize the latest evidence-based protocols for concussion evaluation and management, innovative approaches to overuse injury treatment and prevention, and age-appropriate care strategies for developing athletes. Dr. Gurudeo Kumar's multidisciplinary approach ensures that each athlete receives care tailored to their specific needs, developmental stage, and athletic goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Concussion Expertise</h3>
                <p className="text-slate-300">
                  Advanced concussion evaluation and management protocols for safe return to play decisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Overuse Prevention</h3>
                <p className="text-slate-300">
                  Specialized programs to identify, treat, and prevent overuse injuries in competitive athletes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Youth-Focused Care</h3>
                <p className="text-slate-300">
                  Age-appropriate sports medicine care considering growth, development, and long-term health.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Premier specialized sports medicine center serving Patna, Bengal, North East India, and Nepal.
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

export default SpecializedCareProcedures;
