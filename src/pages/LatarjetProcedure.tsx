
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const LatarjetProcedure = () => {
  return (
    <>
      <title>Latarjet Procedure Surgery in Patna | Shoulder Instability Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert Latarjet procedure surgery in Patna by Dr. Gurudeo Kumar. Advanced bone block surgery for recurrent shoulder dislocations. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="Latarjet procedure Patna, shoulder instability surgery India, bone block surgery, Dr Gurudeo Kumar shoulder specialist, recurrent shoulder dislocation Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latarjet Procedure in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced Latarjet procedure by Dr. Gurudeo Kumar for complex shoulder instability. Expert bone block surgery 
              for recurrent shoulder dislocations and glenoid bone loss cases.
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
              alt="Latarjet procedure surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Latarjet Procedure for Complex Instability</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    The Latarjet procedure is a specialized surgery for complex shoulder instability, particularly when 
                    there is significant bone loss from the glenoid (shoulder socket) or when previous soft tissue repairs 
                    have failed. At Arthros Center in Patna, Dr. Gurudeo Kumar performs this advanced procedure, transferring 
                    the coracoid process with its attached muscles to restore shoulder stability for patients from Bihar, 
                    Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    This procedure involves transferring a piece of bone (coracoid process) from the shoulder blade to the 
                    front of the shoulder socket, effectively extending the socket and providing both bony stability and 
                    muscular support through the attached muscles. The Latarjet procedure is considered the gold standard 
                    for treating recurrent anterior shoulder instability with bone loss, offering excellent long-term 
                    stability and allowing return to high-demand activities and contact sports.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Advantages of the Latarjet Procedure</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Bone Restoration</h4>
                      <p className="text-slate-300">Replaces lost bone from the shoulder socket</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Dual Stabilization</h4>
                      <p className="text-slate-300">Provides both bony and muscular stability mechanisms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Contact Sports Return</h4>
                      <p className="text-slate-300">Allows safe return to contact and collision sports</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Long-term Solution</h4>
                      <p className="text-slate-300">Durable stability with excellent long-term outcomes</p>
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
                    <p>1-2 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>6-9 months return to sports</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                    <p className="text-slate-300">Prevention of recurrent dislocations in complex cases</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Complex Instability Solution</h4>
                  <p className="mb-4 text-cyan-100">Advanced bone block surgery for lasting stability</p>
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

export default LatarjetProcedure;
