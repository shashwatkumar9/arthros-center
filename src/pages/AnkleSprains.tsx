
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const AnkleSprains = () => {
  return (
    <>
      <title>Ankle Sprain Treatment in Patna | Sports Medicine Ankle Care India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert ankle sprain treatment in Patna by Dr. Gurudeo Kumar. Comprehensive sports medicine care for ankle injuries and chronic instability. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="ankle sprain Patna, ankle injury treatment India, sports medicine ankle, Dr Gurudeo Kumar, ankle instability Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ankle Sprain Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert ankle sprain treatment and sports medicine care by Dr. Gurudeo Kumar. 
              Comprehensive management of ankle injuries and chronic instability.
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
              alt="Ankle sprain treatment and sports medicine care in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Ankle Sprain Management</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Ankle sprains are among the most common sports injuries, affecting athletes across all sports and 
                    activity levels. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive ankle sprain 
                    evaluation and treatment, serving athletes from Bihar, Bengal, North East India, and Nepal with 
                    advanced sports medicine care and rehabilitation protocols.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our approach emphasizes accurate grading of ankle sprains, appropriate initial treatment, and 
                    comprehensive rehabilitation to prevent chronic instability. We utilize advanced diagnostic imaging 
                    and evidence-based treatment protocols to ensure optimal healing and safe return to sports activities.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ankle Sprain Treatment Approach</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Acute Care</h4>
                      <p className="text-slate-300">Immediate assessment and RICE protocol implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Progressive Rehabilitation</h4>
                      <p className="text-slate-300">Structured recovery and strengthening programs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Instability Treatment</h4>
                      <p className="text-slate-300">Management of chronic ankle instability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Prevention Programs</h4>
                      <p className="text-slate-300">Balance and proprioception training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Injury Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Severity Grades</h4>
                    <p>Grade I, II, III classifications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery Time</h4>
                    <p>2 weeks - 3 months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Treatment Type</h4>
                    <p>Conservative to surgical</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Prevention Focus</h4>
                    <p>Balance and strength training</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">96%</div>
                    <p className="text-slate-300">Full recovery with proper treatment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Heal Your Ankle</h4>
                  <p className="mb-4 text-cyan-100">Expert ankle sprain treatment</p>
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

export default AnkleSprains;
