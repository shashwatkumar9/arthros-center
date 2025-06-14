
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const InjuryPrevention = () => {
  return (
    <>
      <title>Injury Prevention Programs in Patna | Sports Medicine Prevention India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert injury prevention programs in Patna by Dr. Gurudeo Kumar. Comprehensive sports medicine prevention strategies and athlete screening. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="injury prevention Patna, sports injury prevention India, athlete screening, Dr Gurudeo Kumar, prevention programs Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Injury Prevention Programs in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive injury prevention programs by Dr. Gurudeo Kumar. 
              Proactive strategies to keep athletes healthy and performing at their best.
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
              alt="Injury prevention programs and sports medicine screening in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Injury Prevention Programs</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Prevention is always better than treatment. At Arthros Center in Patna, Dr. Gurudeo Kumar 
                    provides comprehensive injury prevention programs designed to keep athletes healthy and 
                    performing at their optimal level. Our evidence-based approach serves athletes from Bihar, 
                    Bengal, North East India, and Nepal with cutting-edge prevention strategies.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our injury prevention programs utilize advanced screening techniques, movement analysis, 
                    and customized training protocols to identify and address risk factors before they lead 
                    to injury. We focus on sport-specific prevention strategies that enhance performance while 
                    reducing injury risk.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Prevention Program Components</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Movement Screening</h4>
                      <p className="text-slate-300">Comprehensive assessment of movement patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Corrective Exercise</h4>
                      <p className="text-slate-300">Targeted exercises to address imbalances</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Education Programs</h4>
                      <p className="text-slate-300">Athlete and coach education on injury prevention</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Performance Enhancement</h4>
                      <p className="text-slate-300">Optimize performance while reducing injury risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Program Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Assessment Type</h4>
                    <p>Comprehensive movement screening</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Duration</h4>
                    <p>Ongoing seasonal programs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Target Groups</h4>
                    <p>All athletes and active individuals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Follow-up</h4>
                    <p>Regular monitoring and adjustments</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Injury Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">70%</div>
                    <p className="text-slate-300">Reduction in sports injuries</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Prevent Injuries</h4>
                  <p className="mb-4 text-cyan-100">Comprehensive prevention programs</p>
                  <Button 
                    className="w-full bg-white text-cyan-600 hover:bg-slate-100"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Book Screening
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

export default InjuryPrevention;
