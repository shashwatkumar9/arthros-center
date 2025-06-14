
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SpineSurgery = () => {
  const procedures = [
    {
      title: "Cervical Disc Replacement",
      description: "Advanced cervical disc replacement surgery in Patna for neck pain",
      slug: "cervical-disc-replacement"
    },
    {
      title: "Cervical Fusion",
      description: "Anterior and posterior cervical fusion procedures",
      slug: "cervical-fusion"
    },
    {
      title: "Cervical Laminectomy",
      description: "Minimally invasive cervical laminectomy for nerve compression",
      slug: "cervical-laminectomy"
    },
    {
      title: "Lumbar Fusion",
      description: "Advanced lumbar fusion techniques for back pain",
      slug: "lumbar-fusion"
    },
    {
      title: "Disc Replacement",
      description: "Artificial disc replacement for lumbar spine",
      slug: "disc-replacement"
    },
    {
      title: "Microdiscectomy",
      description: "Minimally invasive microdiscectomy for herniated discs",
      slug: "microdiscectomy"
    },
    {
      title: "Spinal Stenosis Surgery",
      description: "Comprehensive treatment for spinal stenosis",
      slug: "spinal-stenosis-surgery"
    },
    {
      title: "Endoscopic Spine Surgery",
      description: "Ultra-minimally invasive endoscopic spine procedures",
      slug: "endoscopic-spine-surgery"
    },
    {
      title: "Percutaneous Procedures",
      description: "Minimally invasive percutaneous spine treatments",
      slug: "percutaneous-procedures"
    }
  ];

  return (
    <>
      <title>Spine Surgery in Patna, India | Disc Replacement | Back Pain Treatment | Arthros Center</title>
      <meta name="description" content="Expert spine surgery in Patna, India. Disc replacement, spinal fusion, minimally invasive spine surgery by experienced neurosurgeons and orthopedic surgeons." />
      <meta name="keywords" content="spine surgery Patna, disc replacement India, back pain treatment Patna, spinal fusion India, minimally invasive spine surgery Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Spine Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced spine surgery including disc replacement, spinal fusion, and minimally invasive procedures 
              for back and neck pain by expert spine surgeons in Patna.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {procedures.map((procedure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{procedure.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {procedure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Spine Care in Patna</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive</h3>
                <p className="text-slate-300">
                  State-of-the-art minimally invasive spine surgery techniques for faster recovery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Technology</h3>
                <p className="text-slate-300">
                  Latest surgical navigation and imaging technology for precise procedures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Pain Management</h3>
                <p className="text-slate-300">
                  Comprehensive approach to spine pain management and treatment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Expert Surgeons</h3>
                <p className="text-slate-300">
                  Experienced spine surgeons with specialized training in complex procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default SpineSurgery;
