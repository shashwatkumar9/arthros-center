
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SportsInjuriesProcedures = () => {
  const procedures = [
    {
      title: "Ankle Sprains",
      description: "Comprehensive ankle sprain treatment from acute care to chronic instability management",
    },
    {
      title: "Jones Fracture", 
      description: "Expert Jones fracture treatment and fixation for optimal healing and return to sport",
    },
    {
      title: "Turf Toe Treatment",
      description: "Specialized turf toe treatment for athletes with focus on return to competition",
    }
  ];

  return (
    <>
      <title>Sports Foot & Ankle Injuries in Patna | Ankle Sprain Treatment India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert sports foot & ankle injury treatment in Patna by Dr. Gurudeo Kumar. Ankle sprains, Jones fracture, turf toe treatment. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="sports foot ankle injuries Patna, ankle sprain treatment India, Jones fracture, turf toe treatment, Dr Gurudeo Kumar sports" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sports Foot & Ankle Injuries in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Expert sports foot and ankle injury treatment by Dr. Gurudeo Kumar. Comprehensive care for ankle sprains, Jones fractures, and turf toe with focus on athletic performance.
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
              alt="Sports foot and ankle injury treatment by Dr. Gurudeo Kumar's team in Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Sports Foot & Ankle Injury Expertise at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Foot and ankle injuries are among the most common sports-related injuries, affecting athletes across all sports and competition levels. These injuries require specialized understanding of sport-specific demands, biomechanics, and performance requirements for optimal treatment outcomes. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive sports foot and ankle injury care, combining advanced treatment techniques with sport-focused rehabilitation for athletes from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our sports foot and ankle program addresses common athletic injuries including ankle sprains, Jones fractures, and turf toe conditions. Dr. Gurudeo Kumar employs evidence-based treatment protocols, advanced surgical techniques when necessary, and sport-specific rehabilitation programs designed to not only heal the injury but also optimize performance and prevent recurrent problems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Sport-Specific Treatment</h3>
                <p className="text-slate-300">
                  Tailored treatment approaches based on specific sport demands and athletic requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Return to Play Focus</h3>
                <p className="text-slate-300">
                  Comprehensive programs designed to safely return athletes to their pre-injury performance level.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Injury Prevention</h3>
                <p className="text-slate-300">
                  Evidence-based strategies to prevent recurrent foot and ankle injuries in athletes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Leading sports foot and ankle center serving athletes from Patna, Bengal, North East India, and Nepal.
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

export default SportsInjuriesProcedures;
