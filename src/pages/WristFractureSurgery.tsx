
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const WristFractureSurgery = () => {
  return (
    <>
      <title>Wrist Fracture Surgery in Patna | Distal Radius Fracture Fixation India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert wrist fracture surgery in Patna by Dr. Gurudeo Kumar. Advanced fixation techniques for distal radius, scaphoid, and ulnar fractures. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="wrist fracture surgery Patna, distal radius fracture India, scaphoid fracture surgery, Dr Gurudeo Kumar wrist trauma, wrist bone surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Wrist Fracture Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Expert wrist fracture surgery by Dr. Gurudeo Kumar. Advanced fixation techniques for 
              distal radius, scaphoid, and ulnar fractures ensuring optimal healing and function.
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
              alt="Wrist fracture surgery being performed in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Wrist Fracture Fixation</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Wrist fractures, particularly distal radius fractures, are among the most common 
                    orthopedic injuries requiring surgical treatment. These injuries can significantly 
                    impact wrist function if not properly treated. At Arthros Center in Patna, Dr. Gurudeo 
                    Kumar specializes in advanced wrist fracture surgery, serving patients from Bihar, 
                    Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our wrist fracture surgery program utilizes the latest fixation techniques including 
                    volar plating, external fixation, and arthroscopic-assisted reduction to achieve 
                    anatomical alignment and restore optimal wrist function while minimizing complications.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Wrist Fracture Fixation Methods</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Volar Plating</h4>
                      <p className="text-slate-300">Low-profile plates for stable fixation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">External Fixation</h4>
                      <p className="text-slate-300">Bridging fixation for complex fractures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Screw Fixation</h4>
                      <p className="text-slate-300">Percutaneous screws for simple fractures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Arthroscopic Assist</h4>
                      <p className="text-slate-300">Minimally invasive reduction techniques</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Surgery Details</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Procedure Time</h4>
                    <p>60-120 minutes per fracture</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Anesthesia</h4>
                    <p>Regional or general anesthesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Healing Time</h4>
                    <p>6-12 weeks for bone union</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Union Rate</h4>
                    <p>95% successful fracture healing</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Function Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
                    <p className="text-slate-300">Return to pre-injury function</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Expert Fracture Care</h4>
                  <p className="mb-4 text-cyan-100">Advanced wrist fracture surgery</p>
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

export default WristFractureSurgery;
