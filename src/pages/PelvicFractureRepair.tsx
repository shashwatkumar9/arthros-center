
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const PelvicFractureRepair = () => {
  return (
    <>
      <title>Pelvic Fracture Repair Surgery in Patna | Complex Pelvic Fracture India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert pelvic fracture repair surgery in Patna by Dr. Gurudeo Kumar. Advanced fixation for complex pelvic fractures. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="pelvic fracture repair Patna, pelvic fracture surgery India, complex pelvic fracture, Dr Gurudeo Kumar trauma surgeon, pelvic fracture Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pelvic Fracture Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert pelvic fracture repair surgery by Dr. Gurudeo Kumar using advanced fixation techniques. 
              Comprehensive treatment for complex pelvic fractures with optimal healing and stability.
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
              alt="Pelvic fracture repair surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Pelvic Fracture Repair</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Pelvic fractures are among the most challenging injuries in orthopedic trauma, requiring specialized 
                    expertise and advanced surgical techniques. At Arthros Center in Patna, Dr. Gurudeo Kumar provides 
                    comprehensive treatment for complex pelvic fractures, utilizing state-of-the-art fixation methods 
                    and multidisciplinary care to achieve optimal outcomes for patients from Bihar, Bengal, North East 
                    India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Treatment approaches vary based on fracture pattern, stability, and associated injuries. Dr. Gurudeo 
                    Kumar employs both minimally invasive percutaneous techniques and open reduction with internal 
                    fixation using plates, screws, and external fixators. The goal is to restore pelvic ring stability, 
                    maintain normal anatomy, and enable early mobilization while minimizing complications and promoting 
                    optimal healing.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Specialized Pelvic Trauma Care</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Advanced Fixation</h4>
                      <p className="text-slate-300">Modern implants for stable fracture reconstruction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Early Mobilization</h4>
                      <p className="text-slate-300">Techniques allowing faster return to function</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Multidisciplinary Care</h4>
                      <p className="text-slate-300">Comprehensive team approach for complex cases</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimally Invasive</h4>
                      <p className="text-slate-300">Percutaneous techniques when appropriate</p>
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
                    <p>2-6 hours depending on complexity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>General anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>5-14 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>3-6 months full weight bearing</p>
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
                    <p className="text-slate-300">Good to excellent functional outcomes</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Expert Trauma Care</h4>
                  <p className="mb-4 text-cyan-100">Specialized pelvic fracture reconstruction</p>
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

export default PelvicFractureRepair;
