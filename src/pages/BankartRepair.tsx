
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const BankartRepair = () => {
  return (
    <>
      <title>Bankart Repair Surgery in Patna | Shoulder Instability Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert Bankart repair surgery in Patna by Dr. Gurudeo Kumar. Advanced arthroscopic treatment for shoulder instability and labral tears. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="Bankart repair Patna, shoulder instability surgery India, labral repair surgery, Dr Gurudeo Kumar shoulder specialist, arthroscopic Bankart repair Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bankart Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced arthroscopic Bankart repair surgery by Dr. Gurudeo Kumar for shoulder instability. Expert treatment 
              for labral tears and anterior shoulder dislocations using minimally invasive techniques.
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
              alt="Bankart repair surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Expert Bankart Repair for Shoulder Stability</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    A Bankart lesion occurs when the shoulder's labrum (the cartilage rim around the socket) tears away 
                    from the bone, typically following an anterior shoulder dislocation. At Arthros Center in Patna, 
                    Dr. Gurudeo Kumar specializes in arthroscopic Bankart repair, a minimally invasive procedure that 
                    restores shoulder stability and prevents recurrent dislocations for patients from Bihar, Bengal, 
                    North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The arthroscopic Bankart repair involves reattaching the torn labrum to the glenoid bone using small 
                    anchors and sutures. This procedure restores the normal anatomy of the shoulder socket, providing 
                    stability while preserving the natural range of motion. Our advanced arthroscopic technique offers 
                    superior visualization, precise repair, and faster recovery compared to traditional open surgery, 
                    allowing patients to return to sports and daily activities with confidence.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Arthroscopic Bankart Repair</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimally Invasive</h4>
                      <p className="text-slate-300">Small keyhole incisions preserve surrounding tissues</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">High Success Rate</h4>
                      <p className="text-slate-300">Over 95% success in preventing recurrent dislocations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Sports Return</h4>
                      <p className="text-slate-300">Enables safe return to contact sports and overhead activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Preserved Motion</h4>
                      <p className="text-slate-300">Maintains natural shoulder range of motion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Procedure Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Duration</h4>
                    <p>1-2 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>General anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>Same day discharge</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>4-6 months return to sports</p>
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
                    <p className="text-slate-300">Prevention of recurrent shoulder dislocations</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Restore Shoulder Stability</h4>
                  <p className="mb-4 text-cyan-100">Expert Bankart repair for lasting shoulder stability</p>
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

export default BankartRepair;
