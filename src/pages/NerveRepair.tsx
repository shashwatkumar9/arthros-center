
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const NerveRepair = () => {
  return (
    <>
      <title>Nerve Repair Surgery in Patna | Peripheral Nerve Reconstruction India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert nerve repair surgery in Patna by Dr. Gurudeo Kumar. Advanced peripheral nerve reconstruction and grafting for traumatic nerve injuries. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="nerve repair surgery Patna, peripheral nerve reconstruction India, nerve grafting, Dr Gurudeo Kumar nerve surgery, traumatic nerve injury Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nerve Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert peripheral nerve repair surgery by Dr. Gurudeo Kumar. Advanced microsurgical 
              techniques for traumatic nerve injuries and nerve reconstruction.
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
              alt="Nerve repair surgery being performed in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Peripheral Nerve Reconstruction</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Peripheral nerve injuries can result from trauma, lacerations, or compression, leading 
                    to loss of sensation and motor function. Timely and expert nerve repair is crucial for 
                    optimal recovery. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in advanced 
                    nerve repair surgery, serving patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our nerve repair program utilizes microsurgical techniques including direct repair, 
                    nerve grafting, and nerve conduits to restore nerve continuity and function. We employ 
                    state-of-the-art surgical microscopes and specialized instruments for precise nerve reconstruction.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Nerve Repair Techniques</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Direct Repair</h4>
                      <p className="text-slate-300">Primary nerve suture for acute injuries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Nerve Grafting</h4>
                      <p className="text-slate-300">Autograft reconstruction for nerve gaps</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Nerve Conduits</h4>
                      <p className="text-slate-300">Synthetic tubes for small nerve gaps</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Microsurgical Repair</h4>
                      <p className="text-slate-300">Precise fascicular alignment techniques</p>
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
                    <p>2-6 hours depending on complexity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>General anesthesia with nerve blocks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>3-6 months for nerve regeneration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Success Rate</h4>
                    <p>70-85% functional recovery</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Nerve Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">78%</div>
                    <p className="text-slate-300">Meaningful function recovery</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Restore Nerve Function</h4>
                  <p className="mb-4 text-cyan-100">Expert nerve repair surgery</p>
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

export default NerveRepair;
