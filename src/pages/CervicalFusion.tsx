
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const CervicalFusion = () => {
  return (
    <>
      <title>Cervical Fusion Surgery in Patna | ACDF Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert cervical fusion surgery in Patna by Dr. Gurudeo Kumar. ACDF and posterior cervical fusion for spine stability. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="cervical fusion Patna, ACDF surgery India, posterior cervical fusion, Dr Gurudeo Kumar spine surgeon, cervical spine surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cervical Fusion Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced cervical fusion surgery by Dr. Gurudeo Kumar including ACDF and posterior cervical fusion procedures. 
              Proven surgical treatment for cervical spine instability and degenerative conditions.
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
              alt="Cervical fusion surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Cervical Fusion Surgery</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Cervical fusion surgery is a highly effective treatment for various cervical spine conditions including 
                    degenerative disc disease, cervical myelopathy, and spinal instability. At Arthros Center in Patna, 
                    Dr. Gurudeo Kumar performs both anterior cervical discectomy and fusion (ACDF) and posterior cervical 
                    fusion procedures, serving patients from Bihar, Bengal, North East India, and Nepal with advanced 
                    spinal fusion techniques.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The procedure involves removing damaged disc material or bone spurs that compress the spinal cord or 
                    nerve roots, followed by placement of bone graft material to promote fusion between vertebrae. Modern 
                    techniques include the use of titanium plates, screws, and cages to provide immediate stability while 
                    the bone fusion develops. Our approach emphasizes minimal tissue disruption and optimal spinal alignment 
                    for long-term success.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Cervical Fusion</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Spinal Stability</h4>
                      <p className="text-slate-300">Provides permanent stabilization of the cervical spine</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Pain Relief</h4>
                      <p className="text-slate-300">Eliminates nerve compression and associated pain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Neurological Protection</h4>
                      <p className="text-slate-300">Prevents further spinal cord or nerve damage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                      <p className="text-slate-300">High success rates with modern techniques</p>
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
                    <p>2-4 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Approaches</h4>
                    <p>ACDF or Posterior fusion</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>2-3 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Fusion Time</h4>
                    <p>3-6 months for solid fusion</p>
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
                    <p className="text-slate-300">Successful fusion and symptom relief</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Restore Spine Stability</h4>
                  <p className="mb-4 text-cyan-100">Expert cervical fusion surgery</p>
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

export default CervicalFusion;
