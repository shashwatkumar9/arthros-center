
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ShoulderElbow = () => {
  const procedures = [
    {
      title: "Rotator Cuff Repair",
      description: "Advanced rotator cuff repair surgery in Patna using arthroscopic techniques",
      slug: "rotator-cuff-repair"
    },
    {
      title: "Massive Rotator Cuff Repair",
      description: "Complex massive rotator cuff repair for severe tears",
      slug: "massive-rotator-cuff-repair"
    },
    {
      title: "Rotator Cuff Reconstruction",
      description: "Complete rotator cuff reconstruction for irreparable tears",
      slug: "rotator-cuff-reconstruction"
    },
    {
      title: "Bankart Repair",
      description: "Arthroscopic Bankart repair for shoulder instability",
      slug: "bankart-repair"
    },
    {
      title: "Latarjet Procedure",
      description: "Open Latarjet procedure for recurrent shoulder dislocations",
      slug: "latarjet-procedure"
    },
    {
      title: "SLAP Repair",
      description: "Superior labrum anterior-posterior repair surgery",
      slug: "slap-repair"
    },
    {
      title: "Tennis Elbow Surgery",
      description: "Minimally invasive tennis elbow surgery for lateral epicondylitis",
      slug: "tennis-elbow-surgery"
    },
    {
      title: "Golfer's Elbow Treatment",
      description: "Comprehensive treatment for medial epicondylitis",
      slug: "golfers-elbow-treatment"
    },
    {
      title: "Elbow Arthroscopy",
      description: "Arthroscopic elbow surgery for various elbow conditions",
      slug: "elbow-arthroscopy"
    },
    {
      title: "UCL Reconstruction",
      description: "Tommy John surgery for UCL tears in athletes",
      slug: "ucl-reconstruction"
    }
  ];

  return (
    <>
      <title>Shoulder & Elbow Surgery in Patna, India | Rotator Cuff Repair | Arthros Center</title>
      <meta name="description" content="Expert shoulder and elbow surgery in Patna, India. Rotator cuff repair, shoulder arthroscopy, elbow surgery by experienced orthopedic surgeons." />
      <meta name="keywords" content="shoulder surgery Patna, rotator cuff repair India, elbow surgery Patna, shoulder arthroscopy India, orthopedic surgeon Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Shoulder & Elbow Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive shoulder and elbow surgery including rotator cuff repair, shoulder arthroscopy, 
              and elbow reconstruction by expert orthopedic surgeons in Patna.
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
            <h2 className="text-3xl font-bold text-white mb-6">Expert Shoulder & Elbow Care in Patna</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Arthroscopic Expertise</h3>
                <p className="text-slate-300">
                  Minimally invasive arthroscopic procedures for faster recovery and better outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Sports Medicine</h3>
                <p className="text-slate-300">
                  Specialized care for athletes with shoulder and elbow injuries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Complex Reconstructions</h3>
                <p className="text-slate-300">
                  Advanced techniques for complex shoulder and elbow reconstructions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Rehabilitation Focus</h3>
                <p className="text-slate-300">
                  Comprehensive rehabilitation programs for optimal recovery.
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

export default ShoulderElbow;
