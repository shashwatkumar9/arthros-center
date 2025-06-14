
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const ReturnToSportPrograms = () => {
  return (
    <>
      <title>Return to Sport Programs in Patna | Sports Medicine Rehabilitation India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert return to sport programs in Patna by Dr. Gurudeo Kumar. Comprehensive rehabilitation and sports medicine protocols for safe athletic return. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="return to sport Patna, sports rehabilitation India, athletic return programs, Dr Gurudeo Kumar, sports medicine Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Return to Sport Programs in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive return to sport programs by Dr. Gurudeo Kumar. 
              Evidence-based rehabilitation protocols for safe athletic return after injury.
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
              alt="Return to sport programs and athletic rehabilitation in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Return to Sport Programs</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Returning to sports after injury requires more than just healing - it demands comprehensive 
                    preparation to ensure safe, confident, and successful athletic performance. At Arthros Center 
                    in Patna, Dr. Gurudeo Kumar provides evidence-based return to sport programs, serving athletes 
                    from Bihar, Bengal, North East India, and Nepal with sport-specific rehabilitation protocols.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our return to sport programs utilize objective testing, functional assessments, and graduated 
                    progression protocols to minimize re-injury risk while optimizing performance. We focus on 
                    sport-specific movements, psychological readiness, and comprehensive fitness preparation.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Program Components</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Functional Testing</h4>
                      <p className="text-slate-300">Objective assessment of readiness for return</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Progressive Loading</h4>
                      <p className="text-slate-300">Graduated intensity and complexity progression</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Sport-Specific Training</h4>
                      <p className="text-slate-300">Movements and demands specific to your sport</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Psychological Support</h4>
                      <p className="text-slate-300">Confidence building and fear management</p>
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
                    <h4 className="font-semibold text-cyan-400">Duration</h4>
                    <p>4-12 weeks depending on injury</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Testing Protocol</h4>
                    <p>Objective functional assessments</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Sport Focus</h4>
                    <p>All sports and activity levels</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Success Metrics</h4>
                    <p>Performance and confidence measures</p>
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
                    <p className="text-slate-300">Successful return to sport</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Return Stronger</h4>
                  <p className="mb-4 text-cyan-100">Comprehensive return to sport programs</p>
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

export default ReturnToSportPrograms;
