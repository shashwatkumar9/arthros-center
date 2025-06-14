
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SportsMedicine = () => {
  const procedures = [
    {
      title: "ACL Injuries",
      description: "Comprehensive ACL injury treatment and rehabilitation in Patna",
      slug: "acl-injuries"
    },
    {
      title: "Meniscus Tears",
      description: "Expert treatment for meniscus tears and cartilage injuries",
      slug: "meniscus-tears"
    },
    {
      title: "Shoulder Dislocations",
      description: "Specialized care for shoulder dislocations and instability",
      slug: "shoulder-dislocations"
    },
    {
      title: "Ankle Sprains",
      description: "Professional treatment for ankle sprains and ligament injuries",
      slug: "ankle-sprains"
    },
    {
      title: "Return to Sport Programs",
      description: "Structured return-to-sport rehabilitation programs",
      slug: "return-to-sport-programs"
    },
    {
      title: "Injury Prevention",
      description: "Comprehensive injury prevention programs for athletes",
      slug: "injury-prevention"
    },
    {
      title: "Sports Physicals",
      description: "Complete pre-participation sports physical examinations",
      slug: "sports-physicals"
    },
    {
      title: "Concussion Management",
      description: "Expert concussion evaluation and management protocols",
      slug: "concussion-management"
    },
    {
      title: "Overuse Injuries",
      description: "Treatment and prevention of overuse injuries in athletes",
      slug: "overuse-injuries"
    },
    {
      title: "Youth Sports Medicine",
      description: "Specialized sports medicine care for young athletes",
      slug: "youth-sports-medicine"
    }
  ];

  return (
    <>
      <title>Sports Medicine in Patna, India | ACL Injury Treatment | Athletic Injuries | Arthros Center</title>
      <meta name="description" content="Expert sports medicine in Patna, India. ACL injury treatment, athletic rehabilitation, sports injury prevention by specialized sports medicine doctors." />
      <meta name="keywords" content="sports medicine Patna, ACL injury treatment India, athletic injuries Patna, sports rehabilitation India, sports medicine doctor Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sports Medicine in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive sports medicine care including ACL injury treatment, athletic rehabilitation, 
              and injury prevention by specialized sports medicine physicians in Patna.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {procedures.map((procedure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{procedure.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {procedure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Elite Sports Medicine Care</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Performance Optimization</h3>
                <p className="text-slate-300">
                  Advanced techniques to enhance athletic performance and prevent injuries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Rapid Recovery</h3>
                <p className="text-slate-300">
                  Accelerated recovery protocols to get athletes back to their sport quickly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">All Sports Coverage</h3>
                <p className="text-slate-300">
                  Expertise in treating injuries from all sports and athletic activities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Youth Athletes</h3>
                <p className="text-slate-300">
                  Specialized care for young athletes with growing bodies and unique needs.
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

export default SportsMedicine;
