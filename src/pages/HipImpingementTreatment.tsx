
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const HipImpingementTreatment = () => {
  return (
    <>
      <title>Hip Impingement Treatment in Patna | Hip Impingement Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert hip impingement treatment in Patna by Dr. Gurudeo Kumar. Comprehensive treatment for hip impingement syndrome. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="hip impingement treatment Patna, hip impingement surgery India, FAI treatment, Dr Gurudeo Kumar hip specialist, hip impingement Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hip Impingement Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive hip impingement treatment by Dr. Gurudeo Kumar. Advanced arthroscopic and open 
              surgical techniques to address all types of hip impingement syndrome.
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
              alt="Hip impingement treatment being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Hip Impingement Treatment</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Hip impingement syndrome occurs when there is abnormal contact between the hip ball and socket 
                    during movement, causing pain and limiting range of motion. At Arthros Center in Patna, Dr. Gurudeo 
                    Kumar provides comprehensive treatment for all types of hip impingement, from conservative management 
                    to advanced surgical intervention, serving patients from Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Treatment approach is individualized based on the type and severity of impingement, patient age, 
                    activity level, and response to conservative measures. Dr. Gurudeo Kumar employs both arthroscopic 
                    and open surgical techniques, including osteoplasty, labral repair, and capsular management to 
                    address the underlying pathology and restore normal hip mechanics while preventing progression 
                    to arthritis.
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
                      <p className="text-slate-300">Physical therapy, activity modification, injections</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Arthroscopic Surgery</h4>
                      <p className="text-slate-300">Minimally invasive impingement correction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Open Surgery</h4>
                      <p className="text-slate-300">Complex cases requiring extensive reconstruction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Personalized Plan</h4>
                      <p className="text-slate-300">Individualized treatment based on specific needs</p>
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
                    <h4 className="font-semibold text-cyan-400">Assessment</h4>
                    <p>Comprehensive clinical and imaging evaluation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Conservative Trial</h4>
                    <p>3-6 months non-surgical treatment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Surgery Duration</h4>
                    <p>1-3 hours depending on complexity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>3-6 months return to full activity</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">87%</div>
                    <p className="text-slate-300">Significant improvement with appropriate treatment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">End Hip Pain</h4>
                  <p className="mb-4 text-cyan-100">Comprehensive impingement treatment options</p>
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

export default HipImpingementTreatment;
