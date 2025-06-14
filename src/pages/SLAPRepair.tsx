
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SLAPRepair = () => {
  return (
    <>
      <title>SLAP Repair Surgery in Patna, India | Superior Labrum Repair | Arthros Center</title>
      <meta name="description" content="Arthroscopic SLAP repair surgery in Patna, India. Expert treatment for superior labrum anterior-posterior tears with advanced surgical techniques." />
      <meta name="keywords" content="SLAP repair Patna, superior labrum repair India, arthroscopic SLAP surgery, shoulder labrum tear treatment Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SLAP Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced arthroscopic SLAP repair for superior labrum anterior-posterior tears. 
              Expert treatment for complex shoulder labrum injuries with minimally invasive techniques.
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
                <CardTitle className="text-white text-2xl">What is a SLAP Tear?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  SLAP stands for Superior Labrum Anterior-Posterior. It's a tear in the upper (superior) part 
                  of the labrum that extends from front (anterior) to back (posterior).
                </p>
                <p>
                  This injury often involves the biceps tendon attachment and can cause pain, weakness, 
                  and catching sensations in the shoulder, especially with overhead activities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">SLAP Tear Classification</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Type I:</strong> Fraying of superior labrum</li>
                  <li><strong>Type II:</strong> Detachment of labrum and biceps</li>
                  <li><strong>Type III:</strong> Bucket-handle tear</li>
                  <li><strong>Type IV:</strong> Extends into biceps tendon</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Treatment Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">SLAP Repair</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Reattachment of torn labrum to glenoid using suture anchors.
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Type II SLAP tears</li>
                  <li>• Young active patients</li>
                  <li>• Overhead athletes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Biceps Tenodesis</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Transfer of biceps tendon to humeral head with labrum debridement.
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Older patients (>40 years)</li>
                  <li>• Failed SLAP repair</li>
                  <li>• Degenerative tears</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Debridement</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Removal of loose or frayed labral tissue.
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Type I SLAP tears</li>
                  <li>• Partial Type III tears</li>
                  <li>• Minimal symptoms</li>
                </ul>
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
                  <li>Confirmed SLAP tear on MRI</li>
                  <li>Failed conservative treatment</li>
                  <li>Persistent pain and dysfunction</li>
                  <li>Positive clinical tests</li>
                  <li>Overhead sport participation</li>
                  <li>Mechanical symptoms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Surgical Technique</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>Arthroscopic approach</li>
                  <li>Portal placement for visualization</li>
                  <li>Labral mobilization</li>
                  <li>Bone preparation</li>
                  <li>Suture anchor placement</li>
                  <li>Labral reattachment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Expert SLAP Repair Surgery</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get back to your overhead activities with our specialized SLAP repair expertise.
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

export default SLAPRepair;
