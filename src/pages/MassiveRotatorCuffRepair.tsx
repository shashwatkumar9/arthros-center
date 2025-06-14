
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MassiveRotatorCuffRepair = () => {
  return (
    <>
      <title>Massive Rotator Cuff Repair Surgery in Patna, India | Complex Shoulder Reconstruction | Arthros Center</title>
      <meta name="description" content="Advanced massive rotator cuff repair surgery in Patna, India. Expert treatment for large rotator cuff tears with superior capsule reconstruction and patch grafts." />
      <meta name="keywords" content="massive rotator cuff repair Patna, large rotator cuff tear surgery India, superior capsule reconstruction, patch graft shoulder surgery Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Massive Rotator Cuff Repair in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Specialized treatment for massive rotator cuff tears using advanced reconstruction techniques including 
              superior capsule reconstruction and biological augmentation.
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
                <CardTitle className="text-white text-2xl">What is Massive Rotator Cuff Repair?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Massive rotator cuff tears involve multiple tendons and typically measure more than 5cm in size. These complex injuries require specialized surgical techniques beyond conventional repair methods.
                </p>
                <p>
                  Our approach includes superior capsule reconstruction, patch grafts, and tendon transfers to restore shoulder function when primary repair is not possible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Advanced Techniques</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Superior Capsule Reconstruction (SCR)</li>
                  <li>Biodegradable patch augmentation</li>
                  <li>Latissimus dorsi tendon transfer</li>
                  <li>Pectoralis major tendon transfer</li>
                  <li>Balloon spacer implantation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Superior Capsule Reconstruction</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Procedure Benefits</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Restores superior shoulder stability</li>
                  <li>• Prevents humeral head migration</li>
                  <li>• Improves active range of motion</li>
                  <li>• Reduces pain and dysfunction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Graft Options</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Fascia lata autograft</li>
                  <li>• Dermal allograft</li>
                  <li>• Acellular dermal matrix</li>
                  <li>• Synthetic patch materials</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Patient Selection</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Massive irreparable rotator cuff tears</li>
                  <li>Pseudoparalysis of shoulder</li>
                  <li>Failed previous rotator cuff repair</li>
                  <li>Good bone quality</li>
                  <li>Adequate deltoid function</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Surgical Approach</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Arthroscopic or open technique</li>
                  <li>Graft harvesting</li>
                  <li>Anchor placement</li>
                  <li>Graft tensioning</li>
                  <li>Subacromial decompression</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Recovery Timeline</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>0-6 weeks: Immobilization</li>
                  <li>6-12 weeks: Passive motion</li>
                  <li>3-6 months: Active motion</li>
                  <li>6-12 months: Strengthening</li>
                  <li>12+ months: Full activity</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Complex Shoulder Reconstruction Expertise</h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team specializes in the most challenging rotator cuff cases with proven surgical outcomes.
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

export default MassiveRotatorCuffRepair;
