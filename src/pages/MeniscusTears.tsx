
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const MeniscusTears = () => {
  return (
    <>
      <title>Meniscus Tear Treatment in Patna | Sports Medicine Meniscus Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert meniscus tear treatment in Patna by Dr. Gurudeo Kumar. Advanced arthroscopic meniscus repair and sports medicine care. Serving Bihar, Bengal, North East, Nepal." />
      <meta name="keywords" content="meniscus tear Patna, meniscus surgery India, sports medicine knee, Dr Gurudeo Kumar, arthroscopic meniscus repair Bihar" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meniscus Tear Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced meniscus tear treatment and sports medicine care by Dr. Gurudeo Kumar. 
              Minimally invasive arthroscopic techniques for optimal knee function restoration.
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
              alt="Meniscus tear treatment and arthroscopic surgery in Patna by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Meniscus Tear Management</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Meniscus tears are common knee injuries that can significantly impact athletic performance and daily 
                    activities. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in comprehensive meniscus tear 
                    evaluation and treatment using advanced arthroscopic techniques, serving athletes and patients from 
                    Bihar, Bengal, North East India, and Nepal.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our approach prioritizes meniscus preservation whenever possible through repair techniques, while 
                    utilizing precise trimming for tears that cannot be repaired. We employ the latest arthroscopic 
                    technology for minimally invasive treatment, resulting in faster recovery times and better long-term 
                    knee health outcomes for our patients.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Meniscus Treatment Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Meniscus Repair</h4>
                      <p className="text-slate-300">Arthroscopic repair for tears in the vascular zone</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Partial Meniscectomy</h4>
                      <p className="text-slate-300">Minimal tissue removal for degenerative tears</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Root Repair</h4>
                      <p className="text-slate-300">Specialized repair for meniscus root tears</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Rehabilitation</h4>
                      <p className="text-slate-300">Sport-specific return to activity programs</p>
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
                    <h4 className="font-semibold text-cyan-400">Surgery Type</h4>
                    <p>Arthroscopic minimally invasive</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Duration</h4>
                    <p>30-60 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Recovery</h4>
                    <p>2-6 weeks depending on repair</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Return to Sport</h4>
                    <p>3-6 months for competitive sports</p>
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
                    <p className="text-slate-300">Successful symptom relief</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-600 text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Restore Knee Function</h4>
                  <p className="mb-4 text-cyan-100">Expert meniscus tear treatment</p>
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

export default MeniscusTears;
