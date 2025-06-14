
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const NerveTransfer = () => {
  return (
    <>
      <title>Nerve Transfer Surgery in Patna | Tendon Transfer Procedures India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert nerve transfer surgery in Patna by Dr. Gurudeo Kumar. Advanced nerve and tendon transfer procedures for paralysis and nerve injuries. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="nerve transfer surgery Patna, tendon transfer India, nerve reconstruction, Dr Gurudeo Kumar nerve surgery, paralysis treatment Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nerve Transfer Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert nerve transfer surgery by Dr. Gurudeo Kumar. Advanced nerve and tendon transfer 
              procedures to restore function after nerve injuries and paralysis.
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
              alt="Nerve transfer surgery being performed in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Nerve and Tendon Transfer Surgery</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Nerve transfer surgery involves redirecting functioning nerves to restore movement 
                    and sensation after nerve injuries or paralysis. This innovative procedure can provide 
                    remarkable functional restoration when direct nerve repair is not possible. At Arthros 
                    Center in Patna, Dr. Gurudeo Kumar specializes in complex nerve transfer procedures, 
                    serving patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our nerve transfer program combines nerve transfers with tendon transfers to maximize 
                    functional recovery. We utilize advanced microsurgical techniques and comprehensive 
                    rehabilitation protocols to achieve optimal outcomes for patients with nerve injuries and paralysis.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Transfer Surgery Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Motor Nerve Transfer</h4>
                      <p className="text-slate-300">Restore muscle function and movement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Sensory Nerve Transfer</h4>
                      <p className="text-slate-300">Restore protective sensation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Tendon Transfer</h4>
                      <p className="text-slate-300">Reroute functioning tendons</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Combined Procedures</h4>
                      <p className="text-slate-300">Multiple transfers for maximum function</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Surgery Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Procedure Time</h4>
                    <p>3-8 hours depending on complexity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>General anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>6-12 months for maximum benefit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Success Rate</h4>
                    <p>75-90% functional improvement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Function Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                    <p className="text-slate-300">Meaningful function restoration</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Restore Lost Function</h4>
                  <p className="mb-4 text-cyan-100">Expert nerve transfer surgery</p>
                  <Button 
                    className="w-full bg-white text-cyan-600 hover:bg-slate-100"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Book Surgery
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

export default NerveTransfer;
