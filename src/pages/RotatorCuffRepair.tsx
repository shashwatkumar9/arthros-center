
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const RotatorCuffRepair = () => {
  return (
    <>
      <title>Rotator Cuff Repair Surgery in Patna | Best Shoulder Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert rotator cuff repair surgery in Patna by Dr. Gurudeo Kumar. Advanced arthroscopic techniques for torn rotator cuff tendons. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="rotator cuff repair Patna, shoulder surgery India, arthroscopic rotator cuff repair, Dr Gurudeo Kumar shoulder, rotator cuff tear surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Rotator Cuff Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced arthroscopic rotator cuff repair surgery by Dr. Gurudeo Kumar. Expert treatment for rotator cuff tears 
              using minimally invasive techniques for faster recovery and optimal shoulder function restoration.
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
              alt="Rotator cuff repair surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Expert Rotator Cuff Repair at Arthros Center</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Rotator cuff tears are among the most common shoulder injuries, affecting millions of people worldwide. 
                    At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in advanced arthroscopic rotator cuff repair, 
                    offering patients from Bihar, Bengal, North East India, and Nepal access to world-class shoulder surgery 
                    with minimal invasive techniques and superior outcomes.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The rotator cuff consists of four muscles and their tendons that stabilize the shoulder joint and enable 
                    overhead arm movements. When these tendons tear due to injury, overuse, or age-related degeneration, 
                    patients experience pain, weakness, and limited shoulder function. Our arthroscopic repair technique 
                    uses small incisions and specialized instruments to reattach the torn tendon to the bone, preserving 
                    surrounding healthy tissue and promoting faster healing.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Arthroscopic Rotator Cuff Repair?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimally Invasive</h4>
                      <p className="text-slate-300">Small incisions reduce tissue damage and scarring compared to open surgery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Faster Recovery</h4>
                      <p className="text-slate-300">Quicker rehabilitation and return to normal activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Better Visualization</h4>
                      <p className="text-slate-300">High-definition camera provides superior view of the repair site</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Precise Repair</h4>
                      <p className="text-slate-300">Advanced techniques ensure optimal tendon-to-bone healing</p>
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
                    <p>Same day or overnight</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>4-6 months full recovery</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                    <p className="text-slate-300">Patient satisfaction rate with excellent functional outcomes</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Ready to Restore Your Shoulder?</h4>
                  <p className="mb-4 text-cyan-100">Book your consultation with Dr. Gurudeo Kumar today</p>
                  <Button 
                    className="w-full bg-white text-cyan-600 hover:bg-slate-100"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Book Appointment
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

export default RotatorCuffRepair;
