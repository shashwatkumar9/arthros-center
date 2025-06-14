
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const ElbowArthroscopy = () => {
  return (
    <>
      <title>Elbow Arthroscopy Surgery in Patna | Keyhole Elbow Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert elbow arthroscopy surgery in Patna by Dr. Gurudeo Kumar. Advanced keyhole surgery for various elbow conditions. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="elbow arthroscopy Patna, keyhole elbow surgery India, minimally invasive elbow surgery, Dr Gurudeo Kumar elbow specialist, arthroscopic elbow surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Elbow Arthroscopy in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced elbow arthroscopy by Dr. Gurudeo Kumar using state-of-the-art keyhole surgery techniques. 
              Minimally invasive treatment for various elbow conditions with superior outcomes.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/243a83c3-ea4b-4413-a11e-c9de37592930.png" 
              alt="Elbow arthroscopy surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Elbow Arthroscopy</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Elbow arthroscopy is a minimally invasive surgical technique that uses a tiny camera and specialized 
                    instruments to diagnose and treat various elbow conditions. At Arthros Center in Patna, Dr. Gurudeo Kumar 
                    employs advanced arthroscopic techniques to address elbow problems including loose bodies, scar tissue, 
                    cartilage damage, and elbow stiffness, providing patients from Bihar, Bengal, North East India, and Nepal 
                    with cutting-edge treatment options.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    This keyhole surgery approach offers numerous advantages over traditional open surgery, including smaller 
                    incisions, reduced pain, faster recovery, and better cosmetic results. The high-definition arthroscopic 
                    camera provides superior visualization of the elbow joint, allowing for precise treatment of pathology 
                    while preserving healthy tissue. Common conditions treated include elbow impingement, loose body removal, 
                    synovitis, and elbow contracture release.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Conditions Treated with Elbow Arthroscopy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Loose Bodies</h4>
                      <p className="text-slate-300">Removal of bone or cartilage fragments causing locking</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Elbow Stiffness</h4>
                      <p className="text-slate-300">Contracture release to improve range of motion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Impingement</h4>
                      <p className="text-slate-300">Treatment of elbow impingement and posterior pain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Synovitis</h4>
                      <p className="text-slate-300">Removal of inflamed synovial tissue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Procedure Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Duration</h4>
                    <p>45-90 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>Regional or general anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>Same day discharge</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>2-6 weeks depending on condition</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">94%</div>
                    <p className="text-slate-300">Excellent outcomes with improved function and pain relief</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Minimally Invasive Solution</h4>
                  <p className="mb-4 text-cyan-100">Advanced keyhole surgery for elbow conditions</p>
                  <Button 
                    className="w-full bg-white text-cyan-600 hover:bg-slate-100"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default ElbowArthroscopy;
