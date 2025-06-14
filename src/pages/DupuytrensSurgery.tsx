
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const DupuytrensSurgery = () => {
  return (
    <>
      <title>Dupuytren's Surgery in Patna | Dupuytren's Contracture Treatment India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert Dupuytren's contracture surgery in Patna by Dr. Gurudeo Kumar. Advanced fasciectomy and needle aponeurotomy for finger extension restoration. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="Dupuytren's surgery Patna, Dupuytren's contracture treatment India, fasciectomy surgery, hand contracture surgery, Dr Gurudeo Kumar hand surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dupuytren's Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert Dupuytren's contracture treatment by Dr. Gurudeo Kumar. Advanced surgical techniques 
              including fasciectomy and needle aponeurotomy to restore finger extension and hand function.
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
              alt="Dupuytren's contracture surgery being performed in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Dupuytren's Contracture Treatment</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Dupuytren's contracture is a progressive condition that causes the fingers to bend toward 
                    the palm and cannot be straightened. The condition involves thickening and tightening of 
                    the fascia beneath the skin. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in 
                    comprehensive Dupuytren's treatment, serving patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our Dupuytren's surgery program offers multiple treatment approaches, from minimally invasive 
                    needle aponeurotomy to complete fasciectomy, tailored to each patient's specific condition 
                    and functional needs to restore maximum finger extension and hand function.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Dupuytren's Treatment Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Needle Aponeurotomy</h4>
                      <p className="text-slate-300">Minimally invasive percutaneous release</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Limited Fasciectomy</h4>
                      <p className="text-slate-300">Selective removal of diseased tissue</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Complete Fasciectomy</h4>
                      <p className="text-slate-300">Comprehensive contracture correction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Skin Grafting</h4>
                      <p className="text-slate-300">Advanced reconstruction when needed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Treatment Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Procedure Time</h4>
                    <p>30-90 minutes depending on complexity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>Local to general based on extent</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>2-8 weeks with hand therapy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Extension Gain</h4>
                    <p>80-90% contracture correction</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Function Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                    <p className="text-slate-300">Significant extension improvement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Restore Hand Function</h4>
                  <p className="mb-4 text-cyan-100">Expert Dupuytren's treatment</p>
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

export default DupuytrensSurgery;
