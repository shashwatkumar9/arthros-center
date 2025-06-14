
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const PercutaneousProcedures = () => {
  return (
    <>
      <title>Percutaneous Spine Procedures in Patna | Minimally Invasive Spine Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert percutaneous spine procedures in Patna by Dr. Gurudeo Kumar. Minimally invasive percutaneous techniques for spine conditions. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="percutaneous spine surgery Patna, minimally invasive spine procedures India, percutaneous pedicle screws, Dr Gurudeo Kumar spine surgeon, keyhole spine surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Percutaneous Spine Procedures in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced percutaneous spine procedures by Dr. Gurudeo Kumar using minimally invasive percutaneous techniques. 
              Revolutionary approach for spine stabilization and treatment with minimal tissue disruption.
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
              alt="Percutaneous spine procedures being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Percutaneous Spine Surgery</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Percutaneous spine procedures represent the ultimate in minimally invasive spinal surgery, using 
                    specialized instruments and image guidance to treat various spine conditions through tiny skin 
                    punctures. At Arthros Center in Patna, Dr. Gurudeo Kumar performs advanced percutaneous pedicle 
                    screw fixation, decompression, and stabilization procedures, serving patients from Bihar, Bengal, 
                    North East India, and Nepal with cutting-edge minimally invasive techniques.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    These procedures utilize real-time imaging guidance and specialized instruments to achieve the same 
                    surgical goals as traditional open surgery while minimizing tissue trauma. Percutaneous techniques 
                    include pedicle screw placement, vertebroplasty, kyphoplasty, and minimally invasive fusion procedures. 
                    The approach preserves normal muscle attachments and reduces blood loss, resulting in significantly 
                    reduced recovery time and improved patient comfort.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Percutaneous Procedures</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Muscle Preservation</h4>
                      <p className="text-slate-300">Maintains normal muscle attachments and function</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Reduced Blood Loss</h4>
                      <p className="text-slate-300">Minimal bleeding and faster recovery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Shorter Hospital Stay</h4>
                      <p className="text-slate-300">Reduced hospitalization and faster discharge</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Image Guided</h4>
                      <p className="text-slate-300">Real-time imaging for precise instrument placement</p>
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
                    <p>1-3 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Approach</h4>
                    <p>Small skin punctures</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>1-2 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>2-4 weeks return to activities</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">91%</div>
                    <p className="text-slate-300">Excellent outcomes with minimal complications</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Minimal Invasive Excellence</h4>
                  <p className="mb-4 text-cyan-100">Advanced percutaneous spine procedures</p>
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

export default PercutaneousProcedures;
