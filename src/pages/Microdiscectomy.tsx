
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const Microdiscectomy = () => {
  return (
    <>
      <title>Microdiscectomy Surgery in Patna | Minimally Invasive Disc Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert microdiscectomy surgery in Patna by Dr. Gurudeo Kumar. Minimally invasive treatment for disc herniation and sciatica. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="microdiscectomy Patna, disc herniation surgery India, sciatica treatment, Dr Gurudeo Kumar spine surgeon, minimally invasive spine surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Microdiscectomy Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced microdiscectomy surgery by Dr. Gurudeo Kumar for treating disc herniation and sciatica. 
              Minimally invasive microsurgical technique for rapid relief and recovery.
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
              alt="Microdiscectomy surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Minimally Invasive Microdiscectomy</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Microdiscectomy is the gold standard minimally invasive treatment for lumbar disc herniation causing 
                    sciatica and leg pain. At Arthros Center in Patna, Dr. Gurudeo Kumar performs advanced microdiscectomy 
                    procedures using high-powered microscopes and specialized microsurgical instruments, serving patients 
                    from Bihar, Bengal, North East India, and Nepal with state-of-the-art neurosurgical techniques.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The procedure involves making a small incision and using microsurgical techniques to carefully remove 
                    the herniated disc material that is compressing the nerve root. Our approach preserves as much normal 
                    disc tissue as possible while providing complete decompression of the affected nerve. The minimally 
                    invasive nature of the surgery results in less tissue damage, reduced pain, and faster recovery compared 
                    to traditional open discectomy.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Microdiscectomy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Immediate Relief</h4>
                      <p className="text-slate-300">Rapid relief from sciatica and leg pain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Quick Recovery</h4>
                      <p className="text-slate-300">Same day discharge and rapid return to activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimal Tissue Damage</h4>
                      <p className="text-slate-300">Preserves normal spinal anatomy and function</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Microsurgical Precision</h4>
                      <p className="text-slate-300">High-powered microscope for optimal visualization</p>
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
                    <h4 className="font-semibold text-cyan-400">Incision</h4>
                    <p>Small 2-3 cm incision</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>Same day discharge</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>2-4 weeks return to work</p>
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
                    <p className="text-slate-300">Excellent leg pain relief</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">End Your Sciatica Pain</h4>
                  <p className="mb-4 text-cyan-100">Minimally invasive microdiscectomy</p>
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

export default Microdiscectomy;
