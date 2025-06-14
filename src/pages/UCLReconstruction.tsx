
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UCLReconstruction = () => {
  return (
    <>
      <title>UCL Reconstruction in Patna, India | Tommy John Surgery | Arthros Center</title>
      <meta name="description" content="Expert UCL reconstruction (Tommy John surgery) in Patna, India. Advanced elbow ligament reconstruction for athletes and throwing sports injuries." />
      <meta name="keywords" content="UCL reconstruction Patna, Tommy John surgery India, elbow ligament surgery, throwing injuries treatment Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              UCL Reconstruction in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Expert UCL reconstruction (Tommy John surgery) for throwing athletes and elbow ligament injuries. 
              Advanced surgical techniques for optimal return to high-level athletic performance.
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
                <CardTitle className="text-white text-2xl">What is UCL Reconstruction?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  UCL reconstruction, commonly known as Tommy John surgery, is a procedure to replace 
                  the torn ulnar collateral ligament (UCL) in the elbow with a tendon graft.
                </p>
                <p>
                  This surgery is most commonly performed on throwing athletes, particularly baseball 
                  pitchers, who have injured their UCL due to repetitive overhead throwing motions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Surgical Technique</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Graft harvesting (palmaris longus or gracilis)</li>
                  <li>Bone tunnel drilling in humerus and ulna</li>
                  <li>Graft passage and tensioning</li>
                  <li>Secure graft fixation</li>
                  <li>Ulnar nerve evaluation and transposition</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Recovery Timeline</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1-6</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Weeks 1-6</h3>
                <p className="text-slate-300 text-sm">Immobilization and protection</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">6-12</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Weeks 6-12</h3>
                <p className="text-slate-300 text-sm">Range of motion exercises</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3-6</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Months 3-6</h3>
                <p className="text-slate-300 text-sm">Strengthening program</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">12+</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Month 12+</h3>
                <p className="text-slate-300 text-sm">Return to throwing/sports</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Surgical Indications</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>Complete UCL tear in throwing athletes</li>
                  <li>Failed conservative treatment</li>
                  <li>Desire to return to throwing sports</li>
                  <li>Chronic UCL insufficiency</li>
                  <li>Recurrent elbow instability</li>
                  <li>High-level athletic participation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Success Rates</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>85-95% return to previous level of play</li>
                  <li>90% good to excellent outcomes</li>
                  <li>Low complication rate (&lt;5%)</li>
                  <li>Durable long-term results</li>
                  <li>High athlete satisfaction</li>
                  <li>Improved throwing velocity possible</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Expert UCL Reconstruction</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get back to throwing with our specialized expertise in UCL reconstruction surgery.
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

export default UCLReconstruction;
