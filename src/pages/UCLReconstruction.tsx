
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const UCLReconstruction = () => {
  return (
    <>
      <title>UCL Reconstruction Surgery in Patna | Tommy John Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert UCL reconstruction (Tommy John surgery) in Patna by Dr. Gurudeo Kumar. Advanced treatment for UCL injuries in throwing athletes. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="UCL reconstruction Patna, Tommy John surgery India, elbow ligament surgery, Dr Gurudeo Kumar UCL specialist, throwing athlete elbow surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              UCL Reconstruction Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert UCL reconstruction (Tommy John surgery) by Dr. Gurudeo Kumar. Advanced treatment for ulnar collateral 
              ligament injuries in throwing athletes using proven surgical techniques.
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
              alt="UCL reconstruction surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Expert UCL Reconstruction (Tommy John Surgery)</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    UCL (Ulnar Collateral Ligament) reconstruction, commonly known as Tommy John surgery, is a specialized 
                    procedure for treating torn elbow ligaments in throwing athletes. At Arthros Center in Patna, Dr. Gurudeo 
                    Kumar performs this advanced reconstruction using proven techniques that have helped countless athletes 
                    return to competitive throwing sports, serving patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The procedure involves replacing the damaged UCL with a tendon graft, typically harvested from the 
                    patient's own body (autograft). Dr. Gurudeo Kumar employs both traditional and modified techniques 
                    based on individual patient factors and injury patterns. The surgery includes careful drilling of 
                    bone tunnels and precise placement of the graft to restore elbow stability and enable return to 
                    throwing activities with confidence and optimal performance.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of UCL Reconstruction</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Proven Success</h4>
                      <p className="text-slate-300">High success rate for return to competitive throwing sports</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Restored Stability</h4>
                      <p className="text-slate-300">Complete restoration of elbow stability for throwing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Performance Enhancement</h4>
                      <p className="text-slate-300">Many athletes return with improved performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Long-term Solution</h4>
                      <p className="text-slate-300">Durable reconstruction lasting entire athletic career</p>
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
                    <p>2-3 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>General anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>Same day or overnight</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Return to Throwing</h4>
                    <p>12-18 months</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
                    <p className="text-slate-300">Return to previous level of throwing competition</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Return to the Game</h4>
                  <p className="mb-4 text-cyan-100">Expert UCL reconstruction for throwing athletes</p>
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

export default UCLReconstruction;
