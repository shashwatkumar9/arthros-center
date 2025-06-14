
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RotatorCuffRepair = () => {
  return (
    <>
      <title>Rotator Cuff Repair Surgery in Patna, India | Arthroscopic Shoulder Surgery | Arthros Center</title>
      <meta name="description" content="Expert rotator cuff repair surgery in Patna, India. Advanced arthroscopic techniques for rotator cuff tears. Minimal invasive shoulder surgery by orthopedic specialists." />
      <meta name="keywords" content="rotator cuff repair Patna, shoulder surgery India, arthroscopic rotator cuff surgery, rotator cuff tear treatment Patna, shoulder arthroscopy India" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Rotator Cuff Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced arthroscopic rotator cuff repair surgery for complete restoration of shoulder function. 
              Expert treatment for rotator cuff tears using minimally invasive techniques.
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
                <CardTitle className="text-white text-2xl">What is Rotator Cuff Repair?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Rotator cuff repair is a surgical procedure to fix torn tendons in the shoulder. The rotator cuff is a group of four muscles and tendons that stabilize the shoulder joint and allow for a wide range of motion.
                </p>
                <p>
                  Our arthroscopic approach uses small incisions and specialized cameras to repair the torn tendons, resulting in less pain, reduced scarring, and faster recovery compared to traditional open surgery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Surgical Technique</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Arthroscopic visualization of the rotator cuff</li>
                  <li>Debridement of damaged tissue</li>
                  <li>Anchor placement in the humeral head</li>
                  <li>Tendon reattachment using high-strength sutures</li>
                  <li>Subacromial decompression if needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Treatment Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Diagnosis</h3>
                <p className="text-slate-300">Comprehensive evaluation including MRI and physical examination</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Surgery</h3>
                <p className="text-slate-300">Arthroscopic repair using advanced techniques and materials</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Recovery</h3>
                <p className="text-slate-300">Structured rehabilitation program for optimal healing</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Indications</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>Full-thickness rotator cuff tears</li>
                  <li>Partial-thickness tears causing symptoms</li>
                  <li>Failed conservative treatment</li>
                  <li>Acute traumatic tears</li>
                  <li>Functional limitations in daily activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Benefits</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>Restored shoulder strength and function</li>
                  <li>Pain relief and improved quality of life</li>
                  <li>Return to sports and activities</li>
                  <li>Prevention of further degeneration</li>
                  <li>Minimally invasive approach</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Restore Your Shoulder Function?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a consultation with our shoulder specialists to discuss your rotator cuff repair options.
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

export default RotatorCuffRepair;
