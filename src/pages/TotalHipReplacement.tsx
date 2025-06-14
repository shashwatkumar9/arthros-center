
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const TotalHipReplacement = () => {
  return (
    <>
      <title>Total Hip Replacement Surgery in Patna | Hip Replacement India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert total hip replacement surgery in Patna by Dr. Gurudeo Kumar. Advanced hip replacement with modern implants. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="total hip replacement Patna, hip replacement surgery India, hip joint replacement, Dr Gurudeo Kumar hip specialist, hip replacement Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Total Hip Replacement Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert total hip replacement surgery by Dr. Gurudeo Kumar using advanced implants and minimally 
              invasive techniques. Complete hip joint reconstruction for lasting pain relief and mobility.
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
              alt="Total hip replacement surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Total Hip Replacement</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Total hip replacement is a highly successful surgical procedure that involves replacing the 
                    damaged or diseased hip joint with artificial components. At Arthros Center in Patna, Dr. Gurudeo 
                    Kumar performs state-of-the-art total hip replacement using the latest implants and surgical 
                    techniques, providing patients from Bihar, Bengal, North East India, and Nepal with exceptional 
                    outcomes and rapid recovery.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The procedure involves replacing both the femoral head (ball) and acetabulum (socket) with 
                    durable prosthetic components made from advanced materials like ceramic, metal, or specialized 
                    polyethylene. Dr. Gurudeo Kumar employs both anterior and posterior approaches based on individual 
                    patient anatomy and needs, ensuring optimal implant positioning for long-term durability and 
                    excellent functional outcomes.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Total Hip Replacement</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Pain Relief</h4>
                      <p className="text-slate-300">Complete elimination of arthritis and joint pain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Restored Mobility</h4>
                      <p className="text-slate-300">Return to normal walking and daily activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Long-term Durability</h4>
                      <p className="text-slate-300">Modern implants lasting 20+ years</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Improved Quality of Life</h4>
                      <p className="text-slate-300">Return to sports and recreational activities</p>
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
                    <p>Spinal or general anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>2-3 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>6-12 weeks full recovery</p>
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
                    <p className="text-slate-300">Excellent long-term outcomes at 10+ years</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">New Hip, New Life</h4>
                  <p className="mb-4 text-cyan-100">Expert hip replacement for lasting pain relief</p>
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

export default TotalHipReplacement;
