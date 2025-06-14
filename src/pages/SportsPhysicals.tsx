
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const SportsPhysicals = () => {
  return (
    <>
      <title>Sports Physicals in Patna | Pre-participation Exams India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Comprehensive sports physicals in Patna by Dr. Gurudeo Kumar. Pre-participation physical examinations and athletic clearance. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="sports physicals Patna, pre-participation exam India, athletic clearance, Dr Gurudeo Kumar, sports medicine physical Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sports Physicals in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive sports physicals and pre-participation examinations by Dr. Gurudeo Kumar. 
              Ensuring athlete safety and optimal performance through thorough medical evaluation.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Schedule Physical
            </Button>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/243a83c3-ea4b-4413-a11e-c9de37592930.png" 
              alt="Sports physicals and pre-participation exams in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Sports Physical Examinations</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Sports physicals are essential for ensuring athlete safety and optimal performance. At 
                    Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive pre-participation 
                    physical examinations, serving athletes from Bihar, Bengal, North East India, and Nepal 
                    with thorough medical evaluations and clearance protocols.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our sports physicals go beyond basic medical clearance to include performance optimization 
                    assessments and injury risk screening. We ensure athletes are not only medically cleared 
                    for participation but also prepared for peak performance in their chosen sport.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Physical Examination Components</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Medical History</h4>
                      <p className="text-slate-300">Comprehensive health and injury history review</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Physical Assessment</h4>
                      <p className="text-slate-300">Cardiovascular, musculoskeletal, and neurological</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Performance Testing</h4>
                      <p className="text-slate-300">Functional movement and fitness assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Clearance Documentation</h4>
                      <p className="text-slate-300">Official medical clearance and recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Examination Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Duration</h4>
                    <p>45-60 minutes comprehensive exam</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Age Groups</h4>
                    <p>Youth through professional athletes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Documentation</h4>
                    <p>Official clearance forms provided</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Validity</h4>
                    <p>One year from examination date</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Clearance Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                    <p className="text-slate-300">Athletes cleared for participation</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Get Cleared to Play</h4>
                  <p className="mb-4 text-cyan-100">Comprehensive sports physicals</p>
                  <Button 
                    className="w-full bg-white text-cyan-600 hover:bg-slate-100"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Book Physical
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

export default SportsPhysicals;
