
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const TFCCRepair = () => {
  return (
    <>
      <title>TFCC Repair Surgery in Patna | Triangular Fibrocartilage Complex Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert TFCC repair surgery in Patna by Dr. Gurudeo Kumar. Advanced triangular fibrocartilage complex tear treatment for wrist pain and instability. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="TFCC repair Patna, triangular fibrocartilage surgery India, wrist cartilage repair, Dr Gurudeo Kumar wrist surgery, TFCC tear treatment Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              TFCC Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert triangular fibrocartilage complex (TFCC) repair by Dr. Gurudeo Kumar. Advanced 
              arthroscopic and open techniques for wrist pain relief and stability restoration.
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
              alt="TFCC repair surgery being performed in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced TFCC Repair Surgery</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    The triangular fibrocartilage complex (TFCC) is a crucial structure that stabilizes the 
                    wrist joint and allows smooth rotation. TFCC tears can cause significant wrist pain, 
                    clicking, and instability. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in 
                    comprehensive TFCC repair, serving patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our TFCC repair program utilizes both arthroscopic and open surgical techniques depending 
                    on the tear pattern and location. We focus on restoring wrist stability and function while 
                    minimizing surgical morbidity through advanced repair techniques and rehabilitation protocols.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">TFCC Repair Techniques</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Arthroscopic Repair</h4>
                      <p className="text-slate-300">Minimally invasive TFCC suture repair</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Open Repair</h4>
                      <p className="text-slate-300">Direct repair for complex tears</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Debridement</h4>
                      <p className="text-slate-300">Selective debridement for degenerative tears</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Reconstruction</h4>
                      <p className="text-slate-300">TFCC reconstruction for failed repairs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Surgery Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Procedure Time</h4>
                    <p>45-90 minutes depending on tear</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>Regional or general anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>6-12 weeks immobilization period</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Success Rate</h4>
                    <p>85% pain relief and stability</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Function Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">88%</div>
                    <p className="text-slate-300">Return to full wrist function</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Restore Wrist Stability</h4>
                  <p className="mb-4 text-cyan-100">Expert TFCC repair surgery</p>
                  <Button 
                    className="w-full bg-white text-cyan-600 hover:bg-slate-100"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Book Surgery
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

export default TFCCRepair;
