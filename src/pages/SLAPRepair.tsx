
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const SLAPRepair = () => {
  return (
    <>
      <title>SLAP Repair Surgery in Patna | Superior Labral Tear Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert SLAP repair surgery in Patna by Dr. Gurudeo Kumar. Advanced arthroscopic treatment for superior labral tears. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="SLAP repair Patna, superior labral tear surgery India, arthroscopic SLAP repair, Dr Gurudeo Kumar shoulder specialist, labral repair Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SLAP Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert SLAP (Superior Labrum Anterior-Posterior) repair surgery by Dr. Gurudeo Kumar. Advanced arthroscopic 
              treatment for superior labral tears and biceps anchor injuries.
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
              alt="SLAP repair surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Specialized SLAP Repair for Labral Tears</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    SLAP (Superior Labrum Anterior-Posterior) tears involve the top portion of the shoulder's labral 
                    cartilage and the attachment point of the biceps tendon. These injuries are common in overhead athletes 
                    and can cause significant pain and functional limitations. At Arthros Center in Patna, Dr. Gurudeo Kumar 
                    specializes in arthroscopic SLAP repair, providing precise treatment for these complex injuries for 
                    patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The arthroscopic SLAP repair involves reattaching the torn labrum and biceps anchor to the glenoid bone 
                    using specialized suture anchors. This minimally invasive approach allows for precise visualization and 
                    repair of the tear while preserving surrounding healthy tissue. Our technique focuses on restoring 
                    normal shoulder biomechanics and enabling return to overhead activities and sports participation with 
                    confidence and optimal function.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Arthroscopic SLAP Repair</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Precise Repair</h4>
                      <p className="text-slate-300">High-definition arthroscopy enables accurate tear assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Overhead Activity Return</h4>
                      <p className="text-slate-300">Restores ability for overhead sports and activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Biceps Function</h4>
                      <p className="text-slate-300">Preserves normal biceps tendon function and strength</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimally Invasive</h4>
                      <p className="text-slate-300">Small incisions with faster recovery and less scarring</p>
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
                    <p>General anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>Same day discharge</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>4-6 months return to sports</p>
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
                    <p className="text-slate-300">Good to excellent outcomes with return to activities</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Expert SLAP Repair</h4>
                  <p className="mb-4 text-cyan-100">Specialized treatment for superior labral tears</p>
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

export default SLAPRepair;
