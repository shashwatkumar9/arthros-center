
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const LumbarFusion = () => {
  return (
    <>
      <title>Lumbar Fusion Surgery in Patna | PLIF TLIF Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert lumbar fusion surgery in Patna by Dr. Gurudeo Kumar. PLIF, TLIF, and lateral fusion techniques for lumbar spine stability. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="lumbar fusion Patna, PLIF surgery India, TLIF surgery, lateral fusion, Dr Gurudeo Kumar spine surgeon, lumbar spine surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lumbar Fusion Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced lumbar fusion surgery by Dr. Gurudeo Kumar including PLIF, TLIF, and lateral fusion techniques. 
              Comprehensive treatment for lumbar spine instability and degenerative conditions.
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
              alt="Lumbar fusion surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Lumbar Fusion Surgery</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Lumbar fusion surgery is the gold standard treatment for various lumbar spine conditions including 
                    degenerative disc disease, spondylolisthesis, and spinal instability. At Arthros Center in Patna, 
                    Dr. Gurudeo Kumar performs advanced lumbar fusion procedures including PLIF (Posterior Lumbar 
                    Interbody Fusion), TLIF (Transforaminal Lumbar Interbody Fusion), and lateral fusion techniques, 
                    serving patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Modern lumbar fusion techniques focus on achieving solid bony fusion while minimizing surgical trauma. 
                    We utilize advanced interbody cages, bone graft materials, and pedicle screw systems to provide 
                    immediate stability and promote long-term fusion. Our minimally invasive approaches reduce muscle 
                    damage and accelerate recovery while maintaining the effectiveness of traditional open techniques.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Lumbar Fusion</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Spinal Stability</h4>
                      <p className="text-slate-300">Permanent stabilization of unstable spinal segments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Pain Relief</h4>
                      <p className="text-slate-300">Significant reduction in back and leg pain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Deformity Correction</h4>
                      <p className="text-slate-300">Restores normal spinal alignment and balance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Multiple Techniques</h4>
                      <p className="text-slate-300">PLIF, TLIF, and lateral fusion options</p>
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
                    <p>3-5 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Techniques</h4>
                    <p>PLIF, TLIF, Lateral fusion</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>3-5 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Fusion Time</h4>
                    <p>6-12 months for solid fusion</p>
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
                    <p className="text-slate-300">Successful fusion and symptom improvement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Stabilize Your Spine</h4>
                  <p className="mb-4 text-cyan-100">Expert lumbar fusion surgery</p>
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

export default LumbarFusion;
