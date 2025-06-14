
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const RotatorCuffReconstruction = () => {
  return (
    <>
      <title>Rotator Cuff Reconstruction Surgery in Patna | Advanced Shoulder Reconstruction India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert rotator cuff reconstruction surgery in Patna by Dr. Gurudeo Kumar. Advanced reconstruction for irreparable rotator cuff tears. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="rotator cuff reconstruction Patna, shoulder reconstruction surgery India, irreparable rotator cuff tear, Dr Gurudeo Kumar reconstruction specialist Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Rotator Cuff Reconstruction in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced rotator cuff reconstruction surgery by Dr. Gurudeo Kumar for irreparable tears. Innovative techniques 
              including tendon transfers and biological reconstruction to restore shoulder function.
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
              alt="Rotator cuff reconstruction surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Rotator Cuff Reconstruction</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    When rotator cuff tears are deemed irreparable due to massive size, chronic retraction, or poor tissue 
                    quality, rotator cuff reconstruction offers hope for restoring shoulder function. At Arthros Center in 
                    Patna, Dr. Gurudeo Kumar specializes in advanced reconstruction techniques including superior capsular 
                    reconstruction, tendon transfers, and biological augmentation, providing innovative solutions for patients 
                    from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Rotator cuff reconstruction involves using alternative tissues to restore the biomechanical function 
                    of the native rotator cuff. Our comprehensive approach includes detailed pre-operative planning with 
                    advanced imaging, careful selection of reconstruction technique based on individual patient factors, 
                    and structured rehabilitation protocols to optimize outcomes. These procedures can significantly improve 
                    pain, function, and quality of life even in the most challenging cases.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Innovative Reconstruction Techniques</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Superior Capsular Reconstruction</h4>
                      <p className="text-slate-300">Using grafts to restore superior shoulder stability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Latissimus Dorsi Transfer</h4>
                      <p className="text-slate-300">Tendon transfer to restore external rotation function</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Biological Augmentation</h4>
                      <p className="text-slate-300">Advanced grafts and scaffolds to enhance healing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Personalized Approach</h4>
                      <p className="text-slate-300">Tailored reconstruction based on individual tear patterns</p>
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
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>General anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>2-3 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>9-18 months full recovery</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
                    <p className="text-slate-300">Significant pain relief and functional improvement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Innovative Reconstruction Solutions</h4>
                  <p className="mb-4 text-cyan-100">Advanced techniques for irreparable rotator cuff tears</p>
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

export default RotatorCuffReconstruction;
