
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AthleticInjuriesProcedures = () => {
  const procedures = [
    {
      title: "ACL Injuries",
      description: "Comprehensive ACL injury treatment from diagnosis to reconstruction and return to sport",
    },
    {
      title: "Meniscus Tears", 
      description: "Advanced meniscus repair and treatment for optimal knee function and longevity",
    },
    {
      title: "Shoulder Dislocations",
      description: "Expert treatment for shoulder instability and recurrent dislocations in athletes",
    },
    {
      title: "Ankle Sprains",
      description: "Comprehensive ankle injury management from acute sprains to chronic instability",
    }
  ];

  return (
    <>
      <title>Athletic Injury Treatment in Patna | Sports Injury Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert athletic injury treatment in Patna by Dr. Gurudeo Kumar. ACL injuries, meniscus tears, shoulder dislocations, ankle sprains. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="athletic injury treatment Patna, sports injury surgery India, ACL injury treatment, meniscus tear surgery, Dr Gurudeo Kumar sports" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Athletic Injury Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Expert athletic injury treatment by Dr. Gurudeo Kumar. Comprehensive care for ACL injuries, meniscus tears, shoulder dislocations, and ankle sprains with focus on return to sport.
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
              alt="Athletic injury treatment being performed by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Expert Athletic Injury Care at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Athletic injuries require specialized care that goes beyond simple treatment - they demand an understanding of sport-specific demands, performance goals, and the unique psychological aspects of sports participation. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive athletic injury treatment, combining advanced surgical techniques with sports-focused rehabilitation protocols for athletes from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our athletic injury program addresses the most common sports injuries including ACL tears, meniscus damage, shoulder instability, and ankle sprains. Dr. Gurudeo Kumar employs evidence-based treatment protocols, advanced surgical techniques when necessary, and sport-specific rehabilitation programs designed to not only heal the injury but also optimize performance and prevent future injuries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Sport-Specific Care</h3>
                <p className="text-slate-300">
                  Tailored treatment protocols based on specific sport demands and performance requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Return to Sport Focus</h3>
                <p className="text-slate-300">
                  Comprehensive programs designed to safely return athletes to their pre-injury performance level.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Injury Prevention</h3>
                <p className="text-slate-300">
                  Evidence-based injury prevention strategies to reduce the risk of future athletic injuries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Leading sports medicine center serving athletes from Patna, Bengal, North East India, and Nepal.
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

export default AthleticInjuriesProcedures;
