
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const ACLInjuries = () => {
  return (
    <>
      <title>ACL Injury Treatment in Patna | ACL Tear Sports Medicine India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Comprehensive ACL injury treatment in Patna by Dr. Gurudeo Kumar. Expert sports medicine care for ACL tears, sprains, and reconstruction. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="ACL injury Patna, ACL tear treatment India, sports medicine ACL, Dr Gurudeo Kumar, ACL injury Bihar, knee injury sports medicine" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ACL Injury Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert ACL injury treatment and sports medicine care by Dr. Gurudeo Kumar. 
              Comprehensive evaluation, treatment, and rehabilitation for ACL tears and injuries.
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
              alt="ACL injury treatment and sports medicine care in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive ACL Injury Management</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    ACL (Anterior Cruciate Ligament) injuries are among the most common sports-related knee injuries, 
                    particularly affecting athletes in high-impact sports. At Arthros Center in Patna, Dr. Gurudeo Kumar 
                    provides comprehensive ACL injury evaluation and treatment, serving athletes from Bihar, Bengal, 
                    North East India, and Nepal with advanced sports medicine care.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our approach to ACL injuries encompasses immediate evaluation, accurate diagnosis using advanced 
                    imaging, and individualized treatment plans. Whether conservative management or surgical reconstruction 
                    is needed, we focus on returning athletes to their sport safely and preventing future injuries through 
                    comprehensive rehabilitation and injury prevention programs.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">ACL Injury Treatment Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Conservative Treatment</h4>
                      <p className="text-slate-300">Non-surgical management for partial tears and low-demand patients</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">ACL Reconstruction</h4>
                      <p className="text-slate-300">Surgical reconstruction for complete tears and active individuals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Sports Rehabilitation</h4>
                      <p className="text-slate-300">Sport-specific rehabilitation and return-to-play protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Injury Prevention</h4>
                      <p className="text-slate-300">Programs to prevent ACL injuries and re-injuries</p>
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
                    <h4 className="font-semibold text-cyan-400">Common Sports</h4>
                    <p>Football, Basketball, Soccer, Skiing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery Time</h4>
                    <p>6-12 months for sports return</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Treatment Options</h4>
                    <p>Conservative, Reconstruction</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Prevention Focus</h4>
                    <p>High priority injury prevention</p>
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
                    <p className="text-slate-300">Return to sport after treatment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Get Back in the Game</h4>
                  <p className="mb-4 text-cyan-100">Expert ACL injury treatment</p>
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

export default ACLInjuries;
