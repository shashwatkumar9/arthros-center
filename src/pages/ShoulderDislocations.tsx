
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const ShoulderDislocations = () => {
  return (
    <>
      <title>Shoulder Dislocation Treatment in Patna | Sports Medicine Shoulder Care India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert shoulder dislocation treatment in Patna by Dr. Gurudeo Kumar. Comprehensive sports medicine care for shoulder instability and recurrent dislocations. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="shoulder dislocation Patna, shoulder instability India, sports medicine shoulder, Dr Gurudeo Kumar, shoulder surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Shoulder Dislocation Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert shoulder dislocation treatment and sports medicine care by Dr. Gurudeo Kumar. 
              Advanced techniques for shoulder instability and recurrent dislocation management.
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
              alt="Shoulder dislocation treatment and sports medicine care in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Shoulder Dislocation Care</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Shoulder dislocations are common sports injuries that can lead to chronic instability if not properly 
                    treated. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive evaluation and treatment 
                    for shoulder dislocations and instability, serving athletes from Bihar, Bengal, North East India, 
                    and Nepal with advanced sports medicine techniques.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our approach includes immediate reduction and stabilization, followed by comprehensive rehabilitation 
                    or surgical stabilization procedures when indicated. We focus on preventing recurrent dislocations 
                    and restoring full shoulder function to allow safe return to sports and daily activities.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Shoulder Dislocation Treatment</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Emergency Reduction</h4>
                      <p className="text-slate-300">Immediate safe reduction and pain management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Stabilization Surgery</h4>
                      <p className="text-slate-300">Arthroscopic repair for recurrent instability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Rehabilitation</h4>
                      <p className="text-slate-300">Structured programs to restore function</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Prevention Training</h4>
                      <p className="text-slate-300">Sport-specific injury prevention programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Treatment Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Initial Treatment</h4>
                    <p>Reduction and immobilization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Surgery (if needed)</h4>
                    <p>Arthroscopic stabilization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery Time</h4>
                    <p>3-6 months for sports return</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recurrence Rate</h4>
                    <p>Significantly reduced with treatment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">92%</div>
                    <p className="text-slate-300">Successful stabilization</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Stabilize Your Shoulder</h4>
                  <p className="mb-4 text-cyan-100">Expert dislocation treatment</p>
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

export default ShoulderDislocations;
