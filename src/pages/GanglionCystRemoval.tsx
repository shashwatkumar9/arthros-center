
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const GanglionCystRemoval = () => {
  return (
    <>
      <title>Ganglion Cyst Removal Surgery in Patna | Wrist Ganglion Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert ganglion cyst removal surgery in Patna by Dr. Gurudeo Kumar. Minimally invasive and open techniques for wrist and hand ganglion cysts. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="ganglion cyst removal Patna, wrist ganglion surgery India, hand cyst surgery, Dr Gurudeo Kumar ganglion, cyst excision Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ganglion Cyst Removal in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert ganglion cyst removal surgery by Dr. Gurudeo Kumar. Advanced surgical techniques 
              for wrist and hand ganglion cysts with minimal recurrence rates.
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
              alt="Ganglion cyst removal surgery being performed in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Ganglion Cyst Treatment</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Ganglion cysts are fluid-filled lumps that commonly develop near joints and tendons 
                    in the wrist and hand. While often benign, they can cause pain, discomfort, and 
                    functional limitations. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in 
                    comprehensive ganglion cyst removal, serving patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our ganglion cyst removal program offers both minimally invasive arthroscopic and 
                    traditional open surgical techniques, depending on cyst location and characteristics. 
                    We focus on complete excision to minimize recurrence while preserving surrounding structures.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ganglion Cyst Removal Techniques</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Open Excision</h4>
                      <p className="text-slate-300">Complete cyst and stalk removal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Arthroscopic Removal</h4>
                      <p className="text-slate-300">Minimally invasive technique for select cases</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Capsule Repair</h4>
                      <p className="text-slate-300">Joint capsule reconstruction when needed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Recurrence Prevention</h4>
                      <p className="text-slate-300">Techniques to minimize cyst recurrence</p>
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
                    <p>20-45 minutes outpatient surgery</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>Local or regional anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>1-3 weeks return to activities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recurrence Rate</h4>
                    <p>Less than 5% with complete excision</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Patient Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">97%</div>
                    <p className="text-slate-300">Successful cyst elimination</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Eliminate Ganglion Cysts</h4>
                  <p className="mb-4 text-cyan-100">Expert cyst removal surgery</p>
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

export default GanglionCystRemoval;
