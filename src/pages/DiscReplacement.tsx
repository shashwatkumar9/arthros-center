
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const DiscReplacement = () => {
  return (
    <>
      <title>Lumbar Disc Replacement Surgery in Patna | Artificial Disc Replacement India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert lumbar disc replacement surgery in Patna by Dr. Gurudeo Kumar. Motion-preserving artificial disc replacement for lumbar spine. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="lumbar disc replacement Patna, artificial disc replacement India, motion preserving surgery, Dr Gurudeo Kumar spine surgeon, lumbar spine surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lumbar Disc Replacement Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced lumbar disc replacement surgery by Dr. Gurudeo Kumar using motion-preserving artificial disc technology. 
              Modern alternative to lumbar fusion for treating degenerative disc disease.
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
              alt="Lumbar disc replacement surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Motion-Preserving Lumbar Disc Replacement</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Lumbar disc replacement represents a revolutionary advancement in lumbar spine surgery, offering a 
                    motion-preserving alternative to traditional fusion procedures. At Arthros Center in Patna, Dr. Gurudeo Kumar 
                    specializes in artificial lumbar disc replacement using the latest generation implants for patients 
                    from Bihar, Bengal, North East India, and Nepal suffering from degenerative lumbar disc disease.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Unlike lumbar fusion which eliminates motion at the treated level, lumbar disc replacement maintains 
                    normal spinal movement while relieving pain and neurological symptoms. The artificial disc mimics the natural 
                    disc's function, allowing for flexion, extension, and rotation while providing stability and shock absorption. 
                    This advanced procedure is particularly beneficial for younger, active patients who want to maintain their 
                    normal lumbar spine motion and avoid adjacent level degeneration.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Lumbar Disc Replacement</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Motion Preservation</h4>
                      <p className="text-slate-300">Maintains natural lumbar spine movement and flexibility</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Adjacent Level Protection</h4>
                      <p className="text-slate-300">Reduces stress on adjacent vertebrae</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Faster Recovery</h4>
                      <p className="text-slate-300">Quicker return to normal activities compared to fusion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Advanced Technology</h4>
                      <p className="text-slate-300">Latest generation artificial disc implants</p>
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
                    <p>2-3 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Approach</h4>
                    <p>Anterior lumbar approach</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>2-3 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>6-8 weeks full recovery</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">88%</div>
                    <p className="text-slate-300">Excellent pain relief and motion preservation</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Preserve Your Spine Motion</h4>
                  <p className="mb-4 text-cyan-100">Advanced lumbar disc replacement surgery</p>
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

export default DiscReplacement;
