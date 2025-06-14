
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const SpinalStenosisSurgery = () => {
  return (
    <>
      <title>Spinal Stenosis Surgery in Patna | Lumbar Laminectomy India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert spinal stenosis surgery in Patna by Dr. Gurudeo Kumar. Advanced decompression surgery for spinal canal narrowing. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="spinal stenosis surgery Patna, lumbar laminectomy India, spinal decompression, Dr Gurudeo Kumar spine surgeon, neurogenic claudication treatment Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Spinal Stenosis Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced spinal stenosis surgery by Dr. Gurudeo Kumar for treating spinal canal narrowing and neurogenic claudication. 
              Comprehensive decompression surgery to restore mobility and relieve pain.
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
              alt="Spinal stenosis surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Spinal Stenosis Treatment</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Spinal stenosis surgery is a highly effective treatment for spinal canal narrowing that causes neurogenic 
                    claudication, leg pain, and walking difficulties. At Arthros Center in Patna, Dr. Gurudeo Kumar performs 
                    advanced decompression procedures including laminectomy, foraminotomy, and minimally invasive techniques, 
                    serving patients from Bihar, Bengal, North East India, and Nepal with state-of-the-art neurosurgical care.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The surgery involves carefully removing thickened ligaments, bone spurs, and other structures that are 
                    compressing the spinal cord and nerve roots. Modern techniques include bilateral decompression through 
                    unilateral approach, which reduces tissue trauma while achieving complete decompression. Our goal is to 
                    restore the normal diameter of the spinal canal and neural foramina, allowing patients to walk longer 
                    distances without pain and resume their normal activities.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Spinal Stenosis Surgery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Improved Walking</h4>
                      <p className="text-slate-300">Significantly increased walking distance without pain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Pain Relief</h4>
                      <p className="text-slate-300">Elimination of neurogenic claudication symptoms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Restored Independence</h4>
                      <p className="text-slate-300">Return to daily activities and improved quality of life</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimally Invasive Options</h4>
                      <p className="text-slate-300">Advanced techniques for reduced recovery time</p>
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
                    <p>Posterior decompression</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>2-3 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>4-6 weeks for full recovery</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
                    <p className="text-slate-300">Significant improvement in walking ability</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Walk Without Pain Again</h4>
                  <p className="mb-4 text-cyan-100">Expert spinal stenosis surgery</p>
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

export default SpinalStenosisSurgery;
