
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FootAnkle = () => {
  const procedures = [
    {
      title: "Bunion Surgery",
      description: "Advanced bunion correction surgery in Patna for pain relief",
      slug: "bunion-surgery"
    },
    {
      title: "Hammertoe Correction",
      description: "Surgical correction of hammertoe deformities",
      slug: "hammertoe-correction"
    },
    {
      title: "Plantar Fasciitis Surgery",
      description: "Surgical treatment for chronic plantar fasciitis",
      slug: "plantar-fasciitis-surgery"
    },
    {
      title: "Achilles Repair",
      description: "Expert Achilles tendon repair and reconstruction",
      slug: "achilles-repair"
    },
    {
      title: "Ankle Arthroscopy",
      description: "Minimally invasive ankle arthroscopy procedures",
      slug: "ankle-arthroscopy"
    },
    {
      title: "Ankle Replacement",
      description: "Total ankle replacement for arthritis",
      slug: "ankle-replacement"
    },
    {
      title: "Ankle Fusion",
      description: "Ankle fusion surgery for severe arthritis",
      slug: "ankle-fusion"
    },
    {
      title: "Ligament Reconstruction",
      description: "Ankle ligament reconstruction for instability",
      slug: "ligament-reconstruction"
    },
    {
      title: "Jones Fracture",
      description: "Specialized treatment for Jones fractures",
      slug: "jones-fracture"
    },
    {
      title: "Turf Toe Treatment",
      description: "Expert treatment for turf toe injuries",
      slug: "turf-toe-treatment"
    }
  ];

  return (
    <>
      <title>Foot & Ankle Surgery in Patna, India | Bunion Surgery | Ankle Arthroscopy | Arthros Center</title>
      <meta name="description" content="Expert foot and ankle surgery in Patna, India. Bunion surgery, ankle arthroscopy, Achilles repair by experienced foot and ankle surgeons." />
      <meta name="keywords" content="foot surgery Patna, ankle surgery India, bunion surgery Patna, ankle arthroscopy India, foot surgeon Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Foot & Ankle Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive foot and ankle surgery including bunion correction, ankle arthroscopy, 
              and Achilles repair by expert foot and ankle surgeons in Patna.
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
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Foot & Ankle Care</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive</h3>
                <p className="text-slate-300">
                  Arthroscopic and minimally invasive techniques for faster healing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Sports Injuries</h3>
                <p className="text-slate-300">
                  Specialized treatment for athletic foot and ankle injuries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Deformity Correction</h3>
                <p className="text-slate-300">
                  Expert correction of foot deformities and biomechanical problems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Recovery Focus</h3>
                <p className="text-slate-300">
                  Comprehensive rehabilitation to restore normal walking and function.
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

export default FootAnkle;
