
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const OveruseInjuries = () => {
  return (
    <>
      <title>Overuse Injury Treatment in Patna | Sports Medicine Overuse India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert overuse injury treatment in Patna by Dr. Gurudeo Kumar. Comprehensive management of repetitive stress injuries and chronic sports conditions. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="overuse injuries Patna, repetitive stress injury India, chronic sports injury, Dr Gurudeo Kumar, overuse injury treatment Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Overuse Injury Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert overuse injury treatment and management by Dr. Gurudeo Kumar. 
              Comprehensive care for repetitive stress injuries and chronic sports conditions.
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
              alt="Overuse injury treatment and sports medicine care in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Overuse Injury Management</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Overuse injuries result from repetitive stress and inadequate recovery time, affecting 
                    athletes across all sports and activity levels. At Arthros Center in Patna, Dr. Gurudeo 
                    Kumar specializes in comprehensive overuse injury treatment, serving athletes from Bihar, 
                    Bengal, North East India, and Nepal with evidence-based management strategies.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our approach focuses on addressing the underlying causes of overuse injuries through 
                    biomechanical analysis, training modification, and targeted rehabilitation. We emphasize 
                    both treatment and prevention strategies to ensure long-term athletic health and performance.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Treatment Approach</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Biomechanical Analysis</h4>
                      <p className="text-slate-300">Identifying movement patterns contributing to injury</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Load Management</h4>
                      <p className="text-slate-300">Progressive training load modification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Rehabilitation</h4>
                      <p className="text-slate-300">Targeted strengthening and mobility programs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Prevention Strategies</h4>
                      <p className="text-slate-300">Long-term injury prevention programs</p>
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
                    <h4 className="font-semibold text-cyan-400">Common Conditions</h4>
                    <p>Tendinitis, stress fractures, ITB syndrome</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery Time</h4>
                    <p>4-12 weeks depending on severity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Treatment Focus</h4>
                    <p>Conservative management approach</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Prevention</h4>
                    <p>Training modification and education</p>
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
                    <p className="text-slate-300">Successful return to activity</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Overcome Overuse</h4>
                  <p className="mb-4 text-cyan-100">Expert overuse injury treatment</p>
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

export default OveruseInjuries;
