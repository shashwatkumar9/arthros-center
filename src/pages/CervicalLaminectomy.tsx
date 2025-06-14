
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const CervicalLaminectomy = () => {
  return (
    <>
      <title>Cervical Laminectomy Surgery in Patna | Cervical Stenosis Treatment India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert cervical laminectomy surgery in Patna by Dr. Gurudeo Kumar. Advanced decompression surgery for cervical stenosis. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="cervical laminectomy Patna, cervical stenosis surgery India, spinal decompression, Dr Gurudeo Kumar spine surgeon, cervical myelopathy treatment Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cervical Laminectomy Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced cervical laminectomy surgery by Dr. Gurudeo Kumar for treating cervical stenosis and myelopathy. 
              Precise decompression surgery to relieve spinal cord and nerve compression.
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
              alt="Cervical laminectomy surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Cervical Decompression Surgery</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Cervical laminectomy is a specialized decompression surgery designed to treat cervical spinal stenosis 
                    and cervical myelopathy. At Arthros Center in Patna, Dr. Gurudeo Kumar performs precise cervical 
                    laminectomy procedures to relieve pressure on the spinal cord and nerve roots, serving patients from 
                    Bihar, Bengal, North East India, and Nepal with advanced neurosurgical techniques.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The procedure involves carefully removing portions of the lamina (back part of the vertebra) and other 
                    structures that are compressing the spinal cord. Modern techniques include laminoplasty, which preserves 
                    the posterior elements while creating more space for the spinal cord. Our approach emphasizes preserving 
                    cervical spine stability while achieving adequate decompression for optimal neurological recovery.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Cervical Laminectomy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Spinal Cord Relief</h4>
                      <p className="text-slate-300">Decompresses spinal cord and nerve roots effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Neurological Recovery</h4>
                      <p className="text-slate-300">Improves hand function and walking ability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Motion Preservation</h4>
                      <p className="text-slate-300">Maintains cervical spine mobility with laminoplasty</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Precise Surgery</h4>
                      <p className="text-slate-300">Microsurgical techniques for optimal outcomes</p>
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
                    <p>Posterior cervical approach</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>2-4 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>6-12 weeks for full recovery</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                    <p className="text-slate-300">Significant neurological improvement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Relieve Spinal Compression</h4>
                  <p className="mb-4 text-cyan-100">Expert cervical decompression surgery</p>
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

export default CervicalLaminectomy;
