
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const SacroiliacJointTreatment = () => {
  return (
    <>
      <title>Sacroiliac Joint Treatment in Patna | SI Joint Fusion India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert sacroiliac joint treatment in Patna by Dr. Gurudeo Kumar. Advanced SI joint fusion and pain management. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="sacroiliac joint treatment Patna, SI joint fusion India, sacroiliac joint pain, Dr Gurudeo Kumar spine specialist, SI joint Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sacroiliac Joint Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive sacroiliac joint treatment by Dr. Gurudeo Kumar. Advanced SI joint fusion and 
              conservative management for chronic sacroiliac joint dysfunction.
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
              alt="Sacroiliac joint treatment being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Sacroiliac Joint Care</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Sacroiliac joint dysfunction can cause significant lower back and buttock pain, affecting daily 
                    activities and quality of life. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive 
                    treatment for sacroiliac joint disorders, ranging from conservative management to advanced surgical 
                    fusion techniques, serving patients from Bihar, Bengal, North East India, and Nepal with specialized 
                    expertise in this complex condition.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Treatment begins with accurate diagnosis through clinical examination and specialized imaging. 
                    Dr. Gurudeo Kumar employs a graduated approach starting with conservative measures including physical 
                    therapy, injections, and radiofrequency ablation. For patients with persistent symptoms, minimally 
                    invasive SI joint fusion using advanced implants provides definitive treatment with excellent 
                    pain relief and minimal recovery time.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Treatment Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Conservative Care</h4>
                      <p className="text-slate-300">Physical therapy, injections, radiofrequency treatment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimally Invasive Fusion</h4>
                      <p className="text-slate-300">Advanced implants with small incisions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Precise Diagnosis</h4>
                      <p className="text-slate-300">Advanced imaging and diagnostic injections</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Long-term Relief</h4>
                      <p className="text-slate-300">Durable pain relief with functional improvement</p>
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
                    <h4 className="font-semibold text-cyan-400">Diagnosis</h4>
                    <p>Clinical exam, imaging, diagnostic injections</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Surgery Duration</h4>
                    <p>30-60 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>Same day or overnight</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>6-12 weeks full activity</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">82%</div>
                    <p className="text-slate-300">Significant pain improvement with fusion</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">End SI Joint Pain</h4>
                  <p className="mb-4 text-cyan-100">Specialized treatment for sacroiliac joint dysfunction</p>
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

export default SacroiliacJointTreatment;
