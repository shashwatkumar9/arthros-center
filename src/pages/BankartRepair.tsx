
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BankartRepair = () => {
  return (
    <>
      <title>Bankart Repair Surgery in Patna, India | Shoulder Instability Treatment | Arthros Center</title>
      <meta name="description" content="Arthroscopic Bankart repair surgery in Patna, India. Expert treatment for shoulder instability and recurrent dislocations with minimally invasive techniques." />
      <meta name="keywords" content="Bankart repair Patna, shoulder instability surgery India, arthroscopic Bankart repair, shoulder dislocation treatment Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bankart Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced arthroscopic Bankart repair for shoulder instability and recurrent dislocations. 
              Restore shoulder stability with minimally invasive surgical techniques.
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
                <CardTitle className="text-white text-2xl">What is a Bankart Lesion?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  A Bankart lesion is a tear of the labrum (cartilage rim) from the front edge of the shoulder socket. 
                  This injury commonly occurs during shoulder dislocations and leads to shoulder instability.
                </p>
                <p>
                  The Bankart repair procedure reattaches the torn labrum to the bone using special anchors, 
                  restoring the stability of the shoulder joint.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Arthroscopic Technique</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Minimally invasive keyhole surgery</li>
                  <li>Multiple small incisions (portals)</li>
                  <li>High-definition camera visualization</li>
                  <li>Suture anchor fixation</li>
                  <li>Capsular shift if needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Surgical Procedure Steps</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-cyan-400 font-semibold mb-2">Portal Creation</h3>
                <p className="text-slate-300 text-sm">Small incisions for camera and instruments</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-cyan-400 font-semibold mb-2">Labrum Preparation</h3>
                <p className="text-slate-300 text-sm">Mobilization and preparation of torn labrum</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-cyan-400 font-semibold mb-2">Anchor Placement</h3>
                <p className="text-slate-300 text-sm">Suture anchors placed in glenoid bone</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-cyan-400 font-semibold mb-2">Labrum Repair</h3>
                <p className="text-slate-300 text-sm">Reattachment of labrum to restore stability</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Indications</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Recurrent anterior shoulder dislocation</li>
                  <li>Bankart lesion on MRI</li>
                  <li>Failed conservative treatment</li>
                  <li>Young active patients</li>
                  <li>Athletes requiring stability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Advantages</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Minimal scarring</li>
                  <li>Less post-operative pain</li>
                  <li>Faster recovery</li>
                  <li>Lower infection risk</li>
                  <li>Excellent visualization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Recovery Timeline</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>0-4 weeks: Sling immobilization</li>
                  <li>4-8 weeks: Gentle range of motion</li>
                  <li>2-4 months: Strengthening phase</li>
                  <li>4-6 months: Return to sports</li>
                  <li>Full recovery: 6-8 months</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Success Rates</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Arthroscopic Bankart repair has excellent success rates:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>95% stability restoration rate</li>
                  <li>90% return to previous activity level</li>
                  <li>Low recurrence rate (2-5%)</li>
                  <li>High patient satisfaction</li>
                  <li>Minimal complications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Post-Operative Care</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Structured rehabilitation program</li>
                  <li>Gradual return to activities</li>
                  <li>Regular follow-up appointments</li>
                  <li>Activity modification guidelines</li>
                  <li>Long-term monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Restore Your Shoulder Stability</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get back to your active lifestyle with our expert Bankart repair surgery.
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

export default BankartRepair;
