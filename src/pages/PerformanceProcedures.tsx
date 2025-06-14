
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PerformanceProcedures = () => {
  const procedures = [
    {
      title: "Return to Sport Programs",
      description: "Comprehensive rehabilitation programs designed to safely return athletes to competition",
    },
    {
      title: "Injury Prevention", 
      description: "Evidence-based injury prevention strategies and screening protocols for athletes",
    },
    {
      title: "Sports Physicals",
      description: "Thorough pre-participation physical examinations and athletic clearance assessments",
    }
  ];

  return (
    <>
      <title>Sports Performance Programs in Patna | Return to Sport India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert sports performance programs in Patna by Dr. Gurudeo Kumar. Return to sport programs, injury prevention, sports physicals. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="sports performance Patna, return to sport programs India, injury prevention, sports physicals, Dr Gurudeo Kumar performance" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sports Performance Programs in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced sports performance programs by Dr. Gurudeo Kumar. Comprehensive return to sport protocols, injury prevention strategies, and performance optimization for athletes.
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
              alt="Sports performance training at Dr. Gurudeo Kumar's facility in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Performance Excellence at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Athletic performance optimization requires a comprehensive approach that goes beyond treating injuries to focus on enhancing physical capabilities, preventing future problems, and ensuring safe participation in sports. At Arthros Center in Patna, Dr. Gurudeo Kumar leads a performance-focused sports medicine program that serves athletes from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our performance programs combine cutting-edge sports science with clinical expertise to develop individualized protocols for return to sport, injury prevention, and performance enhancement. Dr. Gurudeo Kumar's approach emphasizes evidence-based training methods, biomechanical analysis, and sport-specific conditioning to help athletes achieve their maximum potential while minimizing injury risk.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Evidence-Based Protocols</h3>
                <p className="text-slate-300">
                  Return to sport programs based on latest research and proven rehabilitation protocols.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Injury Prevention Focus</h3>
                <p className="text-slate-300">
                  Comprehensive screening and prevention strategies to reduce athletic injury risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Performance Testing</h3>
                <p className="text-slate-300">
                  Advanced performance testing and analysis to optimize athletic capabilities and readiness.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Leadership</h3>
                <p className="text-slate-300">
                  Leading sports performance center serving athletes from Patna, Bengal, North East India, and Nepal.
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

export default PerformanceProcedures;
