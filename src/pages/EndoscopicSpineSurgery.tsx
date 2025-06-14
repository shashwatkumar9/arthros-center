
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const EndoscopicSpineSurgery = () => {
  return (
    <>
      <title>Endoscopic Spine Surgery in Patna | Ultra Minimally Invasive Spine Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert endoscopic spine surgery in Patna by Dr. Gurudeo Kumar. Ultra-minimally invasive endoscopic techniques for spine conditions. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="endoscopic spine surgery Patna, minimally invasive spine surgery India, endoscopic discectomy, Dr Gurudeo Kumar spine surgeon, keyhole spine surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Endoscopic Spine Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced endoscopic spine surgery by Dr. Gurudeo Kumar using ultra-minimally invasive endoscopic techniques. 
              Revolutionary keyhole approach for spine conditions with minimal tissue damage and rapid recovery.
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
              alt="Endoscopic spine surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Ultra-Minimally Invasive Endoscopic Surgery</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Endoscopic spine surgery represents the cutting edge of minimally invasive spinal procedures, using 
                    advanced endoscopic visualization to treat various spine conditions through tiny incisions. At Arthros 
                    Center in Patna, Dr. Gurudeo Kumar performs state-of-the-art endoscopic discectomy, foraminotomy, and 
                    decompression procedures, serving patients from Bihar, Bengal, North East India, and Nepal with the 
                    latest endoscopic technology.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The endoscopic approach uses a small tubular system and high-definition camera to visualize and treat 
                    spinal pathology through incisions as small as 7-8mm. This revolutionary technique preserves normal 
                    anatomy, minimizes muscle damage, and allows for same-day discharge in many cases. The precision of 
                    endoscopic visualization enables targeted treatment while preserving healthy tissue, resulting in 
                    faster recovery and excellent outcomes.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Endoscopic Spine Surgery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimal Tissue Damage</h4>
                      <p className="text-slate-300">Preserves normal spinal anatomy and muscle function</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Same Day Discharge</h4>
                      <p className="text-slate-300">Outpatient procedure with rapid recovery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Tiny Incisions</h4>
                      <p className="text-slate-300">7-8mm keyhole incisions with minimal scarring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">HD Visualization</h4>
                      <p className="text-slate-300">High-definition endoscopic imaging for precision</p>
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
                    <p>45-90 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Incision Size</h4>
                    <p>7-8mm keyhole incision</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>Same day discharge</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>1-2 weeks return to work</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">93%</div>
                    <p className="text-slate-300">Excellent outcomes with rapid recovery</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Revolutionary Keyhole Surgery</h4>
                  <p className="mb-4 text-cyan-100">Ultra-minimally invasive endoscopic technique</p>
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

export default EndoscopicSpineSurgery;
