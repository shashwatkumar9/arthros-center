
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TennisElbowSurgery = () => {
  return (
    <>
      <title>Tennis Elbow Surgery in Patna, India | Lateral Epicondylitis Treatment | Arthros Center</title>
      <meta name="description" content="Advanced tennis elbow surgery in Patna, India. Minimally invasive treatment for lateral epicondylitis with excellent surgical outcomes." />
      <meta name="keywords" content="tennis elbow surgery Patna, lateral epicondylitis treatment India, elbow tendon repair, tennis elbow arthroscopy Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tennis Elbow Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced surgical treatment for tennis elbow (lateral epicondylitis) using minimally invasive 
              techniques. Expert care for chronic elbow pain and dysfunction.
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
                <CardTitle className="text-white text-2xl">Understanding Tennis Elbow</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Tennis elbow (lateral epicondylitis) is a painful condition caused by overuse of the elbow. 
                  It occurs when tendons in your elbow are overloaded, usually by repetitive motions of the wrist and arm.
                </p>
                <p>
                  Despite its name, tennis elbow affects many people who don't play tennis. It's common in 
                  people whose jobs feature repetitive arm motions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Surgical Options</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Open surgical repair</li>
                  <li>Arthroscopic debridement</li>
                  <li>Percutaneous tenotomy</li>
                  <li>Platelet-rich plasma (PRP) injection</li>
                  <li>Tendon transfer procedures</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Surgical Indications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">When Surgery is Needed</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Failed conservative treatment (6-12 months)</li>
                  <li>• Persistent pain affecting daily activities</li>
                  <li>• Significant functional limitations</li>
                  <li>• MRI showing tendon degeneration</li>
                  <li>• Patient motivation for surgery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Expected Outcomes</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• 85-95% success rate</li>
                  <li>• Significant pain reduction</li>
                  <li>• Improved grip strength</li>
                  <li>• Return to activities</li>
                  <li>• High patient satisfaction</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Expert Tennis Elbow Treatment</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get relief from chronic elbow pain with our specialized surgical expertise.
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

export default TennisElbowSurgery;
