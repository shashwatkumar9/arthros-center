
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LatarjetProcedure = () => {
  return (
    <>
      <title>Latarjet Procedure in Patna, India | Coracoid Transfer Surgery | Arthros Center</title>
      <meta name="description" content="Expert Latarjet procedure for recurrent shoulder dislocation in Patna, India. Advanced coracoid transfer surgery for shoulder instability with bone loss." />
      <meta name="keywords" content="Latarjet procedure Patna, coracoid transfer surgery India, shoulder instability bone loss treatment, recurrent shoulder dislocation surgery Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latarjet Procedure in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced Latarjet procedure for recurrent shoulder instability with bone loss. 
              Expert coracoid transfer surgery to restore shoulder stability and prevent future dislocations.
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
                <CardTitle className="text-white text-2xl">What is the Latarjet Procedure?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  The Latarjet procedure is a surgical technique that transfers the coracoid process to the front edge 
                  of the shoulder socket (glenoid) to treat recurrent shoulder instability with bone loss.
                </p>
                <p>
                  This procedure provides both bone reconstruction and a muscular sling effect from the 
                  transferred muscles, making it highly effective for complex shoulder instability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Surgical Technique</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Coracoid process osteotomy</li>
                  <li>Glenoid bone preparation</li>
                  <li>Coracoid positioning and fixation</li>
                  <li>Capsule and labrum repair</li>
                  <li>Muscle reattachment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Indications for Latarjet Procedure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Primary Indications</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Recurrent anterior shoulder instability</li>
                  <li>• Significant glenoid bone loss (&gt;20%)</li>
                  <li>• Failed arthroscopic Bankart repair</li>
                  <li>• Contact athletes with instability</li>
                  <li>• Bipolar bone loss (Hill-Sachs + glenoid)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Patient Factors</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Young active patients</li>
                  <li>• High-demand athletes</li>
                  <li>• Military personnel</li>
                  <li>• Overhead sport participation</li>
                  <li>• Revision instability surgery</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Advantages</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Bone block effect</li>
                  <li>Muscular sling mechanism</li>
                  <li>Low recurrence rate (1-3%)</li>
                  <li>Excellent stability</li>
                  <li>Good functional outcomes</li>
                  <li>Proven long-term results</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Considerations</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Open surgical approach</li>
                  <li>Risk of bone nonunion</li>
                  <li>Potential nerve injury</li>
                  <li>Possible external rotation loss</li>
                  <li>Hardware complications</li>
                  <li>Revision complexity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Recovery</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>0-6 weeks: Sling protection</li>
                  <li>6-12 weeks: Range of motion</li>
                  <li>3-4 months: Strengthening</li>
                  <li>6 months: Return to sports</li>
                  <li>Bone healing: 3-6 months</li>
                  <li>Full recovery: 6-9 months</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Surgical Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  The Latarjet procedure has excellent success rates:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>97-99% stability rate</li>
                  <li>Low recurrence rate (1-3%)</li>
                  <li>High return to sports rate</li>
                  <li>Good functional shoulder scores</li>
                  <li>High patient satisfaction</li>
                  <li>Durable long-term results</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Alternative Procedures</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Eden-Hybinette procedure</li>
                  <li>Bone block procedures</li>
                  <li>Allograft reconstruction</li>
                  <li>Remplissage procedure</li>
                  <li>Revision arthroscopic repair</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Expert Latarjet Surgery</h2>
            <p className="text-xl text-slate-300 mb-8">
              Restore your shoulder stability with our proven expertise in complex instability procedures.
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

export default LatarjetProcedure;
