
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GolfersElbowTreatment = () => {
  return (
    <>
      <title>Golfer's Elbow Treatment in Patna, India | Medial Epicondylitis Surgery | Arthros Center</title>
      <meta name="description" content="Expert golfer's elbow treatment in Patna, India. Advanced surgical and non-surgical treatment for medial epicondylitis with excellent outcomes." />
      <meta name="keywords" content="golfers elbow treatment Patna, medial epicondylitis surgery India, elbow tendon repair, golfers elbow arthroscopy Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Golfer's Elbow Treatment in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive treatment for golfer's elbow (medial epicondylitis) using both conservative 
              and surgical approaches. Expert care for chronic medial elbow pain and dysfunction.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Understanding Golfer's Elbow</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Golfer's elbow (medial epicondylitis) is a condition that causes pain on the inner side 
                  of your elbow, where the tendons of your forearm muscles attach to the bony bump.
                </p>
                <p>
                  Despite its name, this condition affects many people who don't play golf. It's common in 
                  activities that involve repeated wrist flexion and gripping motions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Treatment Options</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Rest and activity modification</li>
                  <li>Physical therapy</li>
                  <li>Steroid injections</li>
                  <li>PRP (Platelet-Rich Plasma) therapy</li>
                  <li>Surgical debridement and repair</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Conservative vs Surgical Treatment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Conservative Treatment</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• 90% success rate with conservative care</li>
                  <li>• Physical therapy and exercises</li>
                  <li>• Anti-inflammatory medications</li>
                  <li>• Bracing and activity modification</li>
                  <li>• Injection therapies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Surgical Indications</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Failed conservative treatment (6-12 months)</li>
                  <li>• Severe functional limitations</li>
                  <li>• Chronic pain affecting daily activities</li>
                  <li>• MRI showing significant tendon degeneration</li>
                  <li>• Patient preference for definitive treatment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Expert Golfer's Elbow Care</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get comprehensive treatment for medial elbow pain with our specialized expertise.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default GolfersElbowTreatment;
