
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ElbowArthroscopy = () => {
  return (
    <>
      <title>Elbow Arthroscopy in Patna, India | Minimally Invasive Elbow Surgery | Arthros Center</title>
      <meta name="description" content="Advanced elbow arthroscopy in Patna, India. Minimally invasive elbow surgery for various conditions with faster recovery and excellent outcomes." />
      <meta name="keywords" content="elbow arthroscopy Patna, minimally invasive elbow surgery India, elbow joint surgery, arthroscopic elbow treatment Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Elbow Arthroscopy in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced minimally invasive elbow arthroscopy for various elbow conditions. 
              Expert keyhole surgery with faster recovery and excellent functional outcomes.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">What is Elbow Arthroscopy?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Elbow arthroscopy is a minimally invasive surgical procedure that uses small incisions 
                  and a tiny camera (arthroscope) to diagnose and treat various elbow conditions.
                </p>
                <p>
                  This technique allows for precise treatment with minimal tissue damage, resulting in 
                  faster recovery and better cosmetic outcomes compared to open surgery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Conditions Treated</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Tennis elbow (lateral epicondylitis)</li>
                  <li>Golfer's elbow (medial epicondylitis)</li>
                  <li>Elbow arthritis</li>
                  <li>Loose bodies</li>
                  <li>Elbow stiffness</li>
                  <li>Osteochondritis dissecans</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Arthroscopic Procedures</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Diagnostic Arthroscopy</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Direct visualization of elbow joint structures for accurate diagnosis.
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Joint surface evaluation</li>
                  <li>• Cartilage assessment</li>
                  <li>• Ligament inspection</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Debridement</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Removal of damaged tissue and loose bodies.
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Synovectomy</li>
                  <li>• Loose body removal</li>
                  <li>• Scar tissue release</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contracture Release</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Treatment for elbow stiffness and limited motion.
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Capsular release</li>
                  <li>• Scar tissue removal</li>
                  <li>• Motion restoration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Minimally Invasive Elbow Surgery</h2>
            <p className="text-xl text-slate-300 mb-8">
              Experience the benefits of advanced arthroscopic elbow surgery with our expert team.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default ElbowArthroscopy;
