
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const GolfersElbowTreatment = () => {
  return (
    <>
      <title>Golfer's Elbow Treatment in Patna | Medial Epicondylitis Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert golfer's elbow treatment in Patna by Dr. Gurudeo Kumar. Advanced surgical and non-surgical treatment for medial epicondylitis. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="golfers elbow treatment Patna, medial epicondylitis surgery India, elbow pain treatment, Dr Gurudeo Kumar elbow specialist, golfers elbow surgery Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Golfer's Elbow Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive golfer's elbow treatment by Dr. Gurudeo Kumar. Advanced surgical and non-surgical options 
              for medial epicondylitis with excellent outcomes and rapid recovery.
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
              alt="Golfer's elbow treatment being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Golfer's Elbow Treatment</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Golfer's elbow (medial epicondylitis) affects the tendons on the inner side of the elbow, causing pain 
                    and tenderness that can significantly impact daily activities and sports performance. At Arthros Center 
                    in Patna, Dr. Gurudeo Kumar provides comprehensive treatment options ranging from conservative management 
                    to advanced surgical techniques, ensuring optimal outcomes for patients from Bihar, Bengal, North East 
                    India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our treatment approach begins with thorough evaluation and conservative management including physical 
                    therapy, anti-inflammatory medications, and activity modification. When conservative measures fail, 
                    surgical intervention becomes necessary. Dr. Gurudeo Kumar employs minimally invasive techniques to 
                    remove damaged tissue and promote healing, resulting in significant pain relief and restoration of 
                    normal elbow function with minimal disruption to surrounding healthy tissues.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Treatment Options for Golfer's Elbow</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Conservative Treatment</h4>
                      <p className="text-slate-300">Physical therapy, injections, and activity modification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Minimally Invasive Surgery</h4>
                      <p className="text-slate-300">Arthroscopic or open techniques for resistant cases</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Rapid Recovery</h4>
                      <p className="text-slate-300">Quick return to work and recreational activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Long-term Relief</h4>
                      <p className="text-slate-300">Durable pain relief and functional restoration</p>
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
                    <h4 className="font-semibold text-cyan-400">Conservative Phase</h4>
                    <p>6-12 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Surgery Duration</h4>
                    <p>30-45 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Hospital Stay</h4>
                    <p>Same day discharge</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>4-8 weeks full recovery</p>
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
                    <p className="text-slate-300">Excellent pain relief and return to activities</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Comprehensive Elbow Care</h4>
                  <p className="mb-4 text-cyan-100">Expert treatment for lasting golfer's elbow relief</p>
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

export default GolfersElbowTreatment;
